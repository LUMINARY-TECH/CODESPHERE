import React from "react";
import './UserGroup.css'
const UserGroupOwner = () =>{
    return (
        <>
            <div className="group-container">
                    <div className="group-container-top">
                        <div className="group-container-left">
                            <img src="./images/java-script.png" alt=""/>
                            <h1>JavaScript Developers</h1>
                        </div>
                        <div className="group-container-right">
                            <div className="group-owner">Owner</div>
                        </div>
                    </div>
                    <div className="group-container-contents">
                        <p>Discussion and collaboration for JS developers</p>
                        <div className="group-container-members">
                            <div className="members-container">
                                <div className="member member1">
                                    <img src="./images/man (2).png" alt=""/>
                                </div>
                                <div className="member member2">
                                    <img src="./images/man (2).png" alt=""/>
                                </div>
                                <div className="member member3">
                                    <img src="./images/man (2).png" alt=""/>
                                </div>
                                <div className="member member4">+24</div>
                            </div>
                            <div className="group-action">
                                <a href="">Manage</a>
                            </div>
                        </div>
                    </div>
                    <div className="group-container-stats">
                        <div className="group-stats-left">
                            <i className="fas fa-file-alt"></i> 12 posts this week
                        </div>
                        <div className="group-stats-right">
                            <i className="fas fa-users"></i> 27 members
                        </div>
                    </div>
            </div>
        </>
    );
}

export default UserGroupOwner;