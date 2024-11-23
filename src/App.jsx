
import { useState } from 'react'  
import './App.css'
import Ficheposteagent from './ficheposteagent';
import Gestion from './GestionRessourcesHumaines';
import Tableaudebord from './tableaudebord';

// import ObjectifsGlobaux from './objectifsglobeaux.jsx';

// import sidebar from "./sidebar.jsx"


import React from "react";
import Login_Page from "./Login_page.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Commercialisation from './commercialisation'; // Exemple de composant pour la page commercialisation
import Production from './Productions.jsx';
import DomainButtons from './DomainButtons';
import Commercialisations from './Commercialisations'; // Importez vos composants de page
import Productions from './Productions.jsx';
import gestionadministration from './gestionadministration';
import GestionRessourcesHumaines from './GestionRessourcesHumaines.jsx';
import Administration from './administration';
// import Agent from './agents.jsx'; // La page où tu gères les agents

import AjouterPoste from './ajouterposte';
import Evaluation from './Evaluation';
import Agents from './agents';
import Poste from './poste'; // Assurez-vous d'avoir ce composant pour la page Poste


import FicheDePoste from './fichedeposte';  // Exemple d'une autre page


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login_Page />} />
        <Route path="/division" element={<FicheDePoste />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/tableaudebord" element={<Tableaudebord />} />

        {/* <Route path="/poste" element={<Poste />}/> */}
        {/* <Route path="/poste/:posteName" element={<PosteDetails />} /> */}
        <Route path="/agents/:poste" element={<Agents />} />
        <Route path="/fiche-poste/:agent" element={<Ficheposteagent />} />
        <Route path="/" element={<DomainButtons />} />
        <Route path="/commercialisations" element={<Commercialisations />} />
        <Route path="/productions" element={<Productions />} />
        <Route path="/gestion-administration" element={<Gestion />} />
        <Route path="/gestion-ressources-humaines" element={<gestionRessourcesHumaines />} />
         {/* <Route path="/objectifs-globaux" element={<ObjectifsGlobaux />} /> */}
        <Route path="/commercialisation" element={<Commercialisation />} />
        {/* <Route path="/poste/:posteName/agents" element={<Agent />} /> Route pour les agents */}
        <Route path="/production" element={<Production />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/ajouterposte" element={<AjouterPoste />} />
      </Routes>
    </Router>
  );
};


// function App() {
//   return (
//     <div className="App">
//       <Login_Page />
//     </div>
//   );
// }
<Route path="/division" element={<FicheDePoste />} />

export default App;


