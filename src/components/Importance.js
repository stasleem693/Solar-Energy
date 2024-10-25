// src/components/Importance.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Importance.css'; // Ensure you have a CSS file for styling

const Importance = () => {
    const navigate = useNavigate();

    return (
        <div className="importance-container">
            <h1>Importance of Solar Usage</h1>
            <img src={require('../assets/importance.jpg')} alt="Importance of Solar Energy" className="importance-image" />

            <p>
                Solar energy is one of the most abundant and renewable sources of energy available today. 
                It plays a crucial role in reducing carbon emissions and combating climate change. 
                By harnessing the power of the sun, we can significantly decrease our reliance on fossil fuels.
            </p>

            <h2>Benefits of Solar Energy</h2>
            <ul>
                <li><strong>Environmentally Friendly:</strong> Solar energy generation produces no pollution, which helps maintain a cleaner environment.</li>
                <li><strong>Energy Independence:</strong> Using solar energy can reduce a country's dependence on imported fuels and increase energy security.</li>
                <li><strong>Cost Savings:</strong> By investing in solar panels, homeowners and businesses can reduce their electricity bills and even earn money by selling excess energy back to the grid.</li>
                <li><strong>Job Creation:</strong> The solar industry is a rapidly growing sector, providing numerous job opportunities in manufacturing, installation, and maintenance.</li>
                <li><strong>Increases Property Value:</strong> Homes equipped with solar energy systems have been shown to sell for more than those without, making them a smart investment.</li>
            </ul>

            <p>
                By transitioning to solar energy, we can create a sustainable future for generations to come. 
                Embracing solar technology not only benefits individuals and businesses but also contributes to global efforts 
                to mitigate the effects of climate change.
            </p>

            <button onClick={() => navigate('/solar-panels')}>Next: Solar Panels</button>
        </div>
    );
};

export default Importance;
