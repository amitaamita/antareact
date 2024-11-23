import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Vous pouvez commenter ça si ce n'est pas nécessaire
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
