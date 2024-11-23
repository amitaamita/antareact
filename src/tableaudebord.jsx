import logo from './assets/logo.png';

// import { EvaluationContext } from './evaluationcontext';
import './tableaudebord.css';
import React, { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom'; // Assurez-vous d'utiliser React Router

import { FaUser, FaBell, FaEnvelope, FaSignOutAlt, FaTasks, FaUserFriends, FaChartLine, FaCogs, FaClock, FaFileAlt } from 'react-icons/fa';  



function tableaudebord() {
//   const { evaluationResults } = useContext(EvaluationContext);
    const [activeMenu, setActiveMenu] = useState('Tableau de bord');
    const navigate = useNavigate();

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        navigate(`/${menu.toLowerCase().replace(' ', '-')}`); // Redirige vers la page correspondante
    };
    
    return (
        <div className="app-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <img src={logo} alt="Logo" style={{ width: '50%' }} /> 
                </div>
                <ul className="menu">
                <li className={activeMenu === 'poste' ? 'active' : ''} onClick={() => handleMenuClick('poste')}>
                        <FaTasks /> Differents poste
                    </li>

                    <li className={activeMenu === 'evaluation' ? 'active' : ''} onClick={() => handleMenuClick('evaluation')}>
                        <FaChartLine /> Évaluation
                    </li>
                    <li className={activeMenu === 'UserAgentPage' ? 'active' : ''} onClick={() => handleMenuClick('UserAgentPage')}>
                        <FaUserFriends /> Utilisateur
                    </li>
                    <li className={activeMenu === 'Genererrapport' ? 'active' : ''} onClick={() => handleMenuClick('Genererrapport')}>
                        <FaFileAlt /> Générer rapport
                    </li>
                    <li className={activeMenu === 'Compétence' ? 'active' : ''} onClick={() => handleMenuClick('Compétence')}>
                        <FaCogs /> Compétence
                    </li>
                    <li className={activeMenu === 'Pointage' ? 'active' : ''} onClick={() => handleMenuClick('Pointage')}>
                        <FaClock /> Pointage
                    </li>
                    <li className={activeMenu === 'Paramètre' ? 'active' : ''} onClick={() => handleMenuClick('Paramètre')}>
                        <FaCogs /> Paramètre
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="main-content">
                {/* Navbar */}
                <div className="navbar">
                    <div className="navbar-title">
                        <h1>Bienvenue dans {activeMenu}</h1>
                    </div>
                    <div className="navbar-icons">
                        <FaUser className="icon" title="Profil" />
                        <FaBell className="icon" title="Notifications" />
                        <FaEnvelope className="icon" title="Messages" />
                        <button
                            onClick={() => alert('Déconnexion')}
                            style={{
                                backgroundColor: '#e76f51',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transform: 'translatey(-10px)',
                            }}
                        >
                            Déconnexion
                        </button>
                  
                    </div>
                </div>
                <div className="content">
                    {/* Le contenu principal sera affiché ici */}
                          <div style={{ marginTop: '20px' }}>
            <table>
              <thead>
                <tr>
                  <th>Nom de l'employé</th>
                  <th>Titre du poste</th>
                  <th>Date d'évaluation</th>
                  <th>Type d'évaluation</th>
                  <th>Chiffre d'affaire</th>
                  <th>Clients nouveaux</th>
                  <th>Taux de conversion</th>
                  <th>Réalisation</th>
                  <th>Objectif mensuel</th>
                  <th>Taux de couverture</th>
                  <th>Échelle</th>
                  <th>Qualificatif</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
                {evaluationResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.nomEmploye}</td>
                    <td>{result.titrePoste}</td>
                    <td>{result.dateEvaluation}</td>
                    <td>{result.typeEvaluation}</td>
                    <td>{result.chiffreAffaire}</td>
                    <td>{result.nbClients}</td>
                    <td>{result.tauxConversion}</td>
                    <td>{result.realisation}</td>
                    <td>{result.objectifMensuel}</td>
                    <td>{result.tauxCouverture}</td>
                    <td>{result.echelle}</td>
                    <td>{result.qualificateur}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Modifier</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(index)}>Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
                </div>
            </div>
        </div>
    );
};

export default tableaudebord;


