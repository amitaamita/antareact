import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
    const [submitted, setSubmitted] = useState(false);
    const [feedbackData, setFeedbackData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const name = event.target.name.value || 'Anonyme';
        const role = event.target.role.value;
        const rating = event.target.rating.value || 'Non noté';
        const comments = event.target.comments.value || 'Aucun commentaire';

        setFeedbackData({ name, role, rating, comments });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="feedback-success">
                <FeedbackSuccess feedbackData={feedbackData} />
            </div>
        );
    }

    return (
        <div className="feedback-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom (facultatif) :</label>
                    <input type="text" id="name" name="name" placeholder="Entrez votre nom" />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Votre rôle :</label>
                    <select id="role" name="role">
                        <option value="employe">Employé</option>
                        <option value="manager">Manager</option>
                        <option value="dirigeant">Dirigeant</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Note de la performance globale :</label>
                    <div className="rating-group">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <React.Fragment key={star}>
                                <input type="radio" id={`star${star}`} name="rating" value={star} />
                                <label htmlFor={`star${star}`}>&#9733;</label>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Commentaires (facultatif) :</label>
                    <textarea id="comments" name="comments" placeholder="Ajoutez des détails sur votre expérience..."></textarea>
                </div>

                <input type="submit" value="Envoyer le Feedback" />
            </form>
        </div>
    );
};

const FeedbackSuccess = ({ feedbackData }) => {
    return (
        <div>
            <div className="feedback-success">
                Merci pour votre feedback. Nous apprécions votre contribution et nous traiterons vos informations avec soin.
            </div>
            <div className="feedback-details">
                <strong>Récapitulatif de votre feedback :</strong><br /><br />
                <strong>Nom :</strong> {feedbackData.name}<br />
                <strong>Rôle :</strong> {feedbackData.role.charAt(0).toUpperCase() + feedbackData.role.slice(1)}<br />
                <strong>Note de la performance globale :</strong> {feedbackData.rating} étoiles<br />
                <strong>Commentaires :</strong> {feedbackData.comments}
            </div>
        </div>
    );
};

export default Feedback;
