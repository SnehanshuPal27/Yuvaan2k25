import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
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
import Events from "./components/events/Events.jsx";

function App() {
    // Dynamically fetch the base URL
    const baseURL = import.meta.env.BASE_URL || "";

    useEffect(() => {
        function updateImagePaths() {
            document.querySelectorAll("img").forEach((img) => {
                const currentSrc = img.getAttribute("src");

                // Ensure we update only relative paths and avoid duplicating baseURL
                if (currentSrc && currentSrc.startsWith("/") && !currentSrc.startsWith(baseURL)) {
                    img.setAttribute("src", baseURL + currentSrc);
                }
            });
        }

        updateImagePaths();

        // Observe changes in the DOM for dynamically added images
        const observer = new MutationObserver(updateImagePaths);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [baseURL]); // Dependency added to handle dynamic changes

    return (
        <Router>
            <Navbar refs={{ home: null, teams: null, sgc: null, sponsors: null }} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventTeam" element={<EventManagementTeam />} />
                <Route path="/sponsorTeam" element={<SponsorshipTeam />} />
                <Route path="/mediaTeam" element={<MediaPublicityTeam />} />
                <Route path="/prTeam" element={<PRTeam />} />
                <Route path="/wcTeam" element={<WCTeam />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/teamIndex" element={<TeamIndex />} />
                <Route path="*" element={<Home />} />
                <Route path="/eventIndex" element={<Events />} />
                <Route path="/sgcTeam" element={<SGCTeam />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
