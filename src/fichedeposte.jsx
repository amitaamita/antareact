import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FaChartLine,
  FaTasks,
  FaUser,
  FaFileAlt,
  FaAward,
  FaComments,
  FaClock,
  FaIndustry,
  FaCog,
  FaBars,
  FaBell,
  FaEnvelope,
  FaUserCircle
} from 'react-icons/fa';

const Poste = () => {
  const navigate = useNavigate();
  navigate("/evaluation");

  const [showSidebar, setShowSidebar] = useState(true);
  
  const [showPostForm, setShowPostForm] = useState(false);
  const [poste, setPoste] = useState('');
  const [description, setDescription] = useState('');
  const [postes, setPostes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);

  useEffect(() => {
    const storedPostes = localStorage.getItem('postes');
    if (storedPostes) {
      setPostes(JSON.parse(storedPostes));
    }
  }, []);

  const handleAddPostClick = () => {
    setShowPostForm(true);
    setPoste('');
    setDescription('');
    setEditIndex(null);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedPostes = postes.map((item, index) =>
        index === editIndex ? { poste, description } : item
      );
      setPostes(updatedPostes);
      localStorage.setItem('postes', JSON.stringify(updatedPostes));
    } else {
      const newPostes = [...postes, { poste, description }];
      setPostes(newPostes);
      localStorage.setItem('postes', JSON.stringify(newPostes));
    }
    setPoste('');
    setDescription('');
    setShowPostForm(false);
  };

  const handleEditPost = (index) => {
    setEditIndex(index);
    setPoste(postes[index].poste);
    setDescription(postes[index].description);
    setShowPostForm(true);
  };

  const handleDeletePost = (index) => {
    const updatedPostes = postes.filter((_, i) => i !== index);
    setPostes(updatedPostes);
    localStorage.setItem('postes', JSON.stringify(updatedPostes));
  };

  const handleNavigateToPost = (posteName) => {
    navigate(`/agents/${posteName}`);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleSidebarNavigation = (page) => {
    setActiveSidebarItem(page);
    // navigate(`/${page.toLowerCase().replace(" ", "")}`);
    navigate(`/${page}`);

  };
 

  const sidebarItems = [



    { icon: <FaChartLine />, label: 'Tableau de bord', page: 'tableaudebord' },
    { icon: <FaTasks />, label: 'Évaluation', page: 'evaluation' },
    { icon: <FaFileAlt />, label: 'Générer Rapport', page: 'genererrapport' },
    { icon: <FaUser />, label: 'Utilisateur' ,page:'fiche-poste'},
   
    { icon: <FaCog />, label: 'Paramètres', page: 'parametres' },

   
  ];
  return (
    
    
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      {showSidebar && (
        <div style={{
          width: '200px',
          height: '100vh',
          backgroundColor: '#264653',
          color: '#fff',
          padding: '20px',
          position: 'fixed',
          top: '0',
          left: '0',
          transition: 'all 0.3s ease',
          zIndex: 10, // Ajou
          // width: '200px',
          // height: '100vh',
          // backgroundColor: '#264653',
          // color: '#fff',
          // padding: '20px',
          // position: 'fixed',
          // top: '0',
          // left: '0',
          // transition: 'all 0.3s ease',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src="src/assets/logo.png" alt="Logo" style={{ width: '50%' }} />
          </div>
          {sidebarItems.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
             
              padding: '15px 0',
              cursor: 'pointer',
              backgroundColor: activeSidebarItem === index ? '#2a9d8f' : 'transparent',
              color: '#fff',
              borderRadius: '5px',
              marginBottom: '15px',
              transition: 'background-color 0.3s ease',
            }}
              onClick={() => setActiveSidebarItem(index)}>
              {item.icon}
              <span style={{ marginLeft: '10px' }}>{item.label}</span>
            </div>
          ))}
          
        </div>
      )}

      {/* Main Content */}
      <div style={{ padding: '20px', marginLeft: showSidebar ? '200px' : '0', width: '100%' }}>

      {/* <div style={{ padding: '20px', marginLeft: showSidebar ? '200px' : '0', width: '100%' }}> */}
      <header style={{
        position: 'fixed', top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#264653',
        color: '#fff',
        padding: '10px 20px',
        
//  display: 'flex',
//  justifyContent: 'space-between',
//  alignItems: 'center', // Centre le contenu verticalement

//  height: 'vh', // Hauteur de la barre à 100% de la fenêtre
//  width: '100%', // Largeur à 100%
//  padding: '0 60px', // Padding horizontal seulement
//  backgroundColor: '#264653',
//  color: '#fff',
// //  transform: 'translatex(-100px)',
//    transform: 'translatey(-135px)',
//    marginLeft:'-280px',
            
 
//  padding: '0 257px',
  }}>
  {/* Icone Hamburger pour Sidebar */}
  <FaBars style={{ cursor: 'pointer' }} onClick={toggleSidebar} />
  <h2 style={{ color: '#fff' ,gap:'30px'}}>Différents types de divisions</h2>

  {/* Barre de navigation avec icônes de notification, message, profil, et déconnexion */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    <FaBell
      style={{ cursor: 'pointer', fontSize: '20px', color: 'white' }}
      onClick={() => alert('Notifications')}
    />
    <FaEnvelope
      style={{ cursor: 'pointer', fontSize: '20px', color: 'white' }}
      onClick={() => alert('Messages')}
    />
    <FaUserCircle
      style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }}
      onClick={() => alert('Profil')}
    />
    <button
      onClick={() => alert('Déconnexion')}
      style={{
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
  
</header>


        {showPostForm && (
            <div style={{
              marginTop: '20px',
              backgroundColor: '#ffffff',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '400px',
              margin: 'auto',
              textAlign: 'left',
            }}>


              
              <h3 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                {editIndex !== null ? 'Modifier le poste' : 'Formulaire d\'ajout de poste'}
              </h3>
              <form onSubmit={handlePostSubmit}>
                <label style={{
                  fontSize: '16px',
                  color: '#333',
                  marginBottom: '10px',
                  marginLeft: '100px',
                  marginTop: '50px',
                }}>
                  Nom du poste
                  <input
                    type="text"
                    value={poste}
                    onChange={(e) => setPoste(e.target.value)}
                    style={{
                      width: '50%',
                      padding: '10px',
                      marginTop: '5px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontSize: '14px',
                    }}
                  />
                   </label>
                <br />
                <button type="submit" style={{
                  backgroundColor: '#2a9d8f',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'background-color 0.3s ease',
                }}>
                  {editIndex !== null ? 'Modifier' : 'Enregistrer le poste'}
                </button>
              </form>
            </div>
          )}



                 {/* Ajouter Poste Button */}
          <button onClick={handleAddPostClick} style={{
            backgroundColor: '#2a9d8f',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '20px',
          }}>
            Ajouter Poste
          </button>
          {showPostForm && (
            <div style={{
             
            }}>
              {/* <h3 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                {editIndex !== null ? 'Modifier le poste' : 'Formulaire d\'ajout de poste'}
              </h3> */}
              {/* <form onSubmit={handlePostSubmit}> */}
                {/* <label style={{
                 
                  />
                </label> */}
                <br />
                {/* <button type="submit" style={{
                  ba
                </button> */}
              {/* </form> */}
            </div>
          )}
          
        <div style={{ marginTop: '30px' }}>
        <h2>Liste des postes</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>

              {postes.map((poste, index) => (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                  backgroundColor: '#f4f4f4',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  marginBottom: '15px',
                }}>
                  <h3 style={{ color: '#2a9d8f' }}>{poste.poste}</h3>
                  <p>{poste.description}</p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                  }}>
                    <button onClick={() => handleNavigateToPost(poste.poste)} style={{
                      backgroundColor: '#264653',
                      color: '#fff',
                      padding: '10px 15px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}>
                    Voir les Agents
                  </button>
                  <div>
                    <button onClick={() => handleEditPost(index)} style={{
                      backgroundColor: '#e9c46a',
                      color: '#fff',
                      padding: '10px 15px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginRight: '10px',
                    }}>
                      Modifier
                    </button>
                    <button onClick={() => handleDeletePost(index)} style={{
                      backgroundColor: '#e76f51',
                      color: '#fff',
                      padding: '10px 15px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}>
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


          
        </div>
      
  );
};

export default Poste;
