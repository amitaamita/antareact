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
  Filler,
} from 'chart.js';

// Enregistrement des plugins nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GestionAdministration = () => {
  // Données des employés
  const employees = [
    { name: 'Dupont', department: 'Ressources Humaines', position: 'Manager', hoursWorked: [160, 162, 158, 165, 167, 170, 168, 169, 171, 172, 173, 175], color: '#0074D9' },
    { name: 'Martin', department: 'Finance', position: 'Analyst', hoursWorked: [150, 152, 148, 155, 157, 160, 162, 163, 164, 166, 168, 169], color: '#FF4136' },
    { name: 'Durand', department: 'Informatique', position: 'Developer', hoursWorked: [170, 172, 175, 178, 180, 183, 185, 187, 188, 190, 192, 193], color: '#2ECC40' },
    { name: 'Lemoine', department: 'Marketing', position: 'Assistant', hoursWorked: [155, 158, 160, 165, 166, 168, 169, 170, 172, 174, 176, 178], color: '#FF851B' },
  ];

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  // Préparer les datasets pour chaque employé avec des couleurs et des heures travaillées mensuelles
  const datasets = employees.map((employee) => ({
    label: employee.name,
    data: employee.hoursWorked, // Données des heures travaillées pour chaque mois
    borderColor: employee.color,
    backgroundColor: `${employee.color}33`, // Couleur de fond semi-transparente
    pointBackgroundColor: employee.color,
    pointBorderColor: '#fff',
    fill: true, // Remplir la zone sous la courbe
    tension: 0.4, // Lisser la courbe
  }));

  const data = {
    labels: months, // Mois affichés sur l'axe des X
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Évolution des Heures Travaillées - Gestion de l\'Administration' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Heures Travaillées' },
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
    <div className="table-container">
      <h2>Gestion de l'Administration</h2>

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

      {/* Tableau */}
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom de l'Employé</th>
              <th>Département</th>
              <th>Poste</th>
              <th>Heures Travaillées</th>
              <th>Salaire (€)</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td>{employee.hoursWorked.join(', ')}</td>
                <td>{employee.salary} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Graphique */}
      <div style={{ marginTop: '20px', width: '100%' }}>
        <Line data={data} options={options} />
      </div>

      {/* Style CSS intégré */}
      <style jsx>{`
        .table-container {
          width: 80%;
          margin: 20px auto;
          font-family: Arial, sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #ddd;
          font-size: 14px;
          text-align: center;
        }

        .admin-table th, .admin-table td {
          padding: 12px;
          border: 1px solid #ddd;
        }

        .admin-table th {
          background-color: #4CAF50;
          color: white;
          font-size: 16px;
        }

        .admin-table td {
          background-color: #f9f9f9;
        }

        .admin-table tr:nth-child(even) td {
          background-color: #f1f1f1;
        }

        .admin-table tr:hover {
          background-color: #ddd;
        }

        .admin-table td,
        .admin-table th {
          text-align: center;
          font-size: 14px;
        }

        .admin-table td {
          font-weight: normal;
        }

        .admin-table th {
          font-weight: bold;
        }

        .admin-table td:last-child {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default GestionAdministration;
