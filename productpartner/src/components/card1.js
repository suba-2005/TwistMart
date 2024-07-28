import React from 'react';
import '../assets/css/card1.css';

const cards = [
  { 
    title: 'Mountain View', 
    copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', 
    button: 'View Trips' 
  },
  { 
    title: 'To The Beach', 
    copy: 'Plan your next beach trip with these fabulous destinations', 
    button: 'View Trips' 
  },
  { 
    title: 'Desert Destinations', 
    copy: 'It\'s the desert you\'ve always dreamed of', 
    button: 'Book Now' 
  },
];

const Card = ({ title, copy, button, imageId }) => (
  <div className="card" style={{ backgroundImage: `url(https://images.unsplash.com/photo-${imageId}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)` }}>
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="copy">{copy}</p>
      <button className="btn">{button}</button>
    </div>
  </div>
);

const CardList = () => {
  const imageIds = ['1517021897933-0e0319cfbc28', '1533903345306-15d1c30952de', '1545243424-0ce743321e11', '1531306728370-e2ebd9d7bb99'];
  
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <Card key={index} {...card} imageId={imageIds[index]} />
      ))}
    </main>
  );
};

export default CardList;
