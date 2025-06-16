import { useState, useMemo } from 'react';
import './logoSelector.css';

interface LogoSelectorProps {
    onSelect: (logoPath: string) => void;
    selectedLogo?: string;
}

const logoImports = import.meta.glob('../../assets/logos/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default',
});


const logoNamesMap: Record<string, string> = {
    uralochka: 'Уралочка',
    lokomotiv: 'Локомотив',
    tulitsa: 'Тулица',
    omichka: 'Омичка',
    minsk: 'Минск',
    leningradka: 'Ленинградка',
    zarechye: 'Заречье',
    enisey: 'Енисей',
    loko: 'Локомотив',
    dinamoMetar: 'Динамо-Метар',
    dinamoAkBars: 'Динамо-Ак Барс',
    dinamoKrasnodar: 'Динамо-Краснодар',
    proton: 'Протон',
};

export default function LogoSelector({ onSelect, selectedLogo }: LogoSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);

    const logos = useMemo(() => {
    const allLogos = Object.entries(logoImports).map(([path, url]) => {
            const id = path
                .split('/')
                .pop()!
                .split('.')[0];

            return {
                id,
                name: logoNamesMap[id] || id,
                path: url as string,
            };
        });

        return allLogos.sort((a, b) => {
            if (a.id === 'uralochka') return -1;
            if (b.id === 'uralochka') return 1;
            return 0;
        });
    }, []);


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
