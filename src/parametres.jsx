import React, { useState } from 'react';

const Parametres = () => {
  const [notifications, setNotifications] = useState(true);
  const [role, setRole] = useState('Agent');
  const [theme, setTheme] = useState('Light');

  const handleNotificationChange = (event) => {
    setNotifications(event.target.checked);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleSaveSettings = () => {
    alert('Paramètres enregistrés');
    // Vous pouvez ici ajouter la logique pour sauvegarder ces paramètres dans la base de données ou un fichier de configuration.
  };

  return (
    <div className="parametres-container">
      <h1>Paramètres de l'application</h1>
      
      <div className="parametre-section">
        <h2>Notifications</h2>
        <label>
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={handleNotificationChange} 
          />
          Activer les notifications
        </label>
      </div>

      <div className="parametre-section">
        <h2>Rôle</h2>
        <select value={role} onChange={handleRoleChange}>
          <option value="Agent">Agent</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Administrateur</option>
        </select>
      </div>

      <div className="parametre-section">
        <h2>Thème</h2>
        <select value={theme} onChange={handleThemeChange}>
          <option value="Light">Clair</option>
          <option value="Dark">Sombre</option>
        </select>
      </div>

      <div className="parametre-actions">
        <button onClick={handleSaveSettings}>Sauvegarder</button>
      </div>
    </div>
  );
};

export default Parametres;
