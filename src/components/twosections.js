import React from "react";
import Immage from "../assets/img1.png";
import "./twosections.css";

const twosec = () => {
    return (
        <div className="mainContainer">

            <div className="text">
                <h3>NEW PRODUCT</h3>
                <h1>The Twist of Healthy Yogurt</h1>
                <p>This website template has been designed by <br />
                    <a href="#">Free Website Template</a> <br />
                    for you, for free. You can replace all this text with your own.
                </p>
            </div>

            <div className="sideimg">
                <img src={Immage} width="280" height="300" />
            </div>

        </div>
    )
};

export default twosec;
