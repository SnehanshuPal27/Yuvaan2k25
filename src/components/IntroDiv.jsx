import React, { useEffect, useState } from "react";
import "./IntroDiv.css";

export default function IntroDiv() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="intro-div">
            <div className="top-content">
                {/* <p
                    className="presenter"
                >
                    YUVAAN
                </p> */}

                <img className="main-logo-img" src="/yuvaan_iconL.png"></img>

                <div className="intro-bottom">
                    <p className="head-caption">A TALE OF TIME</p>
                </div>
                {/*<p className="lower-caption">A tale of time</p>*/}
            </div>
        </div>
    );
}
