import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function TeamIndex() {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const teams = [
    {
      to: "/eventTeam",
      img: "/EventManagement.jpg",
      text: "Learn more about our Event Team. We organize unforgettable events.",
    },
    {
      to: "/wcTeam",
      img: "/WebCreatives.jpg",
      text: "Discover our Web Creatives Team. We build stunning web experiences.",
    },
    {
      to: "/sponsorTeam",
      img: "/Sponsors.jpg",
      text: "Meet our Sponsor Team. We secure amazing sponsorship deals.",
    },
    {
      to: "/prTeam",
      img: "/PR.jpg",
      text: "Our PR Team shapes our public image with creative strategies.",
    },
    {
      to: "/mediaTeam",
      img: "/MediaPublicity.png",
      text: "Explore our Media Team. We create compelling media content.",
    },
    {
      to: "/sgcTeam",
      img: "/SGC.jpeg",
      text: "Our SGC Team works on groundbreaking creative solutions.",
    },
  ];

  return (
    <div className="bg">
      <div className="team-index">
        {teams.map((team, index) => (
          <div
            key={index}
            className={`card-container ${
              isMobile && activeCard === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card">
              <div
                className="card-front"
                style={{ backgroundImage: `url(${team.img})` }}
              ></div>
              <div className="card-back">
                <p>{team.text}</p>
                <Link to={team.to}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(index);
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll to Footer Button (Only in Mobile View) */}
      {isMobile && (
        <button className="scroll-footer-btn" onClick={scrollToFooter}>
          ⬇
        </button>
      )}
    </div>
  );
}
