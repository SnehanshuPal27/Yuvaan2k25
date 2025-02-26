import React from 'react';
import ProfileCard from './ProfileCard'; // Assuming ProfileCard is in the same directory
import './EventManagementTeam.css'
import './Animation.css'

const EventManagementTeam = () => {
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
            name: "Shubhashish Shukla",
            jobTitle: "Head",
            id: "2301213",
            phone: "6307542454",
            email: "shubhashish.shukla23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Vanshika Gupta",
            jobTitle: "Head",
            id: "2301242",
            phone: "7408102130",
            email: "vanshika.gupta23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/Teams/Event/VANSHIKA GUPTA.jpg"
        },
        {
            name: "Thamas Prakash Gaykawad",
            jobTitle: "Member",
            id: "2301229",
            phone: "",
            email: "thamas.gaykawad23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/Teams/Event/THAMAS GAYKAWAD.jpg"
        },
        {
            name: "Samadrita Mondal",
            jobTitle: "Member",
            id: "2301185",
            phone: "7001805007",
            email: "samadrita.mondal23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/Teams/Event/SAMADRITA MONDAL.jpg"
        },
        {
            name: "Prakshay Saini",
            jobTitle: "Member",
            id: "2301149",
            phone: "9034480145",
            email: "prakshay.saini23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Aarohee Sharma",
            jobTitle: "Member",
            id: "2301003",
            phone: "9024377640",
            email: "aarohee.sharma23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Rishabh Singh Tomar",
            jobTitle: "Member",
            id: "2301176",
            phone: "9516663485",
            email: "rishabh.tomar23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Tadikonda Lohith Aditya",
            jobTitle: "Member",
            id: "2301223",
            phone: "7032323720",
            email: "tadikonda.aditya23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Seeram Karthikeya",
            jobTitle: "Member",
            id: "2301191",
            phone: "8978327879",
            email: "seeram.karthikeya23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/Teams/Event/SEERAM KARTHIKEYA.jpeg"
        },
        {
            name: "Mohit Kumawat",
            jobTitle: "Member",
            id: "2301130",
            phone: "9468844484",
            email: "mohit.kumawat23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Shubh Tiwari",
            jobTitle: "Member",
            id: "2301210",
            phone: "9528015193",
            email: "shubh.tiwari23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Ananya Anurag Lenka",
            jobTitle: "Member",
            id: "2301026",
            phone: "9437089199",
            email: "ananya.lenka23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/Teams/Event/ANANYA LENKA.jpg"
        },
        {
            name: "Katrovath Ramu Naik",
            jobTitle: "Member",
            id: "2301110",
            phone: "9492659298",
            email: "katrovath.naik23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Samridhi Tiwari",
            jobTitle: "Member",
            id: "2301186",
            phone: "7275720024",
            email: "samridhi.tiwari23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Eadara Lasya",
            jobTitle: "Member",
            id: "2301080",
            phone: "9704653622",
            email: "eadara.raghav23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/Teams/Event/EADARA RAGHAVI.jpg"
        },
        {
            name: "Agnidipto Banik",
            jobTitle: "Member",
            id: "2301020",
            phone: "7998668533",
            email: "agnidipto.banik23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/card-pic.jpg"
        },
        {
            name: "Shubham Kumar",
            jobTitle: "Member",
            id: "2301212",
            phone: "9065582052",
            email: "shubham.kumar23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: "./public/Teams/Event/SHUBHAM KUMAR.jpg"
        }
    ];

    return (
        <div className="event-management-team">
            <h2>Event Management Team</h2>
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

export default EventManagementTeam;