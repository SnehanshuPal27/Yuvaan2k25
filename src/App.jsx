// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home2.jsx';
import Navbar from "./components/Navbar.jsx";
import EventManagementTeam from "./components/teams/EventManagementTeam.jsx";
import SponsorshipTeam from "./components/teams/SponsorshipTeam.jsx";
import MediaPublicityTeam from "./components/teams/MediaPublicityTeam.jsx";
import PRTeam from "./components/teams/PRTeam.jsx";
import WCTeam from "./components/teams/WCTeam.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            {/*<div className="Spaces" style={{paddingTop:'100px'}}></div>*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventTeam" element={<EventManagementTeam />} />
                <Route path="/sponsorTeam" element={<SponsorshipTeam />} />
                <Route path="/mediaTeam" element={<MediaPublicityTeam />} />
                <Route path="/prTeam" element={<PRTeam />} />
                <Route path="/wcTeam" element={<WCTeam />} />
                <Route path="*" element={<Home />} />


                {/* Add other routes as needed */}
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
