import React from "react";
import { Link } from "react-router-dom";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";

import "./index.css";

export default function TeamIndex() {
  return (
    <div className="bg">
      <div className="team-index">
        <Link to="/eventTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/Event_summary.png)",
                }}
              ></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/EventManagement.png)",
                }}
              ></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/wcTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/Web_summary.png)",
                }}
              ></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/WebCreatives.png)",
                }}
              ></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/sponsorTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/Sponsor_summary.png)",
                }}
              ></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/Sponsors.png)",
                }}
              ></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/prTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/Public_summary.png)",
                }}
              ></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/PR.png)",
                }}
              ></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/mediaTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/Media_summary.png)",
                }}
              ></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/MediaPublicity.png)",
                }}
              ></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/sgcTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/SGC_summary.jpg)",
                }}
              ></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundImage: "url(/SGC.jpeg)",
                }}
              ></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
      </div>
    </div>
  );
}
