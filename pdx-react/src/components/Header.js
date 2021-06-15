import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
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
                        <h1>PDX Handyman Services LLC</h1>
                        <h2>Jobs Unlimited: Odd. Even. Any</h2>                      
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
            <Link to="/" className="links">
                    Home
                </Link>
            </nav>
        </header>
        </>
    );
}

export default Header
