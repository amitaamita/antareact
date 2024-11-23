import React, { useState } from "react";
import './loginpage.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    setError("");

    if (email !== "diop49@gmail.com" || password !== "1234") {
      setError("Votre email ou mot de passe est incorrect.");
      return;
    }

    navigate('/division');
  };

  return (
    <div>
      {/* Logo en haut de la page, fixé au-dessus de la page de connexion */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={{ color: "#000" }}>Bienvenue sur la plateforme d'évaluation</h2>

      </div>

      <div className="main-container">
        {/* Section de l'image */}
        <div className="image-section">
          <h4>Suivez votre progression et atteignez vos <br />
          objectifs avec des évaluations régulières.</h4>
        </div>

        {/* Section du formulaire de connexion */}
        <div className="login-container">
          <h2>Connexion</h2>
          {error && <p style={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label>Email :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="Entrez votre email"
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Mot de passe :</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="Entrez votre mot de passe"
              />
            </div>
            <button type="submit" style={styles.button}>Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "70px",
   marginLeft:'-65px',
    position: "fixed", // Position fixe pour qu’il reste en haut
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000, // Pour s'assurer qu'il est au-dessus de tout autre contenu
    // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  
  logo: {
    width: "100px",
    height: "auto",
   
    marginBottom: "2px",  // Réduit la marge inférieure pour rapprocher le texte
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
    color: '#000',
  },
  input: {
    width: "90%",
    padding: "10px",
    border: "1px solid #000",
    backgroundColor: "#fff",
    color: "#000",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1877F2",
    border: "none",
    cursor: "pointer",
    color: "#fff",
  },
  error: {
    color: "red",
    marginBottom: "15px",
  },
};

export default LoginPage;
