import React from 'react';
import './Cards.css'; // Assuming the CSS file provided earlier is saved as Cards.css

const Card = ({ title, copy, button, imageUrl, buttonUrl }) => {
    return (
        <div className="card">
            <div className="card-image-wrapper">
                <div
                    className="card-image"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
            </div>
            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="copy">{copy}</p>
                <a href={buttonUrl}>
                    <button className="btn">{button}</button>
                </a>
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
                    imageUrl={card.imageUrl}
                    buttonUrl={card.buttonUrl}
                />
            ))}
        </main>
    );
};

export default CardList;
