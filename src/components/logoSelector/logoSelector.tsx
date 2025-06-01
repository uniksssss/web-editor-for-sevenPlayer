import { useState } from 'react';
import './logoSelector.css';

interface LogoSelectorProps {
    onSelect: (logoPath: string) => void;
    selectedLogo?: string;
}

const logos = [
    { id: 'uralochka', name: 'Уралочка', path: '/logos/uralochka.png' },
    { id: 'lokomotiv', name: 'Локомотив', path: '/logos/lokomotiv.png' },
    { id: 'tulitsa', name: 'Тулица', path: '/logos/tulitsa.png' },
    { id: 'omichka', name: 'Омичка', path: '/logos/omichka.svg' },
    { id: 'minsk', name: 'Минск', path: '/logos/minsk.jpg' },
    { id: 'leningradka', name: 'Ленинградка', path: '/logos/leningradka.png' },
    { id: 'zarechye', name: 'Заречье', path: '/logos/zarechye.svg' },
    { id: 'enisey', name: 'Енисей', path: '/logos/enisey.svg' },
    { id: 'dinamoMetar', name: 'Динамо-Метар', path: '/logos/dinamoMetar.png' },
    { id: 'dinamoAkBars', name: 'Динамо-Ак Барс', path: '/logos/dinamoAkBars.svg' },
    { id: 'dinamoKrasnodar', name: 'Динамо-Краснодар', path: '/logos/dinamoKrasnodar.png' },
    { id: 'proton', name: 'Протон', path: '/logos/proton.svg' },
];

export default function LogoSelector({ onSelect, selectedLogo }: LogoSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="logo-selector">
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