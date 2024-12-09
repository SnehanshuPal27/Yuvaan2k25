import React from 'react';
import './Cards.css'; // Assuming the CSS you provided is saved in CardStyles.css

const Card = ({ title, copy, button, imageUrl, buttonUrl }) => {
    return (
      <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="content"  >
          {/*<h2 className="title">{title}</h2>*/}
          {/*<p className="copy">{copy}</p>*/}
          <a href={buttonUrl}>
            <button className="btn">{button}</button>
          </a>
        </div>
        <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
    );
  };
  

  const CardList2 = ({ cards }) => {
    return (
      <main className="page-content">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            copy={card.copy}
            button={card.button}
            imageUrl={card.imageUrl}
            buttonUrl={card.buttonUrl}
          />
        ))}
      </main>
    );
  };
  


// const App = () => {
//   return <CardList cards={cardsData} />;
// };

export default CardList2;
