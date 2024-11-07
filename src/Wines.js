
import React from 'react';
import WineCard from './WineCard';
import { wines } from './Data';
import './Wines.css';

const Wines = () => {
  return (
    <div id="wines" className="wines-section">
      <h2 className="section-title">Our Wines</h2>
      <p>
        At Lefokeni Winery, we craft wines for every moment. 
        From milestones to quiet nights, our diverse range has you covered.
      </p>
      <div className="wines-row">
        {wines.map((wine) => (
          <WineCard key={(wine.id)} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default Wines;

