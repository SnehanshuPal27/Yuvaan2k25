import React from 'react';
import ProfileCard from './ProfileCard'; // Assuming ProfileCard is in the same directory
import './SponsorshipTeam.css'

const SponsorshipTeam = () => {
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
            name: "VALLURI VISWA MARUTI SRIRAMA DINAKA",
            jobTitle: "Head",
            id: "2201223",
            phone: "9493466656",
            email: "valluri.dinakar22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "HARSH MISHRA",
            jobTitle: "Head",
            id: "2301087",
            phone: "8176061358",
            email: "harsh.mishra23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "HARSHITA GUPTA",
            jobTitle: "Member",
            id: "2301092",
            phone: "9461817644",
            email: "harshita.gupta23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "MALLENA VARDHAN",
            jobTitle: "Member",
            id: "2301123",
            phone: "9476062388",
            email: "mallena.vardhan23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ABHIRAJ TOMAR",
            jobTitle: "Member",
            id: "2301010",
            phone: "9205454265",
            email: "abhiraj.tomar23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "DEEPANSHU SINGH",
            jobTitle: "Member",
            id: "2301073",
            phone: "9313414870",
            email: "deepanshu.singh23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ANUPAM TRIPATHI",
            jobTitle: "Member",
            id: "2301038",
            phone: "9140922245",
            email: "anupam.tripathi23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "HARSHIT JAIN",
            jobTitle: "Member",
            id: "2301090",
            phone: "9445040562",
            email: "harshit.jain23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "KUNAL PUROHIT",
            jobTitle: "Member",
            id: "2301118",
            phone: "7009512702",
            email: "kunal.purohit23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "HRISHI SHEKHAR",
            jobTitle: "Member",
            id: "2301097",
            phone: "9359019084",
            email: "hrishi.shekhar23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "ARYAN PANDEY",
            jobTitle: "Member",
            id: "2301051",
            phone: "9244369133",
            email: "aryan.pandey23b@gmail.com",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "SAHIL BARMAN",
            jobTitle: "Member",
            id: "2201172",
            phone: "8929890960",
            email: "sahil.barman22b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "TUHIN ROY",
            jobTitle: "Member",
            id: "2301233",
            phone: "8258892047",
            email: "tuhin.roy23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "VALLURI JAYA VENKATA SREE VARDHAN",
            jobTitle: "Member",
            id: "2301240",
            phone: "6300949377",
            email: "valluri.vardhan23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "SHREYA SARNAGAR",
            jobTitle: "Member",
            id: "2301208",
            phone: "9555631688",
            email: "shreya.sarnagar23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "DIVY SANTOSH SAKHALA",
            jobTitle: "Member",
            id: "2301079",
            phone: "8856805726",
            email: "divy.sakhala23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "KARRI MOHITH BHANU",
            jobTitle: "Member",
            id: "2301105",
            phone: "7207944504",
            email: "karri.bhanu23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        },
        {
            name: "VAIBHAV",
            jobTitle: "Member",
            id: "2301238",
            phone: "9122719666",
            email: "vaibhav23b@iiitg.ac.in",
            linkedin: "",
            imageUrl: ""
        }
    ];

    return (
        <div className="sponsorship-team">
            <h2>Sponsorship Team</h2>
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

export default SponsorshipTeam;