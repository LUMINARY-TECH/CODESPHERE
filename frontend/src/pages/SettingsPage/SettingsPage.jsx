import React from "react";

import AccountSettings from "../../components/AccountSettings/AccountSettings";
import './SettingsPage.css'
const SettingsPage=()=>{
    return(
        <section className="settings">
            <div className="setingscontainer">
                <div className="settings-container-left">
                    <div className="settings-profile-image">
                        <img src="./images/user.png" alt=""/>
                        <h1>John Developer</h1>
                        <p>Pro Member</p>
                    </div>
                    <div className="settings-menu">
                        <a href="#" className="active"><i className="fas fa-user-cog"></i> Account</a>
                        <a href="#"><i className="fas fa-lock"></i> Privacy</a>
                        <a href="#"><i className="fas fa-bell"></i> Notifications</a>
                        <a href="#"><i className="fas fa-robot"></i> AI Preferences</a>
                        <a href="#"><i className="fas fa-dollar-sign"></i> Monetization</a>
                        <a href="#"><i className="fas fa-credit-card"></i> Billing</a>
                    </div>
                </div>
                <div className="settings-container-right">
                    <AccountSettings/>
                </div>
            </div>
        </section>
    );
}
export default SettingsPage;