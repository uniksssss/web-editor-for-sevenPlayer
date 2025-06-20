/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import "../editor/editor.css";
import { renderTemplate } from "../../templates/renderer";
import { templates } from "../../templates/templateConfigs";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { useRef } from "react";
import domtoimage from "dom-to-image-more";
import type { ResultsBlock } from "../../templates/resultsTemplate";

export default function Editor() {
  const { templateId } = useParams();
  const template = templates.find((t) => t.id === templateId);
  const previewRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [validationError, setValidationError] = useState("");

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  function groupFormDataToResults(
    formData: Record<string, any>
  ): ResultsBlock[] {
    const results: ResultsBlock[] = [];

    for (let i = 1; i <= 4; i++) {
      results.push({
        mainHomeScore: formData[`mainHomeScore${i}`],
        mainAwayScore: formData[`mainAwayScore${i}`],
        extraScore: formData[`extraScore${i}`],
        homeLogo: formData[`homeLogo${i}`],
        awayLogo: formData[`awayLogo${i}`],
      });
    }

    return results;
  }

  const handleChange = async (fieldId: string, value: any) => {
    if (value instanceof File) {
      try {
        const base64 = await convertToBase64(value);
        setFormData((prev) => ({ ...prev, [fieldId]: base64 }));
      } catch (error) {
        console.error("Ошибка при обработке файла:", error);
      }
    } else {
      setFormData((prev) => ({ ...prev, [fieldId]: value }));
    }
  };

  const isValidDate = (dayStr: string, monthStr: string): boolean => {
    const day = Number(dayStr);
    const month = Number(monthStr);

    if (!day || !month) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1) return false;

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day > daysInMonth[month - 1]) return false;

    return true;
  };

  const validateFormData = () => {
    if (!template) return [];

    const missingFields = template.fields
      .filter((field) => field.required)
      .filter((field) => {
        if (field.type === "custom-date") {
          const day = formData[`${field.id}_day`];
          const month = formData[`${field.id}_month`];
          if (!day || !month) return true;

          if (!isValidDate(day, month)) return true;

          return false;
        }

        const value = formData[field.id];

        if (typeof value === "string") {
          return value.trim() === "";
        }

        return value === undefined || value === null;
      })
      .map((field) => field.label);
    return missingFields;
  };

  const handleDownload = async () => {
    const missingFields = validateFormData();

    if (missingFields.length > 0) {
      setValidationError(
        "Пожалуйста, заполните обязательные поля или проверьте на"
      );
      return;
    }

    setValidationError("");

    if (!previewRef.current) return;
    const templateElement = previewRef.current.querySelector(
      ".template"
    ) as HTMLElement;
    if (!templateElement) return;

    try {
      const originalWidth = templateElement.offsetWidth;
      const originalHeight = templateElement.offsetHeight;
      const scale = 4;
      const width = originalWidth * scale;
      const height = originalHeight * scale;

      const dataUrl = await domtoimage.toPng(templateElement, {
        width,
        height,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${originalWidth}px`,
          height: `${originalHeight}px`,
        },
        quality: 1,
        filter: () => true,
      });

      const link = document.createElement("a");
      link.download = "template.png";
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Ошибка при скачивании изображения", e);
    }
  };

  function transformFormData(formData: Record<string, any>) {
    const formatDate = (day: string, month: string) =>
      day && month ? `${day.padStart(2, "0")}.${month.padStart(2, "0")}` : "";

    return {
      ...formData,
      date: formatDate(formData.date_day, formData.date_month),
      date1: formatDate(formData.date1_day, formData.date1_month),
      time1: formData.date1_time || "",
      date2: formatDate(formData.date2_day, formData.date2_month),
      time2: formData.date2_time || "",
      date3: formatDate(formData.date3_day, formData.date3_month),
      time3: formData.date3_time || "",
      date4: formatDate(formData.date4_day, formData.date4_month),
      time4: formData.date4_time || "",
    };
  }

  const formDataWithDate = transformFormData(formData);
  if (!template) return null;

  return (
    <>
      <Header />
      <div className="editor-screen">
        <div className="preview" ref={previewRef}>
          {renderTemplate(template.id, {
            ...formDataWithDate,
            results: groupFormDataToResults(formDataWithDate),
          })}
        </div>

        <Sidebar
          templateId={template.id}
          fields={template.fields}
          formData={formData}
          onChange={handleChange}
        />

        <div className="editor-actions">
          <button className="editor_button" onClick={handleDownload}>
            Скачать изображение
          </button>
          {validationError && (
            <p className="validation-error">{validationError}</p>
          )}
        </div>
      </div>
    </>
  );
}
