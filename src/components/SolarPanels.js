import React from 'react';
import './SolarPanels.css'; // Ensure styling for fonts and layout

const SolarPanels = () => {
  return (
    <div className="solar-panels">
      <h2 className="solar-title">Solar Panels: Powering a Sustainable Future 🌞</h2>
      <p className="solar-content">
        <em>Solar panels are more than just an energy solution—they represent a transformative approach to sustainable living and business.</em> By harnessing the sun’s limitless power, solar panels provide clean, renewable energy that reduces carbon emissions, cuts costs, and empowers users to achieve energy independence.
      </p>
      <ul className="solar-benefits">
        <li><strong>Eco-Friendly Energy</strong>: Produces zero emissions, significantly reducing the carbon footprint.</li>
        <li><strong>Cost Efficiency</strong>: Dramatic reduction in electricity bills, especially for high-energy users.</li>
        <li><strong>Durability & Reliability</strong>: With lifespans over 25 years, panels offer long-term value and dependability.</li>
        <li><strong>Innovative Technology</strong>: Advances in solar panel technology maximize energy absorption, efficiency, and storage capabilities.</li>
      </ul>
      <p className="solar-conclusion">
        Solar panels are not only a wise investment but a commitment to a greener, more resilient world. <em>Each panel installed is a step towards a sustainable future where energy is cleaner, costs are lower, and impact is profound.</em>
      </p>
    </div>
  );
};

export default SolarPanels;
