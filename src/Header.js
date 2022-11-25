import React from "react";
import logo from './logo.svg';

export default function Header() {

    return (
        <header className="header">
            <div className="header--container">
                <img src={logo} alt="logo" 
                className="header--image"/>
                <h2 className="header--title">Meme Generator</h2>
            </div>
                
            <h3 className="header--project">AG React project</h3>
        </header>
    )
}