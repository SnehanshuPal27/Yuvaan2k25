import React from 'react';
import ProfileCard from './ProfileCard'; // Assuming ProfileCard is in the same directory
import './PRTeam.css'

const PRTeam = () => {
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
            name: "MUKUND AGRAWAL",
            jobTitle: "Head",
            id: "2201126",
            phone: "9580256143",
            email: "mukund.agrawal22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "BHEEMUNI HARSHAVARDHAN REDDY",
            jobTitle: "Head",
            id: "2201051",
            phone: "9346584553",
            email: "bheemuni.reddy22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "BHAVISH SAI VISHWAS MELEKOTE",
            jobTitle: "Member",
            id: "2301065",
            phone: "9321432559",
            email: "bhavish.melekote23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "TANISH KASHYAP",
            jobTitle: "Member",
            id: "2301225",
            phone: "8287801885",
            email: "tanish.kashyap23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "HARSHIT SHARMA",
            jobTitle: "Member",
            id: "2301091",
            phone: "6375633056",
            email: "harshit.sharma23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ALAJANGI BHAVYA",
            jobTitle: "Member",
            id: "2301022",
            phone: "9393456809",
            email: "alajangi.bhavya23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "RAHUL YADAV",
            jobTitle: "Member",
            id: "2301168",
            phone: "7849936546",
            email: "rahul.yadav23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "LALIT KUMAR",
            jobTitle: "Member",
            id: "2301120",
            phone: "8630203945",
            email: "lalit.kumar23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "RADHIKA",
            jobTitle: "Member",
            id: "2301167",
            phone: "8708070317",
            email: "radhika23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "PRANITA MAHAJAN",
            jobTitle: "Member",
            id: "2301151",
            phone: "9870460184",
            email: "pranita.mahajan23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "MANIK KUMAR SANGAL",
            jobTitle: "Member",
            id: "2201119",
            phone: "7017272108",
            email: "manik.sangal22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "SHANKARANAND",
            jobTitle: "Member",
            id: "2301194",
            phone: "6203837117",
            email: "shankaranand23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "K.SHREEJA",
            jobTitle: "Member",
            id: "2301102",
            phone: "9866011929",
            email: "k.shreeja23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ADITYA GUPTA",
            jobTitle: "Member",
            id: "2301016",
            phone: "7878034627",
            email: "aditya.gupta23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        }
    ];

    return (
        <div className="pr-team">
            <h2>Public Relations Team</h2>
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

export default PRTeam;