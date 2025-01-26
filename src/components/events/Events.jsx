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
              <a
                href={event.registrationLink}
                className="button registration-btn"
              >
                Register Now
              </a>
              <a href={event.galleryLink} className="button gallery-btn">
                View Previous Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState("day1"); // Default to day1

  const day1Events = [
    {
      title: "Tech Conference 2024",
      date: "Jan 15, 2024",
      time: "10:00 AM - 5:00 PM",
      shortDescription: "Annual technology conference",
      fullDescription:
        "Join us for our annual technology conference where industry leaders share insights.",
      location: "Tech Center, Downtown",
      coordinators: [
        { name: "John Doe", contact: "123-456-7890" },
        { name: "Jane Smith", contact: "098-765-4321" },
      ],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Coding Workshop",
      date: "Feb 20, 2024",
      time: "2:00 PM - 6:00 PM",
      shortDescription: "Hands-on coding workshop",
      fullDescription: "Learn practical coding skills with industry experts.",
      location: "Innovation Hub",
      coordinators: [{ name: "Mike Johnson", contact: "111-222-3333" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "AI Symposium",
      date: "Mar 10, 2024",
      time: "9:00 AM - 4:00 PM",
      shortDescription: "Exploring AI innovations",
      fullDescription:
        "Discover the latest in artificial intelligence and machine learning.",
      location: "Science Center",
      coordinators: [{ name: "Sarah Lee", contact: "444-555-6666" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Startup Summit",
      date: "Apr 5, 2024",
      time: "11:00 AM - 7:00 PM",
      shortDescription: "Networking event for startups",
      fullDescription: "Connect with investors and fellow entrepreneurs.",
      location: "Business Center",
      coordinators: [{ name: "Tom Brown", contact: "777-888-9999" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Web Dev Bootcamp",
      date: "May 15, 2024",
      time: "10:00 AM - 3:00 PM",
      shortDescription: "Intensive web development training",
      fullDescription: "Master modern web development technologies.",
      location: "Tech Academy",
      coordinators: [{ name: "Alice White", contact: "123-123-1234" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Cloud Computing",
      date: "Jun 20, 2024",
      time: "1:00 PM - 5:00 PM",
      shortDescription: "Cloud technologies showcase",
      fullDescription: "Explore the latest in cloud computing solutions.",
      location: "Digital Center",
      coordinators: [{ name: "Bob Wilson", contact: "456-456-4567" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Data Science Forum",
      date: "Jul 10, 2024",
      time: "9:00 AM - 6:00 PM",
      shortDescription: "Big data and analytics",
      fullDescription: "Deep dive into data science and analytics.",
      location: "Analytics Hub",
      coordinators: [{ name: "Carol Martinez", contact: "789-789-7890" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Cybersecurity Conf",
      date: "Aug 5, 2024",
      time: "10:00 AM - 4:00 PM",
      shortDescription: "Security and privacy focus",
      fullDescription: "Learn about the latest in cybersecurity.",
      location: "Security Center",
      coordinators: [{ name: "David Chen", contact: "321-321-3210" }],
      registrationLink: "#",
      galleryLink: "#",
    },
  ];

  const day2Events = [
    {
      title: "IoT Workshop",
      date: "Sep 15, 2024",
      time: "10:00 AM - 5:00 PM",
      shortDescription: "Internet of Things exploration",
      fullDescription:
        "Discover the potential of connected devices and IoT solutions.",
      location: "Smart Hub",
      coordinators: [{ name: "Elena Rodriguez", contact: "111-222-3333" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Blockchain Summit",
      date: "Oct 1, 2024",
      time: "9:00 AM - 6:00 PM",
      shortDescription: "Cryptocurrency and blockchain",
      fullDescription:
        "Explore the future of digital currencies and blockchain technology.",
      location: "Crypto Center",
      coordinators: [{ name: "Alex Chang", contact: "444-555-6666" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Game Dev Expo",
      date: "Oct 20, 2024",
      time: "11:00 AM - 7:00 PM",
      shortDescription: "Gaming industry showcase",
      fullDescription:
        "Experience the latest in game development and virtual reality.",
      location: "Game Arena",
      coordinators: [{ name: "Chris Walker", contact: "777-888-9999" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "DevOps Conference",
      date: "Nov 5, 2024",
      time: "10:00 AM - 4:00 PM",
      shortDescription: "Modern DevOps practices",
      fullDescription: "Learn about the latest DevOps methodologies and tools.",
      location: "Tech Hub",
      coordinators: [{ name: "Maria Garcia", contact: "123-123-1234" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "ML Workshop",
      date: "Nov 15, 2024",
      time: "1:00 PM - 5:00 PM",
      shortDescription: "Machine Learning deep dive",
      fullDescription: "Hands-on workshop on machine learning algorithms.",
      location: "AI Center",
      coordinators: [{ name: "James Wilson", contact: "456-456-4567" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "UX Design Summit",
      date: "Nov 25, 2024",
      time: "9:00 AM - 3:00 PM",
      shortDescription: "User experience design",
      fullDescription: "Master the principles of user experience design.",
      location: "Design Studio",
      coordinators: [{ name: "Sophie Chen", contact: "789-789-7890" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "Robotics Expo",
      date: "Dec 10, 2024",
      time: "10:00 AM - 6:00 PM",
      shortDescription: "Robotics and automation",
      fullDescription:
        "Explore the latest in robotics and automation technology.",
      location: "Robot Lab",
      coordinators: [{ name: "Peter Kim", contact: "321-321-3210" }],
      registrationLink: "#",
      galleryLink: "#",
    },
    {
      title: "5G Technology",
      date: "Dec 20, 2024",
      time: "11:00 AM - 4:00 PM",
      shortDescription: "Next-gen connectivity",
      fullDescription: "Understanding the impact of 5G technology.",
      location: "Network Center",
      coordinators: [{ name: "Linda Martinez", contact: "654-654-6543" }],
      registrationLink: "#",
      galleryLink: "#",
    },
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
