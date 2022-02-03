import React from "react";
import "./footer.css";
import { BsFillCartFill } from "react-icons/bs";


const footer2 = () => {
    return(
        <div className="f2">
            
            <div className="ficon">
            <h4><BsFillCartFill/></h4>
            </div>

            <div className="ftext">
                <h2>SHOP NOW</h2>
            </div>
              

        </div>
    )
};

export default footer2;
