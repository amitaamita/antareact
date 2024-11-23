import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importer Link pour la navigation
import logo from './assets/logo.png';
import { FaBars } from 'react-icons/fa';

import { FaHome, FaTasks, FaUser, FaChartLine, FaBell, FaEnvelope, FaCog } from 'react-icons/fa';

const FichePosteAgent = () => {
  const { agent } = useParams();
  const [sd, setSd] = useState("valeur initiale");

  const [photo, setPhoto] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [missions, setMissions] = useState([]);
  const [objectifs, setObjectifs] = useState([]);
  const [hierarchies, setHierarchies] = useState([]);
  const [indicateurs, setIndicateurs] = useState([]);
  const [tachesRealisees, setTachesRealisees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newMission, setNewMission] = useState('');
  const [newObjectif, setNewObjectif] = useState('');
  const [newHierarchie, setNewHierarchie] = useState('');
  const [newIndicateur, setNewIndicateur] = useState('');
  const [newTache, setNewTache] = useState('');

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const agentData = {
      photo,
      startDate,
      endDate,
      missions,
      objectifs,
      hierarchies,
      indicateurs,
      tachesRealisees
    };
    localStorage.setItem(agent, JSON.stringify(agentData));
  }, [photo, startDate, endDate, missions, objectifs, hierarchies, indicateurs, tachesRealisees, agent]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (setter, items, newItem, resetNewItem) => {
    if (newItem.trim()) {
      setter([...items, newItem]);
      resetNewItem('');  // Reset the input value after adding
    }
  };

  const handleDeleteItem = (setter, items, index) => {
    setter(items.filter((_, i) => i !== index));
  };

  const toggleAddForm = () => setShowAddForm(!showAddForm);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <div style={styles.container}>
      <div style={sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={{ width: '50%' }} />
        </div>
        
        <div style={styles.menu}>
          {['Tableau de bord', 'Evaluation', 'Utilisateur', 'Générer rapport', 'Compétence', 'Feedback', 'Pointage', 'Production', 'Paramètre'].map((item, index) => (
            <div
              key={index}
              style={activeMenuItem === item ? styles.activeMenuItem : styles.menuItem}
              onClick={() => handleMenuItemClick(item)}
            >
              {item === 'Tableau de bord' && <FaHome />}
              {item === 'Evaluation' && <FaTasks />}
              {item === 'Utilisateur' && <FaUser />}
              {item === 'Générer rapport' && <FaChartLine />}
              {item === 'Compétence' && <FaTasks />}
              {item === 'Feedback' && <FaBell />}
              {item === 'Pointage' && <FaEnvelope />}
              {item === 'Production' && <FaCog />}
              {item === 'Paramètre' && <FaCog />}
              <span style={styles.menuItemText}>{item}</span>
            </div>
          ))}
        </div>
//       </div>

      <FaBars onClick={toggleSidebar} style={styles.toggleIcon} />

      <div style={styles.mainContent}>
        <div style={styles.navbar}>
          <div style={styles.navbarItem}>
            <FaUser style={styles.navbarIcon} />
          </div>
          <div style={styles.navbarItem}>
            <FaBell style={styles.navbarIcon} />
          </div>
          <div style={styles.navbarItem}>
            <FaEnvelope style={styles.navbarIcon} />
          </div>
          <button
            onClick={() => alert('Déconnexion')}
            Style={{
              backgroundColor: '#e76f51',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            
          >
           
            
            Déconnexion
          </button>
        </div>
       
<div>
  
  
    <button>Ajouter des Objectifs Globaux</button>
    

  
</div>

    
<h1 style={styles.title}> {agent}</h1>

        <div style={styles.content}>
        <button onClick={() => setActiveSection('fichePoste')}>Afficher Fiche de Poste</button>
        
        
          <div style={styles.agentInfo}>
            <img
              src={photo || 'https://via.placeholder.com/150'}
              alt="Agent"
              style={styles.photo}
            />
            <div>
            <br />
              <label style={styles.label}>
                Date de début :
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={styles.dateInput}
                />
              </label>
              <br />
              <label style={styles.label}>
                Date de fin :
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={styles.dateInput}
                />
              </label>
            </div>
          </div>
          <div style={styles.addItemContainer}>
            <label htmlFor="photo">Changer la photo :</label>
            <input type="file" id="photo" onChange={handlePhotoChange} />
            
          </div>
          
          <button onClick={toggleAddForm} style={styles.toggleButton}>
            {showAddForm ? 'Masquer le formulaire' : 'Ajouter des détails'}
          </button>

          {showAddForm && (
            <div style={styles.addFormsContainer}>
              {[{ placeholder: 'Nouvelle mission', value: newMission, setter: setNewMission, listSetter: setMissions, list: missions },
                { placeholder: 'Nouvel objectif', value: newObjectif, setter: setNewObjectif, listSetter: setObjectifs, list: objectifs },
                { placeholder: 'Nouvelle hiérarchie', value: newHierarchie, setter: setNewHierarchie, listSetter: setHierarchies, list: hierarchies },
                { placeholder: 'Nouvel indicateur', value: newIndicateur, setter: setNewIndicateur, listSetter: setIndicateurs, list: indicateurs },
                { placeholder: 'Nouvelle tâche réalisée', value: newTache, setter: setNewTache, listSetter: setTachesRealisees, list: tachesRealisees },
          
              ].map((item, index) => (
                <div key={index} style={styles.addItemContainer}>
                  <input
                    type="text"
                    value={item.value}
                    placeholder={item.placeholder}
                    onChange={(e) => item.setter(e.target.value)}
                    style={styles.input}
                  />
                  <button onClick={() => handleAddItem(item.listSetter, item.list, item.value, item.setter)} style={styles.addButton}>
                    Ajouter
                  </button>
                </div>
              ))}
            </div>
          )}
           <h2 style={styles.subtitle}>Détails et Performances</h2>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.tableHeader}>Missions</th>
                <th style={styles.tableHeader}>Objectifs</th>
                <th style={styles.tableHeader}>Hiérarchie</th>
                <th style={styles.tableHeader}>Indicateurs</th>
                <th style={styles.tableHeader}>Tâches Réalisées</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(Math.max(missions.length, objectifs.length, hierarchies.length, indicateurs.length, tachesRealisees.length))].map((_, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <td style={styles.tableCell}>{missions[index] || <span style={styles.placeholder}>Aucune mission ajoutée</span>}</td>
                  <td style={styles.tableCell}>{objectifs[index] || <span style={styles.placeholder}>Aucun objectif ajouté</span>}</td>
                  <td style={styles.tableCell}>{hierarchies[index] || <span style={styles.placeholder}>Aucune hiérarchie ajoutée</span>}</td>
                  <td style={styles.tableCell}>{indicateurs[index] || <span style={styles.placeholder}>Aucun indicateur ajouté</span>}</td>
                  <td style={styles.tableCell}>{tachesRealisees[index] || <span style={styles.placeholder}>Aucune tâche ajoutée</span>}</td>
                  <td style={styles.tableCell}>
                    <button style={styles.deleteButton}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          

          
         
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    padding:'0',
    margin:'0',
    display: 'flex',
    flexDirection: 'column', // Changer la disposition du container pour que le navbar occupe le haut
  },
  sidebarOpen: {
    width: '250px',
    backgroundColor: '#264653',
    transition: 'width 0.3s ease-in-out',
    height: '100vh',
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    
    
  },
  sidebarClosed: {
    width: '50px',
    backgroundColor: '#2f3640',
    transition: 'width 0.3s ease-in-out',
    height: '100vh',
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    
    
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    color: '#fff',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  activeMenuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    color: '#fff',
    
   
    backgroundColor: '#264653',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  menuItemText: {
    marginLeft: '10px',
  },
  mainContent: {
    display:'flex',
    marginLeft: '250px', // Pour laisser de la place pour la sidebar
    flex: 1,
    padding: '20px',
    marginTop: '60px', // Laisser de l'espace sous la navbar
    transition: 'margin-left 0.3s ease-in-out',
    
    // transform: 'translatey(100px)',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft:'30px',
    marginBottom: '20px',
    marginLeft:'290px',
   
    borderBottom: '1px solid #ddd',
    padding: '30px 20px',
    position: 'fixed',  // Fixer la navbar en haut
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#264653',
    
    position: 'fixed',
  },
  navbarItem: {
    marginLeft: '30px',
    color: '#333',
    cursor: 'pointer',
  },
  navbarIcon: {
    fontSize: '20px',
    color:'#fff',
  },
  content: {
    paddind:'0',
   
    padding: '20px 20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color:'#000',
    transform: 'translatey(-120px)',
    
  },
  agentInfo: {
    display: 'flex',
    marginBottom: '20px',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  dateInfo: {
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  dateInput: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  toggleButton: {
    padding: '10px',
    backgroundColor: '#2a9d8f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addFormsContainer: {
    marginTop: '20px',
  },
  addItemContainer: {
    display: 'flex',
    marginBottom: '10px',
  },
  addButton: {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeaderRow: {
    backgroundColor: '#264653',
  },
  tableHeader: {
    padding: '10px',
    color: '#fff',
    textAlign: 'center',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
  placeholder: {
    color: '#aaa',
  },
  deleteButton: {
    padding: '6px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};


export default FichePosteAgent;

 