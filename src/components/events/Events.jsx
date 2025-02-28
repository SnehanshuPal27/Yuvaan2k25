import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Events.css";
import backgroundImage from "./images.jpeg";
import Footer from "../footer/footer";
const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.shortDescription}</p>
      <p>Click for more details</p>
    </div>
  );
};

const EventModal = ({ event, onClose }) => {
  if (!event) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="festival-card" onClick={(e) => e.stopPropagation()}>
        {/* Image container only shown on larger screens */}
        <div className="festival-card__image-container desktop-only">
          <img
            src={event.image}
            alt={event.title}
            className="festival-card__image"
          />
        </div>

        <div className="festival-card__details">
          <button className="close-button" onClick={onClose}>
            ×
          </button>

          {/* Title shown only on mobile */}
          <div className="mobile-only-title">
            <h1>{event.title}</h1>
            <p>{event.shortDescription}</p>
          </div>

          <div className="festival-card__date-location">
            <div className="festival-card__date-flex">
              <span>{event.date}</span>
              <span>{event.location}</span>
            </div>
            <div className="festival-card__time">{event.time}</div>
          </div>

          <div className="festival-card__description">
            {event.fullDescription.split("\n").map((line, index) => (
              <p key={index} className="description-line">
                {line.trim()}
              </p>
            ))}
          </div>

          <div className="festival-card__contact">
            {event.coordinators.map((coordinator, index) => (
              <span key={index}>
                {coordinator.name}: {coordinator.contact}
              </span>
            ))}
          </div>

          {event.registrationLink && (
            <div className="festival-card__registration">
              {typeof event.registrationLink === "object" ? (
                <>
                  <a
                    href={event.registrationLink.internal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="registration-btn"
                  >
                    IIITG Students
                  </a>
                  <a
                    href={event.registrationLink.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="registration-btn"
                  >
                    External
                  </a>
                </>
              ) : (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="registration-btn"
                >
                  Register Now
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState("day1");

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const day1Events = [
    {
      title: "ONE VOICE, ONE INSTRUMENT",
      image: "",
      date: "March 1, 2025",
      time: "10:00 AM - 5:00 PM",
      shortDescription: "Solo Performance Competition",
      fullDescription: `Two Categories:\n
    • Vocalists\n
    • Instrumentalists\n
    Judging Criteria:\n
    • Pitch & Rhythm\n
    • Creativity\n
    • Stage Presence\n
    • Overall Performance`,
      location: "Auditorium, IIITG",
      coordinators: [
        { name: "Ananya Anurag Lenka", contact: "9437089199" },
        { name: "Karthikeya Seeram", contact: "8978327879" },
        { name: "Bhavish Melekote", contact: "9321432559" },
      ],
      registrationLink: {
        internal:
          "https://docs.google.com/forms/d/e/1FAIpQLSetukoMuauU35o5yTykBppAfclr3Ey1yA9B7OvbmuRX-FI3HA/viewform",
        external:
          "https://docs.google.com/forms/d/e/1FAIpQLSevcP6nhF94ojjUWyE_QvLqETY4kKNewLsUC5MfrRKxQHlmcw/viewform",
      },
      teamSize: "1",
    },
    {
      title: "BAND BASH",
      image: "../../public/flyer - MUSIC.jpg",
      date: "March 1, 2025",
      time: "2:00 PM - 6:00 PM",
      shortDescription: "Band Competition",
      fullDescription: `Performance Guidelines:\n
    • Bands must perform original or cover songs\n
    • Performance duration: 15-20 minutes\n
    Judging Criteria:\n
    • Musical Synchronization\n
    • Stage Presence\n
    • Overall Impact`,
      location: "Main Stage, IIITG",
      coordinators: [
        { name: "Ananya Anurag Lenka", contact: "9437089199" },
        { name: "Karthikeya Seeram", contact: "8978327879" },
        { name: "Bhavish Melekote", contact: "9321432559" },
      ],
      registrationLink: {
        internal:
          "https://docs.google.com/forms/d/e/1FAIpQLScEA68k67JuIhaubDOGimVJN84RA5O4jG5ZqFXFOOVMMxAFfQ/viewform",
        external:
          "https://docs.google.com/forms/d/e/1FAIpQLSevcP6nhF94ojjUWyE_QvLqETY4kKNewLsUC5MfrRKxQHlmcw/viewform",
      },
      teamSize: "3-8",
    },
    {
      title: "Spotlight Solo",
      image: "../../public/Drama.JPG",
      date: "March 1, 2025",
      time: "9:00 AM - 4:00 PM",
      shortDescription: "Solo Dance Competition",
      fullDescription: `1) Participants are free to choose their theme. The content should be meaningful, engaging, and age-appropriate.
      2) Each team must perform within the allotted time limit as per competition guidelines.
      3) Only minimal props are allowed, and participants must manage them independently.`,
      location: "Dance Studio, IIITG",
      coordinators: [
        { name: "Abhiraj Tomar", contact: "9205454265" },
        { name: "Mohit Kumawat", contact: "9468844484" },
        { name: "Prakshay Saini", contact: "9034480145" },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSd5cu5F_yObiBgfhIFKbcbseo02j4ZP3fN0LuzFNd-Uo9XsVQ/viewform?usp=header",
      teamSize: "1",
    },
    {
      title: "Prompt Wars",
      image: "",
      date: "March 1, 2025",
      time: "11:00 AM - 7:00 PM",
      shortDescription: "Creative Writing Challenge",
      fullDescription: `● Prompts will be provided on the spot by the event organizers.
      ● Vulgar or offensive content will lead to immediate disqualification.`,
      location: "Creative Hub, IIITG",
      coordinators: [
        { name: "Abhiraj Tomar", contact: "9205454265" },
        {
          name: "Mohit Kumawat",
          contact: "9468844484",
        },
        {
          name: "Prakshay Saini",
          contact: "9034480145",
        },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfCw-vp5dNfLnLEZMEi9SjyJE3l13BmYCXJ_iZcHe6PsXRTUA/viewform?usp=header",
      teamSize: "2-4",
    },

    {
      title: "Squid Games",
      image: "",
      date: "March 1, 2025",
      time: "11:00 AM - 8:00 PM",
      shortDescription: "Survival Game Series",
      fullDescription: "Rules To Be Determined",
      location: "Game Zone, IIITG",
      coordinators: [{ name: "Fun Coordinator", contact: "Contact Info" }],
      registrationLink: "#squid-games-registration",
      teamSize: "3-5",
    },
    {
      title: "The Art Odyssey",
      image: "",
      date: "March 1, 2025",
      time: "5:00 PM - 6:00 PM",
      shortDescription: "Dynamic Painting Competition",
      fullDescription: `The Art Odyssey is a dynamic painting competition where teams of two create artwork based on a given theme while adapting to periodic surprise challenges. This event tests creativity, teamwork, and adaptability.

    Event Overview:
    - Date: 1st March
    - Time: 5:00 PM - 6:00 PM
    - Team Size: 2 members
    - Duration: 1 hour
    - Theme: Revealed at the start

    Event Format:
    1. Foundation Phase (10 minutes): Start artwork based on the theme.
    2. Challenge Phase (40 minutes): Adapt to new challenges every 10 minutes.
    3. Refinement Phase (10 minutes): Final touches.

    Judging Criteria:
    - Creativity (30%)
    - Adaptability (25%)
    - Teamwork (20%)
    - Visual Appeal (25%)

    Guidelines:
    - Bring your own paints and brushes.
    - No pre-drawn sketches or digital tools.
    - Follow all challenge rules and time limits.

    Winner Selection:
    Top three teams with the highest scores win. In case of a tie, adaptability to challenges decides the winner.`,
      location: "The Townhall",
      coordinators: [
        { name: "Samadrita", contact: "7001805007" },
        { name: "Prithvi", contact: "9955095089" },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfRsAYZymC7iiMrVYZTCW-huunufen4NKJQkbwJbdtAxKXBlA/viewform",
      teamSize: "2",
    },
    {
      title: "GULLY CRICKET (Finals)",
      image: "",
      date: "March 2, 2025",
      time: "8:00 AM - 6:00 PM",
      shortDescription: "Street Cricket Tournament Finals",
      fullDescription: `1) Matches will be played with a tennis ball.
      2) Equipment (bat & ball) will be provided.
      3) Maximum team size is 3 players.
      4) Rules of the game will be briefed on the spot.
      5) The organizers reserve the right to alter rules and/or schedule in case of an unforeseen circumstances.`,
      location: "Sports Ground, IIITG",
      coordinators: [{ name: "Shubh Tiwari", contact: "9528015193" }],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeVZUBubD0i2We5mlDHTKuRiRQwjKmHEgFHnndr0LUO56zBRQ/viewform?usp=header",
      teamSize: "3",
    },
    {
      title: "POP IT UP! (Day 2)",
      image: "../../public/QUIZ.JPG",
      date: "March 2, 2025",
      time: "9:00 AM - 6:00 PM",
      shortDescription: "Pop Culture Festival Continuation",
      fullDescription: `Day 2 Events:\n
    • Cosplay Finals\n
    • Art Competition Results\n
    • Pop Culture Trivia Finals\n
    • Gaming Tournament Finals\n
    • Best of Show Awards`,
      location: "Festival Ground, IIITG",
      coordinators: [
        { name: "Thamas Prakash Gaykawad", contact: "7898187813" },
        { name: "Shubham Kumar", contact: "9065582032" },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScqjuGDR89jtcm-pr4iLEiPOJauYkMIb949bGZQPsOBBUMO7A/viewform?usp=header",
      teamSize: "1-3",
    },
  ];

  const day2Events = [
    {
      title: "SWAY",
      image: "/flyer - dance.jpg",
      date: "March 1, 2025",
      time: "10:00 AM - 3:00 PM",
      shortDescription: "Solo Dance Competition",
      fullDescription: `• Performance duration: The maximum time allowed is 3 minutes.
      • Any dance style is permitted; feel free to express yourself creatively.
      • Props are allowed but must be pre-approved by the organizers.
      • Participants must bring their own music track in MP3 format.`,
      location: "Main Hall, IIITG",
      coordinators: [
        { name: "Lasya Eadara", contact: "9704663622" },
        { name: "Vanshika Gupta", contact: "7408710213" },
        { name: "Ramu naik", contact: "9492659298" },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuS74l5OzImBKnH-1vqXf_Zun7G926wXUGYq7BPK0m_XUOMQ/viewform?usp=header",
      teamSize: "1",
    },
    {
      title: "SYNC (Finals)",
      image: "",
      date: "March 1, 2025",
      time: "1:00 PM - 5:00 PM",
      shortDescription: "Group Dance Competition",
      fullDescription: `• Performance duration: 3 to 5 minutes.
      • Props and costumes are allowed but must be pre-approved by the organizers.
      • Any dance style or fusion is welcome; however, synchronization and creativity are key.
      • Teams must submit their music track in MP3 format before the event.`,
      location: "Performance Center, IIITG",
      coordinators: [
        { name: "Lasya Eadara", contact: "9704663622" },
        { name: "Vanshika Gupta", contact: "7408710213" },
        { name: "Ramu naik", contact: "9492659298" },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScqY67gLJEg4uahCk1hi00RNFr9WxFGnYS5jQTGBH5AN_vfdQ/viewform?usp=header",
      teamSize: "4-12",
    },

    {
      title: "MUSICAL OLYMPICS (Finals)",
      image: "",
      date: "March 1, 2025",
      time: "10:00 AM - 4:00 PM",
      shortDescription: "Music Competition Series",
      fullDescription: `Challenge Rounds:\n
    • Missing Words: Fill in song lyrics\n
    • Reverse Lyrics: Identify backwards songs\n
    • Emoji Decode: Guess songs from emojis\n
    • Lyric Puzzle: Rearrange scrambled lyrics\n
    • Lyric Charades: Act out song lyrics`,
      location: "Olympic Arena, IIITG",
      coordinators: [
        { name: "Ananya Anurag Lenka", contact: "9437089199" },
        { name: "Karthikeya Seeram", contact: "8978327879" },
        { name: "Bhavish Melekote", contact: "9321432559" },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSd-1FERO87RREoVi9fz_9WUsaZf1nOIaL73vAl2Wlrsm4xL-g/viewform",
      teamSize: "1",
    },
    {
      title: "GULLY CRICKET (Finals)",
      image: "",
      date: "March 2, 2025",
      time: "8:00 AM - 6:00 PM",
      shortDescription: "Street Cricket Tournament Finals",
      fullDescription: `1) Matches will be played with a tennis ball.
      2) Equipment (bat & ball) will be provided.
      3) Maximum team size is 3 players.
      4) Rules of the game will be briefed on the spot.
      5) The organizers reserve the right to alter rules and/or schedule in case of an unforeseen circumstances.`,
      location: "Sports Ground, IIITG",
      coordinators: [{ name: "Shubh Tiwari", contact: "9528015193" }],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeVZUBubD0i2We5mlDHTKuRiRQwjKmHEgFHnndr0LUO56zBRQ/viewform?usp=header",
      teamSize: "3",
    },
    {
      title: "OPEN MIC X LATENT (Day 2)",
      image: "../../public/flyer - open mic.jpg",
      date: "March 2, 2025",
      time: "5:00 PM - 9:00 PM",
      shortDescription: "Open Mic Event Continuation",
      fullDescription: `1) Each performer gets maximum 5 minutes.
      2) Content should be anything but it should be family-friendly and respectful.
      3) Performer should predict a score before performing and after performance we match the average score of judge to the guess score of the performer.
      4) Winner will be decided if guessed score matches with average score.`,
      location: "Student Center, IIITG",
      coordinators: [
        { name: "Shubh Tiwari", contact: "9528015193" },
        { name: "Vanshika Gupta", contact: "7408710213" },
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfjWPqY-ZC9NHzqCDXbwIE0Uql4IIYz011X28wTQra9eumP3g/viewform",
      teamSize: "1",
    },
    {
      title: "Squid Games (Finals)",
      image: "",
      date: "March 2, 2025",
      time: "11:00 AM - 8:00 PM",
      shortDescription: "Survival Game Series Finals",
      fullDescription: "Rules To Be Determined",
      location: "Game Zone, IIITG",
      coordinators: [{ name: "Fun Coordinator", contact: "Contact Info" }],
      registrationLink: "#squid-games-registration-finals",
      teamSize: "3-5",
    },
  ];

  useEffect(() => {
    // Create pointer element
    const pointerElement = document.createElement("div");
    pointerElement.classList.add("pointer");
    document.body.appendChild(pointerElement);

    // Handle pointer movement
    const handlePointerMove = (e) => {
      pointerElement.style.left = `${e.clientX - 10}px`;
      pointerElement.style.top = `${e.clientY - 10}px`;
    };

    // Handle pointer interactions with cards
    const handleCardEnter = () => {
      pointerElement.style.transform = "scale(2)";
      pointerElement.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
    };
    const handleCardLeave = () => {
      pointerElement.style.transform = "scale(1)";
      pointerElement.style.backgroundColor = "rgba(255, 215, 0, 0.5)";
    };

    // Add event listeners
    document.addEventListener("mousemove", handlePointerMove);

    // Add listeners for all interactive elements
    const interactiveElements = document.querySelectorAll(
      ".event-card, .button, .close-button",
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleCardEnter);
      element.addEventListener("mouseleave", handleCardLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handlePointerMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleCardEnter);
        element.removeEventListener("mouseleave", handleCardLeave);
      });
      if (pointerElement && pointerElement.parentElement) {
        document.body.removeChild(pointerElement);
      }
    };
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="events-page">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            image: `url(${backgroundImage})`,
            repeat: "no-repeat",
            size: "cover",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffd700",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="content-wrapper">
        <h1 className="events-heading">Upcoming Events</h1>
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
    </div>
  );
};
export default Events;
