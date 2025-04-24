import React, { useState } from 'react';
import { Excuse } from './App';
import './ExcuseForm.css';

interface ExcuseFormProps {
    onSubmit: (excuse: Omit<Excuse, 'id'>) => void;
}

const ExcuseForm: React.FC<ExcuseFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('spóźnienie');
    const [credibility, setCredibility] = useState(5);
    const [date, setDate] = useState('');
    const [creativity, setCreativity] = useState('średnia');
    const [details, setDetails] = useState('');
    const [urgent, setUrgent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !date) {
            alert('Wypełnij wszystkie wymagane pola!');
            return;
        }

        onSubmit({
            name,
            reason,
            credibility,
            date,
            creativity,
            details,
            urgent
        });

        setName('');
        setReason('spóźnienie');
        setCredibility(5);
        setDate('');
        setCreativity('średnia');
        setDetails('');
        setUrgent(false);
    };

    return (
        <div className="excuse-form-container">
            <h2>Stwórz nową wymówkę</h2>
            <form onSubmit={handleSubmit} className="excuse-form">
                <div className="form-group">
                    <label htmlFor="name">Imię:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="reason">Powód wymówki:</label>
                    <select
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    >
                        <option value="spóźnienie">Spóźnienie</option>
                        <option value="niedostarczenie pracy domowej">Niedostarczenie pracy domowej</option>
                        <option value="brak odpowiedzi na wiadomość">Brak odpowiedzi na wiadomość</option>
                        <option value="nieobecność">Nieobecność</option>
                        <option value="zapomnienie rzeczy">Zapomnienie rzeczy</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="credibility">Poziom wiarygodności ({credibility}):</label>
                    <input
                        type="range"
                        id="credibility"
                        min="1"
                        max="10"
                        value={credibility}
                        onChange={(e) => setCredibility(parseInt(e.target.value))}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Data zdarzenia:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="creativity">Poziom kreatywności:</label>
                    <select
                        id="creativity"
                        value={creativity}
                        onChange={(e) => setCreativity(e.target.value)}
                    >
                        <option value="mała">Mała</option>
                        <option value="średnia">Średnia</option>
                        <option value="duża">Duża</option>
                        <option value="bardzo duża">Bardzo duża</option>
                        <option value="kosmiczna">Kosmiczna</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="details">Dodatkowe szczegóły:</label>
                    <textarea
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        rows={4}
                    />
                </div>

                <div className="form-group-checkbox">
                    <label htmlFor="urgent">Wymówka pilna:</label>
                    <input
                        type="checkbox"
                        id="urgent"
                        checked={urgent}
                        onChange={(e) => setUrgent(e.target.checked)}
                    />
                </div>

                <button type="submit" className="submit-btn">Generuj wymówkę</button>
            </form>
        </div>
    );
};

export default ExcuseForm;