import {Link} from "react-router-dom";

export default function TeamIndex(){
    return (
        <div className="team-index">
            Hello from team index.
            <ul className="link-list">
                <li><Link to="/eventTeam">Event Management</Link></li>
                <li><Link to="/prTeam">PCR</Link></li>
                <li><Link to="/sponsorTeam">Sponsor</Link></li>
                <li><Link to="/mediaTeam">M&P</Link></li>
                <li><Link to="/wcTeam">W&C</Link></li>
            </ul>
        </div>
    )
}