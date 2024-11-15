import React from 'react';
import './Cards.css'; // Assuming the CSS you provided is saved in CardStyles.css

const Card = ({ title, copy, button }) => {
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <button className="btn">{button}</button>
      </div>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          copy={card.copy}
          button={card.button}
        />
      ))}
    </main>
  );
};



// const App = () => {
//   return <CardList cards={cardsData} />;
// };

export default CardList;
