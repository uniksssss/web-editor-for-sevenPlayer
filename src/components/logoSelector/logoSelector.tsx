import { useState } from 'react';
import './logoSelector.css';

interface LogoSelectorProps {
    onSelect: (logoPath: string) => void;
    selectedLogo?: string;
    label: string;
}

const logos = [
    { id: 'uralochka', name: 'Уралочка', path: '/src/assets/logos/uralochka.png' },
    { id: 'akbars', name: 'Динамо-Ак-Барс', path: '/src/assets/logos/dinamoAkBars.svg' },
    { id: 'krasnodar', name: 'Динамо-Краснодар', path: '/src/assets/logos/dinamoKrasnodar.png' },
    { id: 'metar', name: 'Динамо-Метар', path: '/src/assets/logos/dinamoMetar.png' },
    { id: 'leningradka', name: 'Ленинградка', path: '/src/assets/logos/leningradka.png' },
    { id: 'enisey', name: 'Енисей', path: '/src/assets/logos/enisey.svg' },
    { id: 'loko', name: 'Локомотив', path: '/src/assets/logos/lokomotiv.png' },
    { id: 'minsk', name: 'Минчанка', path: '/src/assets/logos/minsk.jpg' },
    { id: 'omichka', name: 'Омичка', path: '/src/assets/logos/omichka.svg' },
    { id: 'proton', name: 'Протон', path: '/src/assets/logos/proton.svg' },
    { id: 'tulitsa', name: 'Тулица', path: '/src/assets/logos/tulitsa.png' },
    { id: 'zarechye', name: 'Заречье-Одинцово', path: '/src/assets/logos/zarechye.svg' },
];

export default function LogoSelector({ onSelect, selectedLogo, label }: LogoSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="logo-selector">
            <label>{label}</label>
            <div className="logo-selector-button" onClick={() => setIsOpen(!isOpen)}>
                {selectedLogo ? (
                    <img src={selectedLogo} alt="Selected logo" className="selected-logo" />
                ) : (
                    <span>Выберите логотип</span>
                )}
            </div>
            {isOpen && (
                <div className="logo-options">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="logo-option"
                            onClick={() => {
                                onSelect(logo.path);
                                setIsOpen(false);
                            }}
                        >
                            <img src={logo.path} alt={logo.name} />
                            <span>{logo.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
} 