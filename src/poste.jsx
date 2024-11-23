import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Poste = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#264653',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const [showPostForm, setShowPostForm] = useState(false);
  const [poste, setPoste] = useState('');
  const [description, setDescription] = useState('');
  const [postes, setPostes] = useState([]);

  useEffect(() => {
    const storedPostes = localStorage.getItem('postes');
    if (storedPostes) {
      setPostes(JSON.parse(storedPostes));
    }
  }, []);

  const handleAddPostClick = () => {
    setShowPostForm(!showPostForm);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPostes = [...postes, { poste, description }];
    setPostes(newPostes);
    localStorage.setItem('postes', JSON.stringify(newPostes));
    setPoste('');
    setDescription('');
    setShowPostForm(false);
  };

  const handleDeletePost = (index) => {
    const updatedPostes = postes.filter((_, i) => i !== index);
    setPostes(updatedPostes);
    localStorage.setItem('postes', JSON.stringify(updatedPostes));
  };

  // Gérer la navigation vers la page d'agents avec le poste sélectionné
  const handleNavigateToPost = (posteName) => {
    navigate(`/agents/${posteName}`); // Redirige vers la page des agents avec le poste sélectionné
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#2a9d8f' }}>Différents types de divisions</h1>
      <div>
        <button style={buttonStyle} onClick={handleAddPostClick}>Ajouter un poste</button>
      </div>

      {showPostForm && (
        <div style={{ marginTop: '20px' }}>
          <h3>Formulaire d'ajout de poste</h3>
          <form onSubmit={handlePostSubmit}>
            <label>
              Intitulé du poste:
              <input type="text" value={poste} onChange={(e) => setPoste(e.target.value)} />
            </label>
            <br /><br />
            <label>
              Description du poste:
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br /><br />
            <button type="submit" style={buttonStyle}>Enregistrer le poste</button>
          </form>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h2>Liste des postes enregistrés</h2>
        <ul>
          {postes.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <button
                style={buttonStyle}
                onClick={() => handleNavigateToPost(item.poste)}
              >
                {item.poste}
              </button>
              <button
                onClick={() => handleDeletePost(index)}
                style={{ marginLeft: '10px', backgroundColor: '#e76f51', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Poste;
