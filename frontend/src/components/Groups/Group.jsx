import React from "react";
import './Group.css'

const Group = () =>{
    return(
        <div className="groupsbox-div">
            <div className="groupsbox-div-top">
                <div className="groupsbox-div-top-left">
                    <img src="/images/react.png" alt=""/>
                    <h2>React Developers</h2>
                </div>
                <div className="groupsbox-div-top-right">
                    <div>24k members</div>
                </div>
            </div>
            <div className="groupsbox-div-contents">
                <p>Discussion and collaboration for React developers of all levels.</p>
                <div className="groupsbox-div-members">
                    <div className="groupsbox-div-members-left">
                        <div className="common-div common-mem1">
                            <img src="./images/user2.png" alt=""/>
                        </div>
                        <div className="common-div common-mem2">
                            <img src="./images/user2.png" alt=""/>
                        </div>
                        <div className="common-div common-mem3">
                            <img src="./images/user2.png" alt=""/>
                        </div>
                        <div className="common-div common-mem4">+221</div>
                    </div>
                    <a href="/groupdetails">View</a>
                </div>
            </div>
            <div className="groupsbox-div-actions">
                <span >
                    <i className="far fa-file-alt "></i> 142 posts/week
                </span>
                <span>
                    Public Group
                </span>
            </div>
        </div>
    );
}
export default Group;