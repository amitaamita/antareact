import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import {
  FaChartLine, FaTasks, FaUser, FaFileAlt, FaAward, FaComments, FaClock,
  FaIndustry, FaCog, FaBars, FaBell, FaEnvelope, FaUserCircle
} from 'react-icons/fa';

const Agents = () => {
  const { poste } = useParams();
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newAgentName, setNewAgentName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSidebar, setShowSidebar] = useState(true); // Sidebar affiché par défaut
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editAgentName, setEditAgentName] = useState('');

  useEffect(() => {
    const storedAgents = localStorage.getItem(`agents_${poste}`);
    if (storedAgents) {
      setAgents(JSON.parse(storedAgents));
    }
  }, [poste]);

  const handleAddAgent = () => {
    if (newAgentName) {
      const updatedAgents = [...agents, newAgentName];
      setAgents(updatedAgents);
      localStorage.setItem(`agents_${poste}`, JSON.stringify(updatedAgents));
      setNewAgentName('');
      setIsFormVisible(false);
    }
  }
  const handleDeleteAgent = (index) => {
    const updatedAgents = agents.filter((_, i) => i !== index);
    setAgents(updatedAgents);
    localStorage.setItem(`agents_${poste}`, JSON.stringify(updatedAgents));
  };

  const handleViewFichePoste = (agent) => {
    navigate(`/fiche-poste/${encodeURIComponent(agent)}`);
  };

  const handleEditAgent = (index) => {
    setEditingIndex(index);
    setEditAgentName(agents[index]);
  };

  const handleSaveEdit = () => {
    const updatedAgents = agents.map((agent, index) =>
      index === editingIndex ? editAgentName : agent
    );
    setAgents(updatedAgents);
    localStorage.setItem(`agents_${poste}`, JSON.stringify(updatedAgents));
    setEditingIndex(null);
    setEditAgentName('');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const sidebarItems = [
    { icon: <FaChartLine />, label: 'Tableau de bord' },
    { icon: <FaTasks />, label: 'Évaluation' },
    { icon: <FaUser />, label: 'Utilisateur' },
    { icon: <FaFileAlt />, label: 'Générer Rapport' },
    { icon: <FaAward />, label: 'Compétence' },
    { icon: <FaComments />, label: 'Feedback' },
    { icon: <FaClock />, label: 'Pointage' },
    { icon: <FaIndustry />, label: 'Production' },
    { icon: <FaCog />, label: 'Paramètre' },
  ];

  const filteredAgents = agents.filter(agent =>
    agent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    container: { display: 'flex' },
    sidebar: {
      width: showSidebar ? '200px' : '50px', // Diminue la largeur lors du décalage
      height: '100vh',
      backgroundColor: '#264653',
      color: '#fff',
      padding: '20px 10px',
      position: 'fixed',
      top: '0',
      left: '0',
      transition: 'width 0.3s ease',
    },
    sidebarItem: isActive => ({
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      cursor: 'pointer',
      backgroundColor: isActive ? '#2a9d8f' : 'transparent',
      color: '#fff',
      borderRadius: '5px',
      marginBottom: '10px',
      transition: 'background-color 0.3s ease',
    }),
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 60px',
      backgroundColor: '#264653',
      color: '#fff',
      transition: 'margin-left 0.3s ease',
    },
    input: {
      padding: '8px',
      width: '100%',
      borderRadius: '5px',
      marginBottom: '20px',
      border: '1px solid #ddd',
    },
    button: {
      backgroundColor: '#2a9d8f',
      color: '#fff',
      padding: '8px 15px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '15px',
    },
    agentCard: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px',
      fontSize: '14px', // Diminue la taille du texte pour une carte plus petite
      color: '#2a9d8f',
      backgroundColor: '#f4f4f4',
      borderRadius: '6px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '8px',
    },
    editInput: {
      width: '60%',
      padding: '5px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src={logo} alt="Logo" style={{ width: '50%' }} /> 
        </div>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            style={styles.sidebarItem(activeSidebarItem === index)}
            onClick={() => setActiveSidebarItem(index)}
          >
            {item.icon}
            {showSidebar && <span style={{ marginLeft: '10px' }}>{item.label}</span>}
          </div>
        ))}
      </div>

      <div style={{ padding: '20px', marginLeft: showSidebar ? '200px' : '50px', width: '100%', }}>
        <header style={{ ...styles.header, marginLeft: showSidebar ? '200px' : '50px'  , position: 'fixed', top: 0,
    left: 0,
    right: 0,
    zIndex: 1,}}>
          <FaBars style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
          <h2 style={{ color: '#fff' }}>Gestion des Agents pour {poste}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <FaBell style={{ cursor: 'pointer', fontSize: '20px', color: 'white' }} />
            <FaEnvelope style={{ cursor: 'pointer', fontSize: '20px', color: 'white' }} />
            <FaUserCircle style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }} />
            
          </div>
        </header>

        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Rechercher un agent..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
          />
          <button onClick={() => setIsFormVisible(true)} style={styles.button}>
            Ajouter Agent
          </button>

          {isFormVisible && (
            <div style={{ ...styles.agentCard, padding: '10px', backgroundColor: '#ffffff' }}>
              <input
                type="text"
                placeholder="Nom de l'agent"
                value={newAgentName}
                onChange={(e) => setNewAgentName(e.target.value)}
                style={styles.editInput}
              />
              <button onClick={handleAddAgent} style={styles.button}>
                Enregistrer l'Agent
              </button>
            </div>
          )}

          <div>
            {filteredAgents.map((agent, index) => (
              <div key={index} style={styles.agentCard}>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editAgentName}
                    onChange={(e) => setEditAgentName(e.target.value)}
                    style={styles.editInput}
                  />
                ) : (
                  <span>{agent}</span>
                )}
                <div>
                  {editingIndex === index ? (
                    <button onClick={handleSaveEdit} style={styles.button}>
                      Enregistrer
                    </button>
                  ) : (
                    <button onClick={() => handleEditAgent(index)} style={styles.button}>
                      Modifier
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteAgent(index)}
                    style={{ ...styles.button, backgroundColor: '#e76f51' }}
                  >
                    Supprimer
                  </button>
                  <button
                    onClick={() => handleViewFichePoste(agent)}
                    style={{ ...styles.button, backgroundColor: '#457b9d' }}
                  >
                    Fiche de poste
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
