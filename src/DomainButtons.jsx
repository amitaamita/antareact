import React from 'react';
import { Link } from 'react-router-dom';
import './DomainButtons.css';

function DomainButtons() {
  return (
    <div>
      <header className="header">
        <h1>Évaluation des Performances des Employés pour Chaque Division</h1>
      </header>

      <div className="domain-buttons-container">
        <div className="domain-card">
          <Link to="/commercialisation" className="domain-button">Commercialisation</Link>
        </div>
        <div className="domain-card">
          <Link to="/production" className="domain-button">Production</Link>
        </div>
        <div className="domain-card">
          <Link to="/gestion-administration" className="domain-button">Gestion de l'Administration</Link>
        </div>
        <div className="domain-card">
          <Link to="/gestion-ressources-humaines" className="domain-button">Gestion des Ressources Humaines</Link>
        </div>
      </div>
    </div>
  );
}

export default DomainButtons;
