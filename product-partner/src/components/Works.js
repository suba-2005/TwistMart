import React from 'react';
import '../Assets/css/Works.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="page-works-card">
      <img src={image} alt={title} className="page-works-card-image" />
      <div className="page-works-card-content">
        <h3 className="page-works-card-title">{title}</h3>
        <p className="page-works-card-description">{description}</p>
        {/* <a href={link} className="page-works-card-link">View More</a> */}
      </div>
    </div>
  );
};

const CardContainer = ({ cards }) => {
  return (
    <div className="page-works-card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

const Works = () => {
  const cards = [
    {
      image: 'https://img1a.flixcart.com/fk-p-fk-sp-partner-dashboard/images/desktop.svg?_cb=1.0',
      title: 'List your business',
      description: 'Sign up for free, and offer your work to the Sellers',
    //   link: '#',
    },
    {
      image: 'https://img1a.flixcart.com/fk-p-fk-sp-partner-dashboard/images/get-request.svg?_cb=1.0',
      title: 'Get requests from sellers',
      description: 'Get notified and discuss service details with the sellers',
    //   link: '#',
    },
    {
      image: 'https://img1a.flixcart.com/fk-p-fk-sp-partner-dashboard/images/income.svg?_cb=1.0',
      title: 'Get paid for your work',
      description: 'Deliver services to the sellers and get paid for it',
    //   link: '#',
    },
    // Add more cards as needed
  ];

  return (
    <div className="page-works-container">
      <h2 className="page-works-section-heading">HOW IT WORKS?</h2>
      <CardContainer cards={cards} />
      <div className="page-works-register-button-container">
        <a href="#" className="page-works-register-button">Register Partner with Us</a>
      </div>
    </div>
  );
};

export default Works;
