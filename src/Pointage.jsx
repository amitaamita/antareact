import React, { useState } from 'react';
import './Pointage.css';

function PointageForm() {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [date, setDate] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nom de l'employé :", employeeName);
        console.log("ID de l'employé :", employeeId);
        console.log("Heure d'Arrivée :", checkIn);
        console.log("Heure de Départ :", checkOut);
        console.log("Date :", date);

        // Affiche le message de confirmation
        showConfirmationPopup();
        setShowSuccessMessage(true); // Active le message de succès
    };

    const showConfirmationPopup = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div className="container">
            <h2>Pointage des Employés</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="employee-name">Nom de l'employé :</label>
                    <input
                        type="text"
                        id="employee-name"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        placeholder="Entrez votre nom"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="employee-id">ID de l'employé :</label>
                    <input
                        type="text"
                        id="employee-id"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        placeholder="Entrez votre ID d'employé"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="check-in">Heure d'Arrivée :</label>
                    <input
                        type="time"
                        id="check-in"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="check-out">Heure de Départ :</label>
                    <input
                        type="time"
                        id="check-out"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date :</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Soumettre le Pointage</button>
            </form>

            {showPopup && (
                <div className="confirmation-popup">Pointage soumis avec succès !</div>
            )}

            {showSuccessMessage && (
                <div className="success-message">
                    <h3>Pointage reçu !</h3>
                    <p>Merci, {employeeName}. Votre pointage pour la date {date} a été enregistré avec succès.</p>
                </div>
            )}
        </div>
    );
}

export default PointageForm;
