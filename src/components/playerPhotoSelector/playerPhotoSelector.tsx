import { useState, useMemo, useRef } from "react";
import "./playerPhotoSelector.css";

interface PlayerPhotoSelectorProps {
  onSelect: (photoPath: string) => void;
  selectedPhoto?: string;
}

const playerPhotoImports = import.meta.glob(
  "../../assets/players/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

const playerNamesMap: Record<string, string> = {
  tica: "Тица",
  kushniruk: "Кушнирук",
  snip: "Шнип",
  sokolova: "Соколова",
  bessonova: "Бессонова",
  voropaeva: "Воропаева",
  protopopova: "Протопопова",
  shelkovkina: "Шелковкина",
  musienko: "Мусиенко",
  psenicyna: "Пшеницына",
  lesnak: "Лесняк",
  kataeva: "Катаева",
  demesok: "Демешок",
  nikitina: "Никитина",
  hlebnikova: "Хлебникова",
  zvereva: "Зверева",
  dzioeva: "Джиоева",
  truhina: "Трухина",
  pavlova: "Павлова",
  vaganova: "Ваганова",
  svydkaa: "Швыдкая",
  fitisova: "Фитисова",
  kuzmina: "Кузьмина",
};

export default function PlayerPhotoSelector({
  onSelect,
  selectedPhoto,
}: PlayerPhotoSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const playerPhotos = useMemo(() => {
    return Object.entries(playerPhotoImports).map(([path, url]) => {
      const fileName = path.split("/").pop()!.split(".")[0];
      const id = fileName.toLowerCase();

      return {
        id,
        name: playerNamesMap[id] || fileName,
        path: url as string,
      };
    });
  }, []);

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
      <div
        className="player-photo-selector-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedPhoto ? (
          <img
            src={selectedPhoto}
            alt="Selected player photo"
            className="selected-photo"
          />
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
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
}
