import React from "react";

import './AccountSettings.css'

const AccountSettings =()=>{
    return(
        <>
        <div className="account-settings">
            <div className="settings-top">
                <h2><i className="fas fa-user-cog"></i> Account Settings</h2>
            </div>
            <div className="settings-container">
                <div className="user-details-container">
                                <div className="user-details-div">
                                    <p>UserName</p>
                                    <h2>John Developer</h2>
                                </div>
                                <div className="user-details-div">
                                    <p>@username</p>
                                    <h2>@johndeveloper</h2>
                                </div>
                                <div className="user-details-div">
                                    <p>Phone-Number</p>
                                    <h2>+254707575589</h2>
                                </div>
                                <div className="user-details-div">
                                    <p>Email Address</p>
                                    <h2>johndeveloper@gmail.com</h2>
                                    <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified</span>
                                </div>
                                <div className="user-details-div">
                                    <p>About</p>
                                    <p className="about-user">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid id enim nobis neque sed beatae ea laboriosam expedita provident minus. Tempora, autem commodi dolor doloremque eius quos sapiente non!</p>
                                </div>
                                <div className="user-details-div">
                                    <p>Skills</p>
                                    <ul>
                                        <li>React</li>
                                        <li>Node.js</li>
                                        <li>Python</li>
                                        <li>TensorFlow</li>
                                        <li>GraphQL</li>
                                        <li>Docker</li>
                                    </ul>
                                </div>
                                <div className="user-details-div">
                                    <p>Topics</p>
                                    <ul className="topics">
                                        <li>Full-stack developement</li>
                                        <li>AI enthusiast</li>
                                        <li>Software development</li>
                                        <li>Mobile Apps</li>
                                        <li>MYSQL</li>
                                        <li>PostgrelSql</li>
                                    </ul>
                                </div>
                                <div className="user-details-div">
                                    <p>Location</p>
                                    <h2>SanFransisco</h2>
                                </div>
                                <div className="user-details-div">
                                    <p>Date joined</p>
                                    <h2>June 2024</h2>
                                </div>
                                <div className="user-details-div">
                                    <p>Profile Visibility</p>
                                    <div className="profile-visibility">
                                        <div>
                                            <input type="radio" id="public" name="visibility"/>
                                            <label for="public">Public</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="private" checked name="visibility"/>
                                            <label for="private">Private</label>
                                        </div>
                                    </div>
                                </div>
                </div>
                <hr/>
                <div className="settings-update">
                    <a href="">Update Profile</a>
                </div>
                <hr/>
                <div className="danger">
                    <h3><i className="fas fa-exclamation-triangle"></i> Danger Zone</h3>
                    <div className="dangers-type">
                        <div className="danger-zone">
                            <h2>Deactivate your account temporarily</h2>
                            <a href="" className="deactivate">Deactivate Account</a>
                        </div>
                        <div className="danger-zone">
                            <h2>Permanently delete your account and all data</h2>
                            <a href="" className="delete">Delete Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default AccountSettings;