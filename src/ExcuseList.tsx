import { Excuse } from './App';
import './ExcuseList.css';

interface ExcuseListProps {
    excuses: Excuse[];
}

const ExcuseList: React.FC<ExcuseListProps> = ({ excuses }) => {
    const generateExcuseText = (excuse: Excuse): string => {
        let excuseText = '';

        const excuseIntros = [
            `Panie Profesorze, niestety ${excuse.reason} ponieważ`,
            `Przepraszam bardzo, ale ${excuse.reason}, gdyż`,
            `Z przykrością informuję, że ${excuse.reason}, ponieważ`,
        ];

        const excuseReasons = {
            'mała': ['zaspałem', 'autobus się spóźnił', 'zapomniałem'],
            'średnia': ['złapałem gumę w rowerze', 'mój pies zjadł moje notatki'],
            'duża': ['spotkałem trola, który zagrodził mi drogę', 'mój budzik przemówił ludzkim głosem'],
            'bardzo duża': ['kosmici porwali mojego psa', 'wpadłem do portalu'],
            'kosmiczna': ['zostałem wybrany do misji ratowania świata', 'zamieniłem się ciałami z psem']
        };

        const introIndex = Math.floor(Math.random() * excuseIntros.length);
        const reasonIndex = Math.floor(Math.random() * 2);

        excuseText = `${excuseIntros[introIndex]} ${excuseReasons[excuse.creativity as keyof typeof excuseReasons][reasonIndex]}`;

        if (excuse.details) {
            excuseText += `. ${excuse.details}`;
        }

        excuseText += `. Poziom wiarygodności: ${excuse.credibility}, data: ${excuse.date}`;

        if (excuse.urgent) {
            excuseText += ', PILNE!';
        }

        return excuseText;
    };

    return (
        <div className="excuse-list-container">
            <h2>Lista wymówek</h2>
            {excuses.length === 0 ? (
                <p className="no-excuses">Brak wymówek. Utwórz pierwszą!</p>
            ) : (
                <div className="excuse-list">
                    {excuses.map((excuse) => (
                        <div key={excuse.id} className="excuse-item">
                            <p><strong>{excuse.name}</strong> - {excuse.date} {excuse.urgent ? '(PILNE)' : ''}</p>
                            <p>{generateExcuseText(excuse)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExcuseList;