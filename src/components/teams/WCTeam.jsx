import React from 'react';
import ProfileCard from './ProfileCard'; // Assuming ProfileCard is in the same directory
import './WCTeam.css'

const WCTeam = () => {
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
            name: "SNEHANSHU PAL",
            jobTitle: "Head",
            id: "2201196",
            phone: "9068265551",
            email: "snehanshu.pal22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "SOLANKI DHARAK DEEPAK",
            jobTitle: "Head",
            id: "2201197",
            phone: "8238735681",
            email: "solanki.deepak22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "PRITHVI RAJ",
            jobTitle: "Member",
            id: "2301159",
            phone: "9955095089",
            email: "prithvi.raj23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "SACHIN MOHANTY",
            jobTitle: "Member",
            id: "2301180",
            phone: "8787022847",
            email: "sachin.mohanty23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "NITIN MISHRA",
            jobTitle: "Member",
            id: "2301140",
            phone: "8294901410",
            email: "nitin.mishra23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "RISHABH KUMAR JAIN",
            jobTitle: "Member",
            id: "2301175",
            phone: "8920445444",
            email: "rishabh.jain23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "NISHANT PRABHAT",
            jobTitle: "Member",
            id: "2301138",
            phone: "8179642563",
            email: "nishant.prabhat23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "RATNA JAISWAL",
            jobTitle: "Member",
            id: "2301173",
            phone: "9555055862",
            email: "ratna.jaiswal23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ARYAN KUMAR",
            jobTitle: "Member",
            id: "2201037",
            phone: "7890010105",
            email: "aryan.kumar22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "GUDE SAI DHEERAN CHOWDARY",
            jobTitle: "Member",
            id: "2201079",
            phone: "9032863059",
            email: "gude.chowdary22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ANMOL KUSHWAHA",
            jobTitle: "Member",
            id: "2301035",
            phone: "7080502411",
            email: "anmol.kushwaha23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        }
    ];

    return (
        <div className="wc-team">
            <h2>Web & Creatives Team</h2>
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

export default WCTeam;