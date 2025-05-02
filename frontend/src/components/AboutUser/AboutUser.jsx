import React from "react";


import './AboutUser.css'
const AboutUser =()=>{
    return (
        <>
        <div className="user-profile-about">
            <h1>About</h1>
            <p>JavaScript/TypeScript expert with 7+ years experience building scalable web applications. Passionate about React, Node.js, and machine learning.</p>
            <div className="user-skills">
                <h2>Skills</h2>
                <div className="skills-box">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>TensorFlow</span>
                    <span>GraphQL</span>
                    <span>Docker</span>
                </div>
            </div>
            <div className="user-skills">
                <h2>Links</h2>
                <div className="user-socials">
                    <a href="#">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="#">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
export default AboutUser;