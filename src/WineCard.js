import React from 'react';
import './WineCard.css'

const WineCard = ({ wine }) => {
  return (
    <div className="wine-card">
      <img src={wine.image} alt={wine.name} className='wine-image'/>
      <span className='wine-name'>{wine.name}</span>
      <span className='wine-description'>{wine.description}</span>
      <span className='wine-price'>from {wine.price} /case</span>
    </div>
  );
};

export default WineCard ;
