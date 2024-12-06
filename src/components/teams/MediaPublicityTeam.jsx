import React from 'react';
import ProfileCard from './ProfileCard'; // Assuming ProfileCard is in the same directory
import './MediaPublicityTeam.css'

const MediaPublicityTeam = () => {
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
            name: "PRANAY SIWACH",
            jobTitle: "Head",
            id: "2301150",
            phone: "9997946767",
            email: "pranay.siwach23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "IPSHITA RANJAN",
            jobTitle: "Head",
            id: "2301098",
            phone: "9913870560",
            email: "ipshita.ranjan23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "TALABATTULA ADARSH",
            jobTitle: "Member",
            id: "2301224",
            phone: "9515203945",
            email: "talabattula.adarsh23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "PRAFUL PRAKASH GOEL",
            jobTitle: "Member",
            id: "2301148",
            phone: "6398633391",
            email: "praful.goel23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "GUTHIKONDA SREE PRANEETH",
            jobTitle: "Member",
            id: "2301085",
            phone: "739664129",
            email: "guthikonda.praneeth23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "SHUBHAM KANOJIYA",
            jobTitle: "Member",
            id: "2301211",
            phone: "7748835392",
            email: "shubham.kanojiya23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "KAVITA YADAV",
            jobTitle: "Member",
            id: "2301111",
            phone: "7398865618",
            email: "kavita.yadav23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "GAUTAM GIRI",
            jobTitle: "Member",
            id: "2301082",
            phone: "7068140938",
            email: "gautam.giri23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "YASH SHARMA",
            jobTitle: "Member",
            id: "2301249",
            phone: "9244275526",
            email: "yash.sharma23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ADARSH KUMAR",
            jobTitle: "Member",
            id: "2301013",
            phone: "9955960418",
            email: "adarsh.kumar23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "PRIYA DEORI",
            jobTitle: "Member",
            id: "2301160",
            phone: "7002036165",
            email: "priya.deori23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "THAMAS PRAKASH GAYKAWAD",
            jobTitle: "Member",
            id: "2301229",
            phone: "7898187813",
            email: "thamas.gaykawad23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        }
    ];

    return (
        <div className="media-team">
            <h2>Media & Publicity Team</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <ProfileCard
                        key={index}
                        name={member.name}
                        jobTitle={member.jobTitle}
                        linkedin={member.linkedin}
                        // github={member.github}
                        email={member.email}
                        image={member.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default MediaPublicityTeam;