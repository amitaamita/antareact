import React from 'react';
import './Generer.css'; // Assurez-vous d'avoir le bon chemin vers votre fichier CSS

const Genererrapport = () => {
    const employeeName = "David Ndour";
    const department = "Ventes";
    const evaluationPeriod = "Janvier 2024 - Mars 2024";
    const performanceRating = "Bon";
    const managerComments = "David Ndour a démontré une forte capacité à atteindre ses objectifs trimestriels. Il pourrait cependant améliorer ses compétences en communication inter-équipes. De plus, il a bien respecté les délais fixés pour les projets principaux.";
    const objectivesAchieved = "Oui";
    const suggestions = "David Ndour devrait participer à plus de formations en gestion de projet et améliorer son approche collaborative.";

    const printReport = () => {
        window.print();
    };

    return (
        <div className="container">
            <div className="report-header">
                <div className="info-block">
                    <h3>Nom de l'employé :</h3>
                    <p id="employee-name">{employeeName}</p>
                </div>
                <div className="info-block">
                    <h3>Département :</h3>
                    <p id="department">{department}</p>
                </div>
                <div className="info-block">
                    <h3>Période d'évaluation :</h3>
                    <p id="evaluation-period">{evaluationPeriod}</p>
                </div>
            </div>

            <div className="report-content">
                <h2>Évaluation Globale de la Performance :</h2>
                <p id="performance-rating">{performanceRating}</p>

                <h2>Commentaires du Manager :</h2>
                <p id="manager-comments">{managerComments}</p>

                <h2>Objectifs Atteints :</h2>
                <p id="objectives-achieved">{objectivesAchieved}</p>

                <h2>Suggestions d'Amélioration :</h2>
                <p id="suggestions">{suggestions}</p>
            </div>

            <div className="report-footer">
                <button onClick={printReport}>Imprimer le Rapport</button>
            </div>
        </div>
    );
};

export default Genererrapport;
