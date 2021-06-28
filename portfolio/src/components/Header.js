import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Katie Devinney</h1>
        <ul>
            <li><a href="#about-me">About</a></li>
            <li><a href="#projects">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="./images/ks-devinney-resume.pdf" target="_blank">Resume</a></li>
        </ul>
        </header>
    )
}

export default Header
