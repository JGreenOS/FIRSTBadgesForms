import React from 'react'
import './style.css'
import headerimage from "../Images/headerimage.png";



function Footer() {
    return (
        <>
        <footer style={{

            height:"500px",
            backgroundSize:"auto",
            backgroundRepeat: "no-repeat",
            backgroundColor:"lightGray",
            backgroundImage: `url(${headerimage})` 
            
        }}>

            <button mailto='jsciteach@gmail.com'> Ask a Question</button>
            <button link="https://badgr.io">Go to Badgr</button>
            
        </footer>
        </>
    )
}

export default Footer;
