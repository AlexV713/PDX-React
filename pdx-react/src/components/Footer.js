import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"

function Footer() {
    return (
        <>
        <footer>
            <h2>PDX Handyman Services LLC</h2>
            <h3>Jobs Unlimited: Odd. Even. Any</h3>
            <p>Home owners across all Oregon have been calling for my services for over 30 years!</p>
            <h2>Quick Links</h2>
            <br/>
            <nav id="footer-links">
                <ul>
                    <li>
                        <Link to="/" className="links">
                        <AiIcons.AiFillHome /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" className="links">
                        <IoIcons.IoIosPaper /> About
                        </Link>
                    </li>                    
                    <li>
                        <Link to="/Contact" className="links">
                        <FaIcons.FaPhone/> Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <h2>For a free estimate</h2>
            <br/>
            <p><FaIcons.FaPhone/> <a href="tel:+5033510987" className="tel">(503) 351-0987</a></p>
            <p><MdIcons.MdEmail /> <a href="mailto:pdxhandymanservicesllc@gmail.com" className="email">pdxhandymanservicesllc.com</a></p>
            <p className="copyright">Copyright @ PDX Handyman Services LLC <br/> Website created by <a href="http://alejandrovalerio.com/" target="_blank" rel="noreferrer" className="creator">Alejandro Valerio</a></p>
        </footer>
        </>
    )
}

export default Footer
