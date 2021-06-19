import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import { NavbarData } from './NavbarData'
import { Link } from 'react-router-dom'

function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <header>
            <div id="mobile-nav">
                <div id="front">
                    <div id="title">
                        <Link to="/" className="title-link">
                            <h1>PDX Handyman Services LLC</h1>
                            <h2>Jobs Unlimited: Odd. Even. Any</h2>
                        </Link>                      
                    </div> 
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} className="icon" />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span> {item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    </ul>
                </nav>
                </div>

            <nav id="desktop-nav">
                <div id="title">
                <Link to="/"  className="title-link">
                    <h1>PDX Handyman Services LLC</h1>
                    <h2>Jobs Unlimited: Odd. Even. Any</h2>
                </Link>   
                </div>
                <div id="desktop-links">
                    <Link to="/" className="links">
                        Home
                    </Link>
                    <Link to="/About" className="links" id="spacing">
                        About
                    </Link>
                </div>
                <Link to="/Contact" className="contact-button">
                    Contact
                </Link>
            </nav>
        </header>
        </>
    );
}

export default Header
