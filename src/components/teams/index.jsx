import React from "react";
import Card from "./Card"; // Import the Card component
import "./index.css";

const Pyramid = () => (
  <div className="scene">
    <div className="floor"></div>
    <div className="pyramid bottom">
      <div></div><div></div><div></div><div></div>
    </div>
    <div className="pyramid top">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>
);

export default function TeamIndex() {
  const teams = [
    { path: "/eventTeam", front: "/EventManagement.jpeg", back: "/Event_summary.png" },
    { path: "/wcTeam", front: "/WebCreatives.jpeg", back: "/Web_summary.png" },
    { path: "/sponsorTeam", front: "/Sponsors.jpeg", back: "/Sponsor_summary.png" },
    { path: "/prTeam", front: "/PR.jpeg", back: "/Public_summary.png" },
    { path: "/mediaTeam", front: "/MediaPublicity.jpeg", back: "/Media_summary.png" },
    { path: "/sgcTeam", front: "/SGC.jpeg", back: "/SGC_summary.jpg" },
  ];

  return (
    <div className="bg">
      <Pyramid /> {/* Add Pyramid Component here */}
      <div className="team-index">
        {teams.map(({ path, front, back }, index) => (
          <Card key={index} path={path} front={front} />
        ))}
      </div>
    </div>
  );
}
