
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Division() {
  

  return (
    <div>
      <h1>Page d'accueil</h1>
      <button onClick={() => handleButtonClick('grilledevaluation')}>Commercialisation</button>
      <button onClick={() => handleButtonClick('production')}>Production</button>
    </div>
  );
}

export default Division;


