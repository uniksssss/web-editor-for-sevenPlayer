export type FieldType = 'text' | 'image' | 'date' | 'time' | 'custom-date' 
                      | 'logo-selector' | 'player-photo-selector' | 'number' |'role' | 'toggle-team';

export interface TemplateField {
  id: string;
  label: string;
  type: FieldType;
  defaultValue?: string;
}

export interface TemplateConfig {
  id: string;
  name: string;
  previewImage: string;
  fields: TemplateField[];
}
