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

// Données de performance mensuelle pour chaque employé
const employeeData = [
  { name: 'Jean Dupont', monthlyScores: [8, 8.5, 7.8, 8.1, 8.5, 8.3, 8.6, 8.7, 8.4, 8.9, 8.8, 8.5], color: '#4CAF50' },
  { name: 'Marie Durant', monthlyScores: [9, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.5, 9.4, 9.3, 9.5], color: '#FF5722' },
  { name: 'Lucas Martin', monthlyScores: [7.5, 7.4, 7.6, 7.5, 7.3, 7.2, 7.8, 7.7, 7.5, 7.6, 7.7, 7.5], color: '#2196F3' },
  { name: 'Sophie Leblanc', monthlyScores: [9.5, 9.6, 9.7, 9.8, 9.7, 9.75, 9.8, 9.9, 9.85, 9.9, 9.75, 9.8], color: '#9C27B0' },
  { name: 'Paul Girard', monthlyScores: [7.5, 7.6, 7.4, 7.3, 7.2, 7.5, 7.8, 7.9, 7.5, 7.6, 7.4, 7.5], color: '#FFC107' },
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
      title: { display: true, text: 'Évolution des Performances Mensuelles' },
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
      <h1>Évaluation de la Division Production</h1>

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
          fontSize: '14px',
        }}
      >
        <span style={{ fontSize: '20px' }}>&larr;</span>
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
