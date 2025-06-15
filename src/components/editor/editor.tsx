import { useParams } from 'react-router-dom'
import '../editor/editor.css'
import { renderTemplate } from '../../templates/renderer';
import { templates } from '../../templates/templateConfigs';
import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import { useRef } from 'react';
import domtoimage from 'dom-to-image-more';

export default function Editor() {
  const { templateId } = useParams();
  const template = templates.find((t) => t.id === templateId);
  const previewRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [validationError, setValidationError] = useState('');


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

  const handleChange = async (fieldId: string, value: any) => {
    if (value instanceof File) {
      try {
        const base64 = await convertToBase64(value);
        setFormData((prev) => ({ ...prev, [fieldId]: base64 }));
      } catch (error) {
        console.error('Ошибка при обработке файла:', error);
      }
    } else {
      setFormData((prev) => ({ ...prev, [fieldId]: value }));
    }
  };

  const validateFormData = () => {
  if (!template) return [];

  return template.fields
    .filter((field) => field.required)
    .filter((field) => {
      if (field.type === 'custom-date') {
        return !formData.day || !formData.month;
      }

      const value = formData[field.id];

      if (typeof value === 'string') {
        return value.trim() === '';
      }

      return value === undefined || value === null;
    })
    .map((field) => field.label);
};



const handleDownload = async () => {
  const missingFields = validateFormData();

  if (missingFields.length > 0) {
    setValidationError('Пожалуйста, заполните обязательные поля');
    return;
  }

  setValidationError(''); // Сброс ошибки, если всё ок

  if (!previewRef.current) return;
  const templateElement = previewRef.current.querySelector('.template') as HTMLElement;
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
        transformOrigin: 'top left',
        width: `${originalWidth}px`,
        height: `${originalHeight}px`,
      },
      quality: 1,
      filter: () => true,
    });

    const link = document.createElement('a');
    link.download = 'template.png';
    link.href = dataUrl;
    link.click();
  } catch (e) {
    console.error('Ошибка при скачивании изображения', e);
  }
};


  const formattedDate = formData.day && formData.month
    ? `${formData.day.toString().padStart(2, '0')}/${formData.month.toString().padStart(2, '0')}`
    : '';

  const formDataWithDate = {
    ...formData,
    date: formattedDate,
  };

  return (
    <>
      <Header/>
      <div className="editor-screen">
        <div className="preview" ref={previewRef}>
          {renderTemplate(template.id, formDataWithDate)}
        </div>

        <Sidebar fields={template.fields} formData={formData} onChange={handleChange} />
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