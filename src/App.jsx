// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from "./components/Navbar.jsx";
import EventManagementTeam from "./components/teams/EventManagementTeam.jsx";
import SponsorshipTeam from "./components/teams/SponsorshipTeam.jsx";
import MediaPublicityTeam from "./components/teams/MediaPublicityTeam.jsx";
import PRTeam from "./components/teams/PRTeam.jsx";
import WCTeam from "./components/teams/WCTeam.jsx";
import SGCTeam from "./components/teams/SGCTeam.jsx";
import Footer from "./components/footer/footer.jsx";
import Sponsors from "./components/sponsors/Sponsors.jsx";
import TeamIndex from "./components/teams/index.jsx";
import Events from './components/events/Events.jsx';

function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            <Navbar refs={{ home: null, teams: null, sgc: null, sponsors: null }} />
            {/*<div className="Spaces" style={{paddingTop:'100px'}}></div>*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventTeam" element={<EventManagementTeam />} />
                <Route path="/sponsorTeam" element={<SponsorshipTeam />} />
                <Route path="/mediaTeam" element={<MediaPublicityTeam />} />
                <Route path="/prTeam" element={<PRTeam />} />
                <Route path="/wcTeam" element={<WCTeam />} />
                <Route path="/sponsors" element={<Sponsors/>} />
                <Route path="/teamIndex" element={<TeamIndex />} />
                <Route path="*" element={<Home />} />
                <Route path="/eventIndex" element={<Events />} />
                <Route path="/sgcTeam" element={<SGCTeam />} />

                {/* Add other routes as needed */}
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
