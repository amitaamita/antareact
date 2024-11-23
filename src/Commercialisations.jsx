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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Données de performance mensuelle pour chaque employé de la division Commercialisation
const employeeData = [
  { name: 'Alice Moreau', monthlyScores: [8.3, 8.5, 8.1, 8.4, 8.6, 8.9, 9.0, 9.2, 8.8, 8.7, 8.9, 8.6], color: '#FF6384' },
  { name: 'Marc Dupuis', monthlyScores: [7.8, 8.0, 7.9, 8.1, 8.2, 8.4, 8.3, 8.5, 8.4, 8.2, 8.1, 8.3], color: '#36A2EB' },
  { name: 'Nina Petit', monthlyScores: [9.0, 9.1, 9.2, 9.4, 9.3, 9.5, 9.4, 9.6, 9.5, 9.4, 9.3, 9.5], color: '#FFCE56' },
  { name: 'Olivier Martin', monthlyScores: [8.5, 8.6, 8.4, 8.3, 8.7, 8.8, 8.7, 8.9, 8.8, 8.9, 8.7, 8.6], color: '#4BC0C0' },
  { name: 'Chloé Bernard', monthlyScores: [8.2, 8.4, 8.3, 8.5, 8.6, 8.7, 8.9, 8.8, 8.7, 8.6, 8.4, 8.5], color: '#9966FF' },
];

// Mois pour l'axe des x et pour les en-têtes du tableau
const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

function EvaluationTable() {
  // Créer un dataset par employé avec des couleurs et les scores mensuels
  const datasets = employeeData.map((employee) => ({
    label: employee.name,
    data: employee.monthlyScores.map(score => score * 10), // Multiplier pour obtenir un pourcentage
    borderColor: employee.color,
    backgroundColor: `${employee.color}33`, // Couleur de fond semi-transparente
    pointBackgroundColor: employee.color,
    pointBorderColor: '#fff',
    fill: true,
    tension: 0.4,
  }));

  const data = {
    labels: months,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Évolution des Performances Mensuelles - Division Commercialisation' },
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

  // Fonction pour revenir à la page précédente
  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h1>Évaluation de la Division Commercialisation</h1>

      {/* Bouton retour avec uniquement la flèche */}
      <button
        onClick={goBack}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 15px',
          backgroundColor: 'transparent', // Transparent background
          color: '#000', // Black arrow color
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        ←
      </button>

      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr>
              <th style={headerStyle}>Nom de l'Employé</th>
              {months.map((month, index) => (
                <th key={index} style={headerStyle}>{month}</th>
              ))}
              <th style={headerStyle}>Moyenne Annuelle</th>
              <th style={headerStyle}>Pourcentage</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee, index) => {
              const annualAverage = (employee.monthlyScores.reduce((a, b) => a + b, 0) / 12).toFixed(2);
              const percentage = (annualAverage * 10).toFixed(2);

              return (
                <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
                  <td style={cellStyle}>{employee.name}</td>
                  {employee.monthlyScores.map((score, monthIndex) => (
                    <td key={monthIndex} style={cellStyle}>{score}/10</td>
                  ))}
                  <td style={cellStyle}>{annualAverage}/10</td>
                  <td style={cellStyle}>{percentage}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

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

export default EvaluationTable;
