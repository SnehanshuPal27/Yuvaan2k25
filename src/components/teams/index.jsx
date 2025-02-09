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
              <div className="flipping-card-back event-summary"></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className="flipping-card-front event-management"></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/wcTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div className="flipping-card-back web-summary"></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className="flipping-card-front web-creatives"></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/sponsorTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div className="flipping-card-back sponsor-summary"></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className="flipping-card-front sponsors"></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/prTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div className="flipping-card-back public-summary"></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className="flipping-card-front pr"></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/mediaTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div className="flipping-card-back media-summary"></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className="flipping-card-front media-publicity"></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
        <Link to="/sgcTeam">
          <FlippingCard>
            <FlippingCardBack>
              <div className="flipping-card-back sgc-summary"></div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className="flipping-card-front sgc"></div>
            </FlippingCardFront>
          </FlippingCard>
        </Link>
      </div>
    </div>
  );
}