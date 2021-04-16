import React from "react";
import Logo from "./FinalLogo1.png";
import "./navbar.css";

function Navbar(){
    return(
        <div className="nav-bar-container">
            <img src = {Logo} alt="logo"></img>
            <div className="Navitems">
                <a href>Home</a>
                <a href>About</a>
                <a href>Societies</a>
                <a href>Execom</a>
                <a href>Events</a>
                <a href>Achievements</a>
                <a href>Contact</a>
                <a href>Site map</a>

            </div>
            
        </div>
    )
}

export default Navbar;