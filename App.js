// src/App.js
import React from 'react';
import Card from './Card';
import './App.css';

const cardData = Array.from({ length: 20 }, (_, index) => ({
  image: `https://picsum.photos/200/300?random=${index + 1}`,
  title: `Card ${index + 1}`,
  description: `This is card ${index + 1} description`,
}));

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">All the cards are here.</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
