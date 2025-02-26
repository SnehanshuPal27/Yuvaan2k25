import React from 'react';
import ProfileCard from './ProfileCard'; // Assuming ProfileCard is in the same directory
import './SGCTeam.css'
import './Animation.css'

const SGCTeam = () => {
    // const teamMembers = [
    //     {
    //         name: 'Prayush Adhikari',
    //         jobTitle: 'Web Developer',
    //         linkedin: 'https://www.linkedin.com/in/prayushadhikari/',
    //         github: 'https://github.com/adhikareeprayush',
    //         email: 'https://dev.to/adhikareeprayush',
    //         imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHrT6zBAnondQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727031609722?e=1732752000&v=beta&t=Gb5bOQ-5aLOsOiMBVmkutmTbLRBZBjZ3XFdccsjZ-B4',
    //     },
    //     // Add more team members here with their respective details
    // ];

    const teamMembers = [
        {
            name: "Sai Yashwant",
            jobTitle: "President",
            id: "",
            phone: "",
            email: "",
            linkedin: "",
            imageUrl: "/Teams/SGC/sai.png"
        },
        {
            name: "Siddharth Singh",
            jobTitle: "Vice President",
            id: "",
            phone: "",
            email: "",
            linkedin: "",
            imageUrl: "/Teams/SGC/siddharth.png"
        },
        {
            name: "Madhur Jain",
            jobTitle: "Cultural Secretary",
            id: "",
            phone: "",
            email: "",
            linkedin: "",
            imageUrl: "/Teams/SGC/madhur.jpeg"
        },
        {
            name: "V. Kethareswaran",
            jobTitle: "Advisor",
            id: "",
            phone: "",
            email: "",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        }
    ];

    return (
        <div className="sgc-team">
            <h2>SGC Members</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="card" key={index}>
                        <div className="layer layer1"></div>
                        <div className="layer layer2"></div>
                        <div className="layer layer3"></div>
                        <div className="imgBx">
                            <img
                                src={member.imageUrl || 'https://via.placeholder.com/300x350'}
                                alt={`${member.name}'s profile`}
                            />
                        </div>
                        <div className="details">
                            <h2>
                                {member.name}
                                <br />
                                <span>{member.jobTitle}</span>
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SGCTeam;