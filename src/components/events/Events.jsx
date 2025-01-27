import React, { useState } from "react";
import "./Events.css";
import backgroundImage from "./images.jpeg";

const EventCard = ({ event, onClick }) => {
  return (
    <div
      className="event-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={() => onClick(event)}
    >
      <h3>{event.title}</h3>
      <p className="date">{event.date}</p>
      <p className="description">{event.shortDescription}</p>
      <div className="click-info">Click for more details</div>
    </div>
  );
};

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{event.title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div
            className="modal-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="event-details">
            <div className="detail-item">
              <h4>Date & Time</h4>
              <p>{event.date}</p>
              <p>{event.time}</p>
            </div>
            <div className="detail-item">
              <h4>Location</h4>
              <p>{event.location}</p>
            </div>
            <div className="detail-item">
              <h4>Description</h4>
              <p>{event.fullDescription}</p>
            </div>
            <div className="detail-item">
              <h4>Coordinators</h4>
              {event.coordinators.map((coordinator, index) => (
                <p key={index}>
                  {coordinator.name} - {coordinator.contact}
                </p>
              ))}
            </div>
            <div className="detail-item buttons">
              {event.registrationLink &&
              typeof event.registrationLink === "object" ? (
                <>
                  <a
                    href={event.registrationLink.internal}
                    className="button registration-btn"
                  >
                    Register (IIITG Students)
                  </a>
                  <a
                    href={event.registrationLink.external}
                    className="button registration-btn"
                  >
                    Register (External)
                  </a>
                </>
              ) : event.registrationLink ? (
                <a
                  href={event.registrationLink}
                  className="button registration-btn"
                >
                  Register Now
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState("day1");

  const day1Events = [
    {
      title: "ONE VOICE, ONE INSTRUMENT",
      date: "March 1, 2025",
      time: "10:00 AM - 5:00 PM",
      shortDescription: "Solo Performance Competition",
      fullDescription:
        "Showcase your talent in solo singing or instrumental performance.",
      location: "Auditorium, IIITG",
      coordinators: [
        { name: "John Doe", contact: "123-456-7890" },
        { name: "Jane Smith", contact: "098-765-4321" },
      ],
      registrationLink: {
        internal: "#internal-link",
        external: "#external-link",
      },
    },
    {
      title: "BAND BASH",
      date: "March 1, 2025",
      time: "2:00 PM - 6:00 PM",
      shortDescription: "Band Competition",
      fullDescription:
        "Battle of the bands - showcase your group's musical talent",
      location: "Main Stage, IIITG",
      coordinators: [{ name: "Mike Johnson", contact: "111-222-3333" }],
      registrationLink: {
        internal: "#internal-link",
        external: "#external-link",
      },
    },
    {
      title: "Spotlight Solo",
      date: "March 1, 2025",
      time: "9:00 AM - 4:00 PM",
      shortDescription: "Solo Dance Competition",
      fullDescription: "Showcase your individual dance skills",
      location: "Dance Studio, IIITG",
      coordinators: [{ name: "Sarah Lee", contact: "444-555-6666" }],
      registrationLink: "#",
    },
    {
      title: "Prompt Wars",
      date: "March 1, 2025",
      time: "11:00 AM - 7:00 PM",
      shortDescription: "Creative Writing Challenge",
      fullDescription: "Test your creative writing skills",
      location: "Creative Hub, IIITG",
      coordinators: [{ name: "Tom Brown", contact: "777-888-9999" }],
      registrationLink: "#",
    },
    {
      title: "SWAY",
      date: "March 1, 2025",
      time: "10:00 AM - 3:00 PM",
      shortDescription: "Dance Competition",
      fullDescription: "Group dance showcase",
      location: "Main Hall, IIITG",
      coordinators: [{ name: "Alice White", contact: "123-123-1234" }],
      registrationLink: "#",
    },
    {
      title: "SYNC",
      date: "March 1, 2025",
      time: "1:00 PM - 5:00 PM",
      shortDescription: "Synchronized Performance",
      fullDescription: "Group synchronized dance competition",
      location: "Performance Center, IIITG",
      coordinators: [{ name: "Bob Wilson", contact: "456-456-4567" }],
      registrationLink: "#",
    },
    {
      title: "POP IT UP!",
      date: "March 1, 2025",
      time: "9:00 AM - 6:00 PM",
      shortDescription: "Pop Culture Festival",
      fullDescription: "Celebrate pop culture through various performances",
      location: "Festival Ground, IIITG",
      coordinators: [{ name: "Carol Martinez", contact: "789-789-7890" }],
      registrationLink: "#",
    },
    {
      title: "MUSICAL OLYMPICS",
      date: "March 1, 2025",
      time: "10:00 AM - 4:00 PM",
      shortDescription: "Music Competition Series",
      fullDescription: "Multiple musical events and competitions",
      location: "Olympic Arena, IIITG",
      coordinators: [{ name: "David Chen", contact: "321-321-3210" }],
      registrationLink: "#",
    },
    {
      title: "GULLY CRICKET",
      date: "March 1, 2025",
      time: "8:00 AM - 6:00 PM",
      shortDescription: "Street Cricket Tournament",
      fullDescription: "Traditional street cricket competition",
      location: "Sports Ground, IIITG",
      coordinators: [{ name: "Emily Wang", contact: "654-654-6543" }],
      registrationLink: "#",
    },
    {
      title: "OPEN MIC X LATENT",
      date: "March 1, 2025",
      time: "5:00 PM - 9:00 PM",
      shortDescription: "Open Mic Night",
      fullDescription: "Express yourself through poetry, music, or comedy",
      location: "Student Center, IIITG",
      coordinators: [{ name: "Frank Lee", contact: "987-987-9876" }],
      registrationLink: "#",
    },
    {
      title: "Squid Games",
      date: "March 1, 2025",
      time: "11:00 AM - 8:00 PM",
      shortDescription: "Survival Game Series",
      fullDescription:
        "Series of challenging games inspired by popular culture",
      location: "Game Zone, IIITG",
      coordinators: [{ name: "Grace Kim", contact: "135-246-7890" }],
      registrationLink: "#",
    },
  ];

  const day2Events = [
    {
      title: "ONE VOICE, ONE INSTRUMENT",
      date: "March 2, 2025",
      time: "10:00 AM - 5:00 PM",
      shortDescription: "Solo Performance Competition",
      fullDescription: "Day 2 of solo singing and instrumental performances",
      location: "Auditorium, IIITG",
      coordinators: [{ name: "Helen Park", contact: "111-222-3333" }],
      registrationLink: "#",
    },
    // Copy the same events but change dates to March 2, 2025
    // Repeat for all 11 events
    {
      title: "BAND BASH",
      date: "March 2, 2025",
      time: "2:00 PM - 6:00 PM",
      shortDescription: "Band Competition Finals",
      fullDescription: "Final round of battle of the bands",
      location: "Main Stage, IIITG",
      coordinators: [{ name: "Ian Clark", contact: "444-555-6666" }],
      registrationLink: "#",
    },
    {
      title: "Spotlight Solo",
      date: "March 2, 2025",
      time: "9:00 AM - 4:00 PM",
      shortDescription: "Solo Dance Competition",
      fullDescription: "Showcase your individual dance skills",
      location: "Dance Studio, IIITG",
      coordinators: [{ name: "Sarah Lee", contact: "444-555-6666" }],
      registrationLink: "#",
    },
    {
      title: "Prompt Wars",
      date: "March 2, 2025",
      time: "11:00 AM - 7:00 PM",
      shortDescription: "Creative Writing Challenge",
      fullDescription: "Test your creative writing skills",
      location: "Creative Hub, IIITG",
      coordinators: [{ name: "Tom Brown", contact: "777-888-9999" }],
      registrationLink: "#",
    },
    {
      title: "SWAY",
      date: "March 2, 2025",
      time: "10:00 AM - 3:00 PM",
      shortDescription: "Dance Competition",
      fullDescription: "Group dance showcase",
      location: "Main Hall, IIITG",
      coordinators: [{ name: "Alice White", contact: "123-123-1234" }],
      registrationLink: "#",
    },
    {
      title: "SYNC",
      date: "March 2, 2025",
      time: "1:00 PM - 5:00 PM",
      shortDescription: "Synchronized Performance",
      fullDescription: "Group synchronized dance competition",
      location: "Performance Center, IIITG",
      coordinators: [{ name: "Bob Wilson", contact: "456-456-4567" }],
      registrationLink: "#",
    },
    {
      title: "POP IT UP!",
      date: "March 2, 2025",
      time: "9:00 AM - 6:00 PM",
      shortDescription: "Pop Culture Festival",
      fullDescription: "Celebrate pop culture through various performances",
      location: "Festival Ground, IIITG",
      coordinators: [{ name: "Carol Martinez", contact: "789-789-7890" }],
      registrationLink: "#",
    },
    {
      title: "MUSICAL OLYMPICS",
      date: "March 2, 2025",
      time: "10:00 AM - 4:00 PM",
      shortDescription: "Music Competition Series",
      fullDescription: "Multiple musical events and competitions",
      location: "Olympic Arena, IIITG",
      coordinators: [{ name: "David Chen", contact: "321-321-3210" }],
      registrationLink: "#",
    },
    {
      title: "GULLY CRICKET",
      date: "March 2, 2025",
      time: "8:00 AM - 6:00 PM",
      shortDescription: "Street Cricket Tournament",
      fullDescription: "Traditional street cricket competition",
      location: "Sports Ground, IIITG",
      coordinators: [{ name: "Emily Wang", contact: "654-654-6543" }],
      registrationLink: "#",
    },
    {
      title: "OPEN MIC X LATENT",
      date: "March 2, 2025",
      time: "5:00 PM - 9:00 PM",
      shortDescription: "Open Mic Night",
      fullDescription: "Express yourself through poetry, music, or comedy",
      location: "Student Center, IIITG",
      coordinators: [{ name: "Frank Lee", contact: "987-987-9876" }],
      registrationLink: "#",
    },
    {
      title: "Squid Games",
      date: "March 2, 2025",
      time: "11:00 AM - 8:00 PM",
      shortDescription: "Survival Game Series",
      fullDescription:
        "Series of challenging games inspired by popular culture",
      location: "Game Zone, IIITG",
      coordinators: [{ name: "Grace Kim", contact: "135-246-7890" }],
      registrationLink: "#",
    },
    // Continue with remaining events...
    // Add all 11 events with March 2, 2025 date
  ];

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="day-selection">
        <button
          className={`day-button ${selectedDay === "day1" ? "active" : ""}`}
          onClick={() => setSelectedDay("day1")}
        >
          Day 1
        </button>
        <button
          className={`day-button ${selectedDay === "day2" ? "active" : ""}`}
          onClick={() => setSelectedDay("day2")}
        >
          Day 2
        </button>
      </div>
      <div className="events-container">
        {(selectedDay === "day1" ? day1Events : day2Events).map(
          (event, index) => (
            <EventCard key={index} event={event} onClick={handleCardClick} />
          ),
        )}
      </div>
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;
