import React from "react";

import './Post.css'

const Post = () =>{
    return(
        <div className="posts-container">
            <div className="posts-container-top">
                <a href="">
                    <img src="./images/user.png" alt=""/>
                    <div className="post-owner">
                        <h2>Sarah Developer</h2>
                        <p>3 days ago</p>
                    </div>
                </a>
            </div>
            <div className="postscontent">
                <a href="">
                    <h2>Building a Real-time Collab Editor</h2>
                    <img src="./images/banner1.jpg" alt=""/>
                    <p>How we built a VS Code-like collaborative editor with conflict resolution algorithms...</p>
                </a>
            </div>
            <div className="posts-actions">
                <div className="actionsleft">
                    <img src="./images/react.png" alt=""/>
                    <span>React</span>
                </div>
                <div className="actionsright">
                    <span>
                        <i className="far fa-comment"></i> 18
                    </span>
                    <span>
                        <i className="fas fa-heart"></i> 89
                    </span>
                </div>
            </div>
        </div>    
    );
}

export default Post