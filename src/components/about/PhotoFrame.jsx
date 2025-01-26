import "./Photoframe.css";

const PhotoFrame = () => {
    return (
        <figure>
            <div className="outerBevel">
                <div className="flatSurface">
                    <div className="innerBevel">
                        <img
                            alt="img"
                            src="/stage1.png"
                            title="The U.S. during the Civil War"
                            className="map"
                        />
                    </div>
                </div>
            </div>
        </figure>
    );
};

export default PhotoFrame;
