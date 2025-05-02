import React from "react";
import './GroupAdmins.css'

const GroupCreator = ()=>{
    return(
        <div className="adminbox">
            <div className="admin-image">
                <img src="./images/mary2.jpg" alt=""/>
            </div>
            <div className="admin-details-name">
                <h2>Sarah Developer</h2>
                <p className="groupowner-rank">Group creator</p>
            </div>
            <div className="admin-details-container">
                <div className="admin-profile-image">
                    <div className="admin-profle-pic">
                        <img src="./images/mary2.jpg" alt=""/>
                    </div>
                </div>
                <div className="group-admin-details">
                    <h2>Sarah Developer</h2>
                    <p>Software Developer | Backend developer | AI enthusiast | Open source contributor</p>
                </div>
                <div className="group-admin-details-stats">
                    <div className="group-admin-stats">
                        <span>123</span>
                        <p>posts</p>
                    </div>
                    <div className="group-admin-stats">
                        <span>1.7k</span>
                        <p>followers</p>
                    </div>
                    <div className="group-admin-stats">
                        <span>1.29K</span>
                        <p>Upvotes</p>
                    </div>
                    <div className="group-admin-stats">
                        <span>134</span>
                        <p>Following</p>
                    </div>
                </div>
                <div className="followup">
                    <button>Message</button>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    );
}
export default GroupCreator;