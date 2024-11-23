import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';  // Importer useNavigate de react-router-dom

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GestionRessourcesHumaines = () => {
    const navigate = useNavigate(); // Hook pour gérer la navigation

    // Données des employés
    const employees = [
        { name: 'Dupont', monthlyScores: [7.5, 7.8, 8.0, 7.9, 8.1, 8.2, 8.3, 8.4, 8.5, 8.4, 8.6, 8.7], color: '#0074D9' },
        { name: 'Martin', monthlyScores: [8.0, 8.1, 8.2, 8.3, 8.4, 8.5, 8.3, 8.4, 8.2, 8.1, 8.3, 8.4], color: '#FF4136' },
        { name: 'Durand', monthlyScores: [8.6, 8.7, 8.8, 8.9, 8.8, 8.7, 8.9, 9.0, 8.8, 8.9, 9.1, 9.0], color: '#2ECC40' },
    ];

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    // Préparer les datasets pour chaque employé avec des couleurs et des scores mensuels
    const datasets = employees.map((employee) => ({
        label: employee.name,
        data: employee.monthlyScores.map(score => score * 10), // Multiplier pour obtenir un pourcentage
        borderColor: employee.color,
        backgroundColor: `${employee.color}33`, // Couleur de fond semi-transparente
        pointBackgroundColor: employee.color,
        pointBorderColor: '#fff',
        fill: true,
        tension: 0.4, // Lisser la courbe
    }));

    const data = {
        labels: months, // Mois affichés sur l'axe des x
        datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'top' },
            title: { display: true, text: 'Évolution des Performances Mensuelles - Gestion des Ressources Humaines' },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: { display: true, text: 'Note Finale (%)' },
            },
            x: {
                title: { display: true, text: 'Mois' },
            },
        },
    };

    // Calculer la moyenne annuelle de chaque employé et attribuer une catégorie de performance
    const getPerformanceCategory = (average) => {
        if (average < 50) return 'Très Faible';
        if (average >= 50 && average < 70) return 'Faible';
        if (average >= 70 && average < 85) return 'Moyen';
        if (average >= 85 && average < 95) return 'Bon';
        return 'Excellent';
    };

    // Fonction pour revenir à la page précédente
    const handleGoBack = () => {
        navigate(-1);  // Naviguer à la page précédente
    };

    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            {/* Flèche de retour positionnée à gauche */}
            <button onClick={handleGoBack} style={backButtonStyle}>
                &#8592; {/* Flèche */}
            </button>

            <h2>Gestion des Ressources Humaines</h2>
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                    <thead>
                        <tr>
                            <th style={headerStyle}>Nom de l'Employé</th>
                            {months.map((month, index) => (
                                <th key={index} style={headerStyle}>{month}</th>
                            ))}
                            <th style={headerStyle}>Moyenne Annuelle</th>
                            <th style={headerStyle}>Performance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => {
                            const annualAverage = (employee.monthlyScores.reduce((a, b) => a + b, 0) / 12).toFixed(2);
                            const performanceCategory = getPerformanceCategory(annualAverage * 10); // multiplier pour le pourcentage

                            return (
                                <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
                                    <td style={cellStyle}>{employee.name}</td>
                                    {employee.monthlyScores.map((score, monthIndex) => (
                                        <td key={monthIndex} style={cellStyle}>{score}/10</td>
                                    ))}
                                    <td style={cellStyle}>{annualAverage}/10</td>
                                    <td style={cellStyle}>{performanceCategory}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Afficher le graphique */}
            <div style={{ marginTop: '20px', width: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

// Styles pour le tableau
const headerStyle = {
    padding: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: '1px solid #ddd',
    fontSize: '10px',
};

const cellStyle = {
    padding: '8px',
    border: '1px solid #ddd',
    textAlign: 'center',
    fontSize: '10px',
};

const evenRowStyle = {
    backgroundColor: '#f9f9f9',
};

const oddRowStyle = {
    backgroundColor: '#ffffff',
};

// Style du bouton de retour (flèche seule)
const backButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '30px',
    cursor: 'pointer',
    position: 'absolute',
    left: '20px',  // Positionner à gauche
    top: '20px',   // Positionner en haut de la page
};

export default GestionRessourcesHumaines;
