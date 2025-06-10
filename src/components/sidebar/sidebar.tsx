import type { TemplateField } from '../../templates/types';
import './sidebar.css';
import LogoSelector from '../logoSelector/logoSelector';
import PlayerPhotoSelector from '../playerPhotoSelector/playerPhotoSelector';

interface SidebarProps {
    fields: TemplateField[];
    formData: Record<string, any>;
    onChange: (fieldId: string, value: any) => void;
}

export default function Sidebar({ fields, formData, onChange }: SidebarProps) {
    const renderField = (field: TemplateField) => {
        const [label, hint] = field.label.split(' (');

        switch (field.type) {
            case 'text':
                return (
                    <input
                        type="text"
                        value={formData[field.id] || ''}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        placeholder={label}
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
                        <select
                            value={formData.month || ''}
                            onChange={(e) => onChange('month', e.target.value)}
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
                    </div>
                );
            case 'logo-selector':
                return (
                    <LogoSelector
                        selectedLogo={formData[field.id]}
                        onSelect={(logoPath) => onChange(field.id, logoPath)}
                    />
                );
            case 'player-photo-selector':
                return (
                    <PlayerPhotoSelector
                        selectedPhoto={formData[field.id]}
                        onSelect={(photoPath) => onChange(field.id, photoPath)}
                    />
                );
            case 'role':
                return(
                    <select value={formData.month || ''}
                            onChange={(e) => onChange(field.id, e.target.value)}
                    >
                        <option value="">Выберите амплуа</option>
                        <option value="attacker">Нападающая</option>
                        <option value='blocker'>Блокирующая</option>
                        <option value='libero'>Либеро</option>
                        <option value='binder'>Связующая</option>
                        <option value='coach'>Тренер</option>
                    </select>
                );
            case 'number':
                return(
                    <input 
                        type='number'
                        value={formData[field.id] || ''}
                        onChange={(e) => onChange(field.id, e.target.value)}
                        placeholder={label}>
                    </input>
                );
            default:
                return null;
        }
    };

    return (
        <div className="sidebar">
            {fields.map((field) => {
                const [label, hint] = field.label.split(' (');
                const formattedHint = hint ? `(${hint}` : '';
                
                return (
                    <div key={field.id} className="field">
                        <label>{label}</label>
                        {formattedHint && <span className="field-hint">{formattedHint}</span>}
                        {renderField(field)}
                    </div>
                );
            })}
        </div>
    );
}
