import React from "react";
import '../pages css/Footer.css';

export default function Footer(){
    return(
        <footer style={{marginTop:"25px"}}>
            <div className="wrapper">
                <small>&copy;2022 <strong>Bloc</strong>, All Rights Reserved</small>
                <nav className="footer-nav">
                    <a>Contact Us</a>
                    <a>Terms of Use</a>
                    <a>Privacy</a>
                </nav>
            </div>
        </footer>
    );
}