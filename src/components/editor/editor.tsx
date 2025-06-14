import { useParams } from 'react-router-dom'
import '../editor/editor.css'
import { renderTemplate } from '../../templates/renderer';
import { templates } from '../../templates/templateConfigs';
import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import html2canvas from 'html2canvas';
import { useRef } from 'react';


export default function Editor() {
const { templateId } = useParams();
const template = templates.find((t) => t.id === templateId);

const previewRef = useRef<HTMLDivElement>(null);


const [formData, setFormData] = useState<Record<string, any>>({});

if (!template) return <p>Шаблон не найден</p>;

const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const handleChange = async (fieldId: string, value: any) => {
  if (value instanceof File) {
    const base64 = await convertToBase64(value);
    setFormData((prev) => ({ ...prev, [fieldId]: base64 }));
  } else {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  }
};


const waitForImagesToLoad = (element: HTMLElement) => {
  const images = element.querySelectorAll('img');
  const promises = Array.from(images).map((img) => {
    if (img.complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      img.onload = img.onerror = () => resolve();
    });
  });
  return Promise.all(promises);
};


const handleDownload = async () => {
  if (!previewRef.current) return;
  const templateElement = previewRef.current.querySelector('.template') as HTMLElement;
  if (!templateElement) return;

  await waitForImagesToLoad(templateElement);

  const canvas = await html2canvas(templateElement, {
    backgroundColor: null,
    scale: 4,
    useCORS: true,
    allowTaint: true,
    imageTimeout: 0,
    logging: false,
    onclone: (clonedDoc) => {
      const clonedElement = clonedDoc.querySelector('.template') as HTMLElement;
      if (clonedElement) {
        const playerPhotos = clonedElement.querySelectorAll('.birthday-player-photo, .matchday-player-photo');
            playerPhotos.forEach(img => {
            const imgElement = img as HTMLImageElement;
            imgElement.style.transform = 'translateX(-50%)';
          });

        const logos = clonedElement.querySelectorAll('.logo_home, .logo_away');
        logos.forEach(img => {
          const imgElement = img as HTMLImageElement;
          imgElement.style.maxWidth = '60px';
          imgElement.style.width = '60px';
          imgElement.style.height = 'auto';
          imgElement.style.objectFit = 'contain';
        });

        const background = clonedElement.querySelector('.background') as HTMLImageElement;
        if (background) {
          background.style.width = '100%';
          background.style.height = '100%';
          background.style.objectFit = 'cover';
        }
      }
    }
  });

  const link = document.createElement('a');
  link.download = 'template.png';
  link.href = canvas.toDataURL('image/png', 1.0);
  link.click();
};


const formattedDate =
formData.day && formData.month
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
        <button className='editor_button' onClick={handleDownload}>Скачать изображение</button>
    </div>
</>
);
}
