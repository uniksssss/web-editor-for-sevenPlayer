/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TemplateField } from "../../templates/types";
import "./sidebar.css";
import LogoSelector from "../logoSelector/logoSelector";
import PlayerPhotoSelector from "../playerPhotoSelector/playerPhotoSelector";

interface SidebarProps {
  templateId: string;
  fields: TemplateField[];
  formData: Record<string, any>;
  onChange: (fieldId: string, value: any) => void;
}

export default function Sidebar({
  fields,
  formData,
  onChange,
  templateId,
}: SidebarProps) {
  const renderField = (field: TemplateField) => {
    const [label] = field.label.split(" (");
    const value = formData[field.id];
    const showError = field.required && !value;

    const inputClass = showError ? "input-error" : "";

    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            value={formData[field.id] || ""}
            onChange={(e) => onChange(field.id, e.target.value)}
            placeholder={label}
            className={inputClass}
          />
        );
      case "image":
        return (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                onChange(field.id, file);
              }
            }}
            className={inputClass}
          />
        );
      case "time":
        return (
          <input
            type="time"
            value={formData[field.id] || ""}
            onChange={(e) => onChange(field.id, e.target.value)}
            className={inputClass}
          />
        );
      case "custom-date": {
        const isSchedule = templateId === "schedule";

        return (
          <div className={`date-inputs ${isSchedule ? "inline-group" : ""}`}>
            <input
              type="number"
              min="1"
              max="31"
              placeholder="День"
              value={formData[`${field.id}_day`] || ""}
              onChange={(e) => onChange(`${field.id}_day`, e.target.value)}
              className={inputClass}
            />
            <select
              value={formData[`${field.id}_month`] || ""}
              onChange={(e) => onChange(`${field.id}_month`, e.target.value)}
              className={inputClass}
            >
              <option value="">Месяц</option>
              <option value="01">Январь</option>
              <option value="02">Февраль</option>
              <option value="03">Март</option>
              <option value="04">Апрель</option>
              <option value="05">Май</option>
              <option value="06">Июнь</option>
              <option value="07">Июль</option>
              <option value="08">Август</option>
              <option value="09">Сентябрь</option>
              <option value="10">Октябрь</option>
              <option value="11">Ноябрь</option>
              <option value="12">Декабрь</option>
            </select>
            {isSchedule && (
              <input
                type="time"
                value={formData[`${field.id}_time`] || ""}
                onChange={(e) => onChange(`${field.id}_time`, e.target.value)}
                className={inputClass}
              />
            )}
          </div>
        );
      }

      case "logo-selector":
        return (
          <LogoSelector
            selectedLogo={formData[field.id]}
            onSelect={(logoPath) => onChange(field.id, logoPath)}
          />
        );
      case "player-photo-selector":
        return (
          <PlayerPhotoSelector
            selectedPhoto={formData[field.id]}
            onSelect={(photoPath) => onChange(field.id, photoPath)}
          />
        );
      case "role":
        return (
          <select
            value={formData.month || ""}
            onChange={(e) => onChange(field.id, e.target.value)}
            className={inputClass}
          >
            <option value="">Выберите амплуа</option>
            <option value="attacker">Нападающая</option>
            <option value="blocker">Блокирующая</option>
            <option value="libero">Либеро</option>
            <option value="binder">Связующая</option>
            <option value="coach">Тренер</option>
          </select>
        );
      case "number":
        return (
          <input
            type="number"
            value={formData[field.id] || ""}
            onChange={(e) => onChange(field.id, e.target.value)}
            placeholder={label}
            className={inputClass}
          ></input>
        );
      case "toggle-team":
        return (
          <div className="toggle-switch">
            <label>
              <input
                type="radio"
                name="teamVersion"
                value="ntmk"
                checked={formData[field.id] === "ntmk"}
                onChange={() => onChange(field.id, "ntmk")}
                className={inputClass}
              />
              Уралочка-НТМК
            </label>
            <label>
              <input
                type="radio"
                name="teamVersion"
                value="urgau"
                checked={formData[field.id] === "urgau"}
                onChange={() => onChange(field.id, "urgau")}
                className={inputClass}
              />
              Уралочка-2-УрГЭУ
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sidebar">
      <div className="logo-row">
        {fields
          .filter((field) => field.type === "logo-selector")
          .map((field) => (
            <div key={field.id} className="field logo-field">
              <label>
                {field.label}{" "}
                {field.required && <span className="required-marker">*</span>}
              </label>
              <LogoSelector
                selectedLogo={formData[field.id]}
                onSelect={(logoPath) => onChange(field.id, logoPath)}
              />
            </div>
          ))}
      </div>
      {fields
        .filter((field) => field.type !== "logo-selector")
        .map((field) => {
          const [label, hint] = field.label.split(" (");
          const formattedHint = hint ? `(${hint}` : "";

          return (
            <div key={field.id} className="field">
              <label>
                {label}{" "}
                {field.required && <span className="required-marker">*</span>}
              </label>
              {formattedHint && (
                <span className="field-hint">{formattedHint}</span>
              )}
              {renderField(field)}
            </div>
          );
        })}
    </div>
  );
}
