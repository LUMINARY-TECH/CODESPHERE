import React from "react";
import './Footer.css'
const Footer = () =>{
    return (
        <footer>
            <div class="footerbox">
                <div class="footercontainer">
                    <div class="footerlinks">
                        <div class="toplink">
                            <img src="./images/logo.png" alt=""/>
                            <h1>CodeSphere</h1>
                        </div>
                        <p>The ultimate platform for developer collaboration and knowledge sharing.</p>
                        <div class="socials">
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-github"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-discord"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="footerlinks">
                        <h1>PRODUCT</h1>
                        <a href="">Features</a>
                        <a href="">Pricing</a>
                        <a href="">API</a>
                        <a href="">Integrations</a>
                    </div>
                    <div class="footerlinks">
                        <h1>RESOURCES</h1>
                        <a href="">Documentation</a>
                        <a href="">Guides</a>
                        <a href="">Blog</a>
                        <a href="">Support</a>
                    </div>
                    <div class="footerlinks">
                        <h1>COMPANY</h1>
                        <a href="">About</a>
                        <a href="">Careers</a>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
                <hr/>
                <div class="footerbottom">
                    <div class="copy">
                        <p>&copy;<span>2025</span>CodeSphere.All rights reserved.</p>
                    </div>
                    <div class="terms">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;