import React from "react";

import './UserGroup.css'

const UserAdminGroup = () =>{
    return (
        <>
            <div className="group-container">
                    <div className="group-container-top">
                        <div className="group-container-left">
                            <img src="./images/python.png" alt=""/>
                            <h1>Pythoniasts</h1>
                        </div>
                        <div className="group-container-right">
                            <div className="group-admin">Admin</div>
                        </div>
                    </div>
                    <div className="group-container-contents">
                        <p>For python developers of all levels.</p>
                        <div className="group-container-members">
                            <div className="members-container">
                                <div className="member member1">
                                    <img src="./images/user2.png" alt=""/>
                                </div>
                                <div className="member member2">
                                    <img src="./images/user.png" alt=""/>
                                </div>
                                <div className="member member3">
                                    <img src="./images/boy.png" alt=""/>
                                </div>
                                <div className="member member4">+12</div>
                            </div>
                            <div className="group-action">
                                <a href="">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="group-container-stats">
                        <div className="group-stats-left">
                            <i className="fas fa-file-alt"></i> 45 posts today
                        </div>
                        <div className="group-stats-right">
                            <i className="fas fa-users"></i> 27 members
                        </div>
                    </div>
            </div>
        </>
    );
}

export default UserAdminGroup;