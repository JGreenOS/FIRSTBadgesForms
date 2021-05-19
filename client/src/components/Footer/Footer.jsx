import React from 'react'
import './style.css'
import headerimage from "../Images/headerimage.png";
import { authorize } from 'passport';

function Footer() {
    

    return (
        <>
        <footer className="footer" style={{
        backgroundImage: `url(${headerimage})`,            
            
        }}>

            <a id="button" className="btn" href={`mailto:jsciteach@gmail.com`} target="_">Get Help Via Email</a>
            <a id="button" className="btn" href={"https://badgr.io"}
            target="_">Go to Badgr</a>
            <a id="button" className="btn" href={"https://firstbadges.com"}
            target="_">Go to FIRSTBadges.com</a>
            
        </footer>
        </>
    )
}

export default Footer;
