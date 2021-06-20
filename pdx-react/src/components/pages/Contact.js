import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"

function Contact() {
    return (
        <>
        <div id="contact-page">
            <img src="./images/pdx_card.jpg" alt="contact a handyman today" />
        <h2>For a free estimate</h2>
            <p><FaIcons.FaPhone/> <a href="tel:+5033510987" className="tel mobile-number">(503) 351-0987</a><span className="desktop-number">(503) 351-0987</span></p>
            <p><MdIcons.MdEmail /> <a href="mailto:pdxhandymanservicesllc@gmail.com" className="email">pdxhandymanservicesllc.com</a></p>
        </div>
        </>
    )
}

export default Contact
