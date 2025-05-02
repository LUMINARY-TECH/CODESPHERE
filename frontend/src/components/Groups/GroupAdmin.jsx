import React from "react";
import './GroupAdmins.css'

const GroupAdmin = ()=>{
    return(
        <div className="adminbox">
            <div className="admin-image">
                <img src="./images/mary3.jpg" alt=""/>
            </div>
            <div className="admin-details-name">
                <h2>Mary Ngira</h2>
                <p className="groupadmin-rank">Admin</p>
            </div>
            <div className="admin-details-container">
                <div className="admin-profile-image">
                    <div className="admin-profle-pic">
                        <img src="./images/mary3.jpg" alt=""/>
                    </div>
                </div>
                <div className="group-admin-details">
                    <h2>Mary Ngira</h2>
                    <p>Full-stack developer | AI enthusiast | Open source contributor</p>
                </div>
                <div className="group-admin-details-stats">
                    <div className="group-admin-stats">
                        <span>245</span>
                        <p>posts</p>
                    </div>
                    <div className="group-admin-stats">
                        <span>2.56k</span>
                        <p>followers</p>
                    </div>
                    <div className="group-admin-stats">
                        <span>3.7K</span>
                        <p>Upvotes</p>
                    </div>
                    <div className="group-admin-stats">
                        <span>126</span>
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
export default GroupAdmin;