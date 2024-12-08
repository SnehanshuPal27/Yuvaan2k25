import React from "react";
import "./CardComponent.css"; // Import for styling

// Card Component
const Card = ({ imageUrl, buttonUrl }) => {
    return (
        <div
            className="card"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={() => window.location.href = buttonUrl}
        >
            {/* Additional content (like title) can be placed here if needed */}
        </div>
    );
};

// CardList Component
const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card key={index} imageUrl={card.imageUrl} buttonUrl={card.buttonUrl} />
            ))}
        </div>
    );
};

export default CardList;

// Example Usage
// const cardsData = [
//   { imageUrl: "https://via.placeholder.com/150", buttonUrl: "https://example.com/1" },
//   { imageUrl: "https://via.placeholder.com/150", buttonUrl: "https://example.com/2" },
//   { imageUrl: "https://via.placeholder.com/150", buttonUrl: "https://example.com/3" },
// ];

// <CardList cards={cardsData} />
