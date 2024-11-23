import React, { useState } from 'react';
import './App.css';

function App() {
  const [employes, setEmployes] = useState([]);
  const [nomEmploye, setNomEmploye] = useState("");

  const ajouterEmploye = () => {
    if (nomEmploye) {
      setEmployes([...employes, { nom: nomEmploye, competences: {} }]);
      setNomEmploye(""); // Réinitialise le champ
    }
  };

  const ajouterCompetence = (index) => {
    const competence = prompt("Nom de la compétence :");
    const niveau = parseInt(prompt("Niveau de compétence (1 à 5) :"), 10);

    if (competence && niveau >= 1 && niveau <= 5) {
      const newEmployes = [...employes];
      newEmployes[index].competences[competence] = niveau;
      setEmployes(newEmployes);
    } else {
      alert("Veuillez entrer un niveau valide (1 à 5).");
    }
  };

  const criteresPerformance = {
    "Communication": 3,
    "Résolution de problèmes": 4,
    "Gestion du temps": 3,
    "Leadership": 2
  };

  const evaluerPerformance = () => {
    let resultats = employes.map((employe) => {
      let ecartTotal = 0;
      let evaluation = [];

      for (const [competence, niveauRequis] of Object.entries(criteresPerformance)) {
        const niveauActuel = employe.competences[competence] || 0;
        const ecart = Math.max(0, niveauRequis - niveauActuel);
        ecartTotal += ecart;
        evaluation.push(
          `Compétence ${competence} : Requis = ${niveauRequis}, Actuel = ${niveauActuel}, Écart = ${ecart}`
        );
      }

      return {
        nom: employe.nom,
        ecartTotal,
        details: evaluation.join("<br>")
      };
    });

    return resultats;
  };

  const handleEvaluation = () => {
    const resultats = evaluerPerformance();
    const resultatsDiv = document.getElementById("resultats-evaluation");
    resultatsDiv.innerHTML = "<h3>Résultats de l'Évaluation de Performance :</h3>";

    resultats.forEach(({ nom, ecartTotal, details }) => {
      resultatsDiv.innerHTML += `<p><strong>${nom}</strong> :<br>${details}<br>Écart total : ${ecartTotal}</p>`;
    });
  };

  return (
    <div className="app">
      <h1>Évaluation de Performance des Employés</h1>

      {/* Formulaire pour ajouter un employé */}
      <section id="ajouter-employe">
        <h2>Ajouter un Employé</h2>
        <input
          type="text"
          value={nomEmploye}
          onChange={(e) => setNomEmploye(e.target.value)}
          placeholder="Nom de l'employé"
          required
        />
        <button onClick={ajouterEmploye}>Ajouter Employé</button>
      </section>

      {/* Liste des employés et ajout de compétences */}
      <section id="liste-employes">
        <h2>Liste des Employés</h2>
        <div id="employes-container">
          {employes.map((employe, index) => (
            <div key={index} className="employe-card">
              <strong style={{ fontSize: "1.1em", color: "#007bff" }}>
                {employe.nom}
              </strong>
              <button onClick={() => ajouterCompetence(index)}>
                Ajouter Compétence
              </button>
              <ul>
                {Object.entries(employe.competences).map(([competence, niveau]) => (
                  <li key={competence}>
                    {competence} : Niveau {niveau}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Évaluation des compétences */}
      <section id="evaluation">
        <h2>Évaluation des Compétences</h2>
        <button onClick={handleEvaluation}>Évaluer la Performance</button>
        <div id="resultats-evaluation"></div>
      </section>
    </div>
  );
}

export default App;
