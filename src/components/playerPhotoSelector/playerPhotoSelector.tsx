import { useState, useRef } from 'react';
import './playerPhotoSelector.css';

interface PlayerPhotoSelectorProps {
    onSelect: (photoPath: string) => void;
    selectedPhoto?: string;
}

const playerPhotos = [
    { id: 'tica', name: 'Тица', path: '/src/assets/players/Tica.png' },
    { id: 'kushniruk', name: 'Кушнирук', path: '/src/assets/players/kushniruk.png' },
    { id: 'snip', name: 'Шнип', path: '/src/assets/players/Snip.png' },
    { id: 'sokolova', name: 'Соколова', path: '/src/assets/players/Sokolova.png' },
    { id: 'bessonova', name: 'Бессонова', path: '/src/assets/players/Bessonova.png' },
    { id: 'voropaeva', name: 'Воропаева', path: '/src/assets/players/Voropaeva.png' },
    { id: 'cernyseva', name: 'Чернышева', path: '/src/assets/players/Cernyseva.png' },
    { id: 'protopopova', name: 'Протопопова', path: '/src/assets/players/Protopopova.png' },
    { id: 'shelkovkina', name: 'Шелковкина', path: '/src/assets/players/shelkovkina.png' },
    { id: 'musienko', name: 'Мусиенко', path: '/src/assets/players/Musienko.png' },
    { id: 'psenicyna', name: 'Пшеницына', path: '/src/assets/players/Psenicyna.png' },
    { id: 'lesnak', name: 'Лесняк', path: '/src/assets/players/Lesnak.png' },
    { id: 'kataeva', name: 'Катаева', path: '/src/assets/players/Kataeva.png' },
    { id: 'demesok', name: 'Демешок', path: '/src/assets/players/Demesok.png' },
    { id: 'nikitina', name: 'Никитина', path: '/src/assets/players/Nikitina.png' },
    { id: 'hlebnikova', name: 'Хлебникова', path: '/src/assets/players/Hlebnikova.png' },
    { id: 'zvereva', name: 'Зверева', path: '/src/assets/players/Zvereva.png' },
    { id: 'dzioeva', name: 'Джиоева', path: '/src/assets/players/Dzioeva.png' },
    { id: 'truhina', name: 'Трухина', path: '/src/assets/players/Truhina.png' },
    { id: 'pavlova', name: 'Павлова', path: '/src/assets/players/Pavlova.png' },
    { id: 'vaganova', name: 'Ваганова', path: '/src/assets/players/Vaganova.png' },
    { id: 'svydkaa', name: 'Швыдкая', path: '/src/assets/players/Svydkaa.png' },
    { id: 'fitisova', name: 'Фитисова', path: '/src/assets/players/Fitisova.png' },
];

export default function PlayerPhotoSelector({ onSelect, selectedPhoto }: PlayerPhotoSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                onSelect(result);
                setIsOpen(false);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="player-photo-selector">
            <div className="player-photo-selector-button" onClick={() => setIsOpen(!isOpen)}>
                {selectedPhoto ? (
                    <img src={selectedPhoto} alt="Selected player photo" className="selected-photo" />
                ) : (
                    <span>Выберите фото игрока</span>
                )}
            </div>
            {isOpen && (
                <div className="player-photo-options">
                    {playerPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className="player-photo-option"
                            onClick={() => {
                                onSelect(photo.path);
                                setIsOpen(false);
                            }}
                        >
                            <img src={photo.path} alt={photo.name} />
                            <span>{photo.name}</span>
                        </div>
                    ))}
                    <div 
                        className="player-photo-option upload-option"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <span>+ Добавить своё фото</span>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                </div>
            )}
        </div>
    );
} 