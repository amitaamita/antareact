import React, { useState } from 'react';
import { FaTachometerAlt, FaClipboardList, FaUser, FaChartBar, FaCheckCircle, FaClock, FaCog, FaSignOutAlt, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
// import { EvaluationContext } from './evaluationcontext';


// import './evaluation.css';


function Evaluation() {
    // const { addEvaluation } = useContext(EvaluationContext);
    const [formData, setFormData] = useState({
    nomEmploye: '',
    titrePoste: '',
    dateEvaluation: '',
    typeEvaluation: '',
    chiffreAffaire: '',
    nbClients: '',
    tauxConversion: '',
    realisation: '',
    objectifMensuel: '',
    tauxCouverture: '',
    echelle: 1, // Valeur de l'échelle entre 1 et 5
    qualificateur: '',
  });
  const [evaluationResults, setEvaluationResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const active = true; // ou false, selon le cas


  const handleSubmit = (e) => {
    e.preventDefault();
    let qualificateur = '';
    if (formData.echelle === '5') {
      qualificateur = 'Excellent';
    } else if (formData.echelle === '4') {
      qualificateur = 'Bon';
    } else {
      qualificateur = 'Insuffisant';
    }
    const newEvaluation = { ...formData, qualificateur };
    setEvaluationResults([...evaluationResults, newEvaluation]);

    // Réinitialiser le formulaire
    setFormData({
      nomEmploye: '',
      titrePoste: '',
      dateEvaluation: '',
      typeEvaluation: '',
      chiffreAffaire: '',
      nbClients: '',
      tauxConversion: '',
      realisation: '',
      objectifMensuel: '',
      tauxCouverture: '',
      echelle: 1,
      qualificateur: '',
    });
  };

  const handleEdit = (index) => {
    const selectedEvaluation = evaluationResults[index];
    setFormData(selectedEvaluation);
    setEvaluationResults(evaluationResults.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    const updatedResults = evaluationResults.filter((_, i) => i !== index);
    setEvaluationResults(updatedResults);
  };

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#264653',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        paddingTop: '20px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={logo} alt="Logo" style={{ width: '50%' }} />
        </div>
        <nav style={{ marginTop: '20px' }}>
          <ul style={{ gap: '0px ', listStyle: 'none' }}>
            {/* Sidebar Links */}
            <li>
              <Link to="/tableaudebord"
                onClick={() => handleClick('Tableau de bord')}
                style={{
                  display: 'flex', alignItems: 'center', padding: '10px 15px', color: 'white', textDecoration: 'none', backgroundColor: active === 'Tableau de bord' ? '#4e4e4e' : 'transparent'
                }}>
                <FaTachometerAlt style={{ marginRight: '10px' }} /> Tableau de bord
              </Link>
            </li>
            {/* Other Sidebar Links */}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '250px',
        width: 'calc(100% - 250px)',
        padding: '20px'
      }}>
        {/* Navbar */}
        <div style={{
          display: 'flex',
          marginLeft: '250px',
          justifyContent: 'space-between',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '70%',
          zIndex: 10,
          alignItems: 'center',
          backgroundColor: '#264653',
          padding: '50px 110px'
        }}>
          <div style={{ fontSize: '24px', color: '#fff' }}>Évaluation de Performance</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaUserCircle style={{ marginRight: '15px', cursor: 'pointer', color: '#fff' }} title="Profil" />
            <FaBell style={{ marginRight: '15px', cursor: 'pointer', color: '#fff' }} title="Notifications" />
            <FaEnvelope style={{ marginRight: '15px', cursor: 'pointer', color: '#fff' }} title="Messages" />
            <button style={{
              backgroundColor: '#ff4f4f', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer'
            }}>
              Déconnexion
            </button>
          </div>
        </div>

        {/* Form for Evaluation */}
        <div style={{ marginTop: '100px' }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nom de l'employé:</label>
              <input type="text" name="nomEmploye" value={formData.nomEmploye} onChange={handleChange} required />
            </div>
            <div>
              <label>Titre du poste:</label>
              <input type="text" name="titrePoste" value={formData.titrePoste} onChange={handleChange} required />
            </div>
            <div>
              <label>Date d'évaluation:</label>
              <input type="date" name="dateEvaluation" value={formData.dateEvaluation} onChange={handleChange} required />
            </div>
            <div>
              <label>Type d'évaluation:</label>
              <input type="text" name="typeEvaluation" value={formData.typeEvaluation} onChange={handleChange} required />
            </div>
            <div>
              <label>Chiffre d'affaire généré:</label>
              <input type="number" name="chiffreAffaire" value={formData.chiffreAffaire} onChange={handleChange} required />
            </div>
            <div>
              <label>Nombre de nouveaux clients:</label>
              <input type="number" name="nbClients" value={formData.nbClients} onChange={handleChange} required />
            </div>
            <div>
              <label>Taux de conversion des prospects:</label>
              <input type="number" name="tauxConversion" value={formData.tauxConversion} onChange={handleChange} required />
            </div>
            <div>
              <label>Réalisation:</label>
              <input type="text" name="realisation" value={formData.realisation} onChange={handleChange} required />
            </div>
            <div>
              <label>Objectif mensuel:</label>
              <input type="text" name="objectifMensuel" value={formData.objectifMensuel} onChange={handleChange} required />
            </div>
            <div>
              <label>Taux de couverture des objectifs:</label>
              <input type="number" name="tauxCouverture" value={formData.tauxCouverture} onChange={handleChange} required />
            </div>
            <div>
              <label>Échelle d'évaluation (1-5):</label>
              <input type="number" name="echelle" value={formData.echelle} onChange={handleChange} min="1" max="5" required />
            </div>
            <button type="submit">Soumettre</button>
          </form>

          {/* Evaluation Results Table */}
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
}

export default Evaluation;
