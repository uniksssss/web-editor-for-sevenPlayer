import type { TemplateField } from '../../templates/types';
import './sidebar.css';
import LogoSelector from '../logoSelector/logoSelector';

interface SidebarProps {
    fields: TemplateField[];
    formData: Record<string, any>;
    onChange: (fieldId: string, value: any) => void;
}

export default function Sidebar({ fields, formData, onChange }: SidebarProps) {
    const renderField = (field: TemplateField) => {
        switch (field.type) {
            case 'text':
                return (
                    <input
                        type="text"
                        value={formData[field.id] || ''}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        placeholder={field.label}
                    />
                );
            case 'image':
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
                    />
                );
            case 'time':
                return (
                    <input
                        type="time"
                        value={formData[field.id] || ''}
                        onChange={(e) => onChange(field.id, e.target.value)}
                    />
                );
            case 'custom-date':
                return (
                    <div className="date-inputs">
                        <input
                            type="number"
                            min="1"
                            max="31"
                            placeholder="День"
                            value={formData.day || ''}
                            onChange={(e) => onChange('day', e.target.value)}
                        />
                        <input
                            type="number"
                            min="1"
                            max="12"
                            placeholder="Месяц"
                            value={formData.month || ''}
                            onChange={(e) => onChange('month', e.target.value)}
                        />
                    </div>
                );
            case 'logo-selector':
                return (
                    <LogoSelector
                        label={field.label}
                        selectedLogo={formData[field.id]}
                        onSelect={(logoPath) => onChange(field.id, logoPath)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="sidebar">
            {fields.map((field) => (
                <div key={field.id} className="field">
                    <label>{field.label}</label>
                    {renderField(field)}
                </div>
            ))}
        </div>
    );
}
