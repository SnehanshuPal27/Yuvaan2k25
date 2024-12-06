import React, { useEffect, useRef } from 'react';
import './ProfileCard.css';

const ProfileCard = ({ image, name, jobTitle, linkedinUrl, email }) => {
    const profileImage = image || '/card-pic.jpg';
    const blogUrl = " ";
    const nameRef = useRef(null);

    useEffect(() => {
        const nameElement = nameRef.current;
        const maxHeight = 26.4; // Adjust the maximum height as needed

        if (nameElement) {
            const initialFontSize = parseFloat(window.getComputedStyle(nameElement).fontSize);

            // Calculate the scaling factor to fit within the max height
            const scaleFactor = maxHeight / nameElement.offsetHeight;

            // Apply the scaled font size
            nameElement.style.fontSize = `${initialFontSize * scaleFactor}px`;
        }
    }, [name]);

    return (
        <div className="prof-card">
            <div className="profile-container">
                <img src={profileImage} alt={`${name} profile picture`} />
            </div>
            <div className="profile-info">
                <h1 ref={nameRef} className="profile-name">{name}</h1>
                <p className="job-title">{jobTitle}</p>
                <p className="desc">{email}</p>
            </div>

            {/* Optional social links section */}
            {/* <div className="profile-social">
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {blogUrl && (
          <a href={blogUrl} target="_blank" rel="noopener noreferrer">
            Blogs
          </a>
        )}
      </div> */}

            <div className="card-bottom"></div>
        </div>
    );
};

export default ProfileCard;