import React from "react";
import logo from "../assets/logo.png";
import "./header.css";
import { BsShopWindow } from 'react-icons/bs';


const Header = () => {
    return (
        <section className="mainHeader">
            <div className="logo bounceInLeft">
                <img src={logo} width="70" />
            </div>
            <div className="navBar">
                <ul>
                    <li className="home">HOME</li>
                    <li>ABOUT</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                    <li className="li-icon"><h1><BsShopWindow /></h1></li>
                </ul>
            </div>
        </section>
    )
}

export default Header



