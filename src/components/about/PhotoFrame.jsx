import React from "react";
import "./Photoframe.css";

const PhotoFrame = () => {
    return (
        <figure>
            <div className="outerBevel">
                <div className="flatSurface">
                    <div className="innerBevel">
                        <img
                            src="/stage1.png"
                            alt="Map of the U.S. during the Civil War"
                            title="The U.S. during the Civil War"
                            width="382"
                            height="326"
                            className="map"
                        />
                    </div>
                </div>
            </div>
        </figure>
    );
};

export default PhotoFrame;
