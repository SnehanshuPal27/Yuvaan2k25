// EventsPage.jsx
import React from "react";
import "./Events.css";
import backgroundImage from "./images.jpeg";

const EventCard = ({ title, date, description }) => {
  return (
    <div
      className="event-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p className="description">{description}</p>
    </div>
  );
};

const EventsPage = () => {
  const events = [
    {
      title: "Event 1",
      date: "Jan 15, 2024",
      description: "Description for Event 1",
    },
    {
      title: "Event 2",
      date: "Feb 20, 2024",
      description: "Description for Event 2",
    },
    {
      title: "Event 3",
      date: "Mar 10, 2024",
      description: "Description for Event 3",
    },
    {
      title: "Event 4",
      date: "Apr 5, 2024",
      description: "Description for Event 4",
    },
    {
      title: "Event 5",
      date: "May 15, 2024",
      description: "Description for Event 5",
    },
    {
      title: "Event 6",
      date: "Jun 20, 2024",
      description: "Description for Event 6",
    },
    {
      title: "Event 7",
      date: "Jul 10, 2024",
      description: "Description for Event 7",
    },
    {
      title: "Event 8",
      date: "Aug 5, 2024",
      description: "Description for Event 8",
    },
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
