import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate

const commercialisation = () => {
  const navigate = useNavigate(); // Créez une instance de navigate

  const handleButtonClick = () => {
    // Utilisez navigate pour rediriger
    navigate('/path-you-want-to-navigate'); // Remplacez par le chemin désiré
  };

  return (
    <div>
      <h1>Poste</h1>
      <button onClick={handleButtonClick}>Aller à une autre page</button>
    </div>
  );
};

export default commercialisation;
