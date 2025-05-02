import React from "react";
import '../Navbar/Navbar.css'
import logo from '../../assets/images/logo.png'
const LandingNavbar =()=>{
    return(
        <header class="landhead">
        <nav class="landnav">
            <div class="navleft">
                <div class="logo">
                    <a href="">
                        <img src={logo} alt=""/>
                        CodeSphere
                    </a>
                </div>
                <div class="middle">
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Communities</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Docs</a></li>
                    </ul>
                </div>
            </div>
            <div class="navright rightnav">
                <a href="" class="sign">Sign In</a>
                <a href="" class="cta">Get Started</a>
            </div>
            <div class="toggle">
                <button class="togglebtn">
                    <div class="btnsdiv">
                        <div class="common span1"></div>
                        <div class="common span2"></div>
                        <div class="common span3"></div>
                    </div>
                </button>
            </div>
        </nav>
    </header>
    );
}
export default LandingNavbar;