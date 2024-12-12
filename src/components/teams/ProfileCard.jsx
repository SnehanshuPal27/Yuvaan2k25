import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ image, name, jobTitle, linkedinUrl, email }) => {
    const profileImage = image || '/card-pic.jpg';
    const blogUrl = " ";

    return (
        <div className="prof-card">
            <div className="profile-container">
                <img src={profileImage} alt={`${name} profile picture`} />
            </div>
            <div className="profile-info">
                <h1 className="profile-name">{name}</h1>
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
