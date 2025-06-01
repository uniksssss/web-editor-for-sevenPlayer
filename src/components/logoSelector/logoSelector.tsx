import { useState } from 'react';
import './logoSelector.css';

interface LogoSelectorProps {
    onSelect: (logoPath: string) => void;
    selectedLogo?: string;
}

const logos = [
    { id: 'uralochka', name: 'Уралочка', path: '/src/assets/logos/uralochka.png' },
    { id: 'lokomotiv', name: 'Локомотив', path: '/src/assets/logos/loko.png' },
    { id: 'tulitsa', name: 'Тулица', path: '/src/assets/logos/tulitsa.png' },
    { id: 'omichka', name: 'Омичка', path: '/src/assets/logos/omichka.png' },
    { id: 'minsk', name: 'Минск', path: '/src/assets/logos/minsk.jpg' },
    { id: 'leningradka', name: 'Ленинградка', path: '/src/assets/logos/leningradka.png' },
    { id: 'zarechye', name: 'Заречье', path: '/src/assets/logos/zarechye.png' },
    { id: 'enisey', name: 'Енисей', path: '/src/assets/logos/enisey.png' },
    { id: 'dinamoMetar', name: 'Динамо-Метар', path: '/src/assets/logos/dinamoMetar.png' },
    { id: 'dinamoAkBars', name: 'Динамо-Ак Барс', path: '/src/assets/logos/dinamoAkBars.png' },
    { id: 'dinamoKrasnodar', name: 'Динамо-Краснодар', path: '/src/assets/logos/dinamoKrasnodar.png' },
    { id: 'proton', name: 'Протон', path: '/src/assets/logos/proton.png' },
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