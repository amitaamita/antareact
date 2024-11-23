import React from 'react';
import './TopPerformers.css'; // Fichier CSS pour le tableau des meilleurs commerciaux

function TopPerformers() {
    return (
        <section className="top-performers">
            <h2>Meilleurs Commerciaux</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Chiffre d'Affaires</th>
                        <th>Taux de Conversion</th>
                        <th>Nombre de Ventes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fatima Sy</td>
                        <td>€50,000</td>
                        <td>80%</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Ndeye Anta Diop</td>
                        <td>€45,000</td>
                        <td>75%</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Sokhna Diaw</td>
                        <td>€30,000</td>
                        <td>70%</td>
                        <td>90</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default TopPerformers;
