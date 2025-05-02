import React from "react";

import './UserGroup.css'
const UserGroupMember = () =>{
    return (
        <>
            <div className="group-container">
                    <div className="group-container-top">
                        <div className="group-container-left">
                            <img src="./images/artificial-intellegence.png" alt=""/>
                            <h1>AI Enthusiasts</h1>
                        </div>
                        <div className="group-container-right">
                            <div className="group-mem">Member</div>
                        </div>
                    </div>
                    <div className="group-container-contents">
                        <p>Exploring machine learning and AI technologies.</p>
                        <div className="group-container-members">
                            <div className="members-container">
                                <div className="member member1">
                                    <img src="./images/woman.png" alt=""/>
                                </div>
                                <div className="member member2">
                                    <img src="./images/bussiness-man.png" alt=""/>
                                </div>
                                <div className="member member3">
                                    <img src="./images/man.png" alt=""/>
                                </div>
                                <div className="member member4">+11</div>
                            </div>
                            <div className="group-action">
                                <a href="">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="group-container-stats">
                        <div className="group-stats-left">
                            <i className="fas fa-file-alt"></i> 34 posts this week
                        </div>
                        <div className="group-stats-right">
                            <i className="fas fa-users"></i> 872 members
                        </div>
                    </div>
            </div>
        </>
    );
}

export default UserGroupMember;