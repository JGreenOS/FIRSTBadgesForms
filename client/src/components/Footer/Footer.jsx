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

            <a id="button" href={`mailto:jsciteach@gmail.com`}>Email me</a>
            <a id="button" href={"https://badgr.io"}>Go to Badgr</a>
            
        </footer>
        </>
    )
}

export default Footer;
