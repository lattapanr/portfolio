import React from "react";
import Img1 from "../assets/image1.jpg";
import Img2 from "../assets/image2.jpg";
import Img3 from "../assets/image3.jpg";
import Img4 from "../assets/image4.jpg";

const Work = () => {
    return (
        <div className="w-[80%] h-screen mx-auto">
            <h3 className="uppercase">Featured Projects</h3>

            <div>
                <img src={Img1} alt="project" className="" />
            </div>
            <div>
                <img src={Img2} alt="project" className="" />
            </div>
            <div>
                <img src={Img3} alt="project" className="" />
            </div>
            <div>
                <img src={Img4} alt="project" className="" />
            </div>
        </div>
    );
};

export default Work;
