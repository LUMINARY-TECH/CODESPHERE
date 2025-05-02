import React from "react";
import Paginators from '../Paginators/Paginators'
import './ProfilePagePosts.css'
const ProfilePagePosts =()=>{
    return(
        <div className="user-profile-contents-container">
            <div className="user-profile-contents-container-top" >
                            <div className="user-menu-links">
                                <div className="user-menu-links-indicator" id="menu-indicator"></div>
                                <a href="#" id="link1">Posts</a>
                                <a href="#" id="link2">Tutorials</a>
                                <a href="#" id="link3">Saved</a>
                                <a href="#" id="link4">Upvoted</a>
                            </div>
                            <hr/>
            </div>
            <div className="user-posts-container">
                            <div className="user-post-box">
                                <div className="user-post-box-contents">
                                    <div className="user-post-box-left">
                                        <img src="./images/user.png" alt=""/>
                                    </div>
                                    <div className="user-post-box-right">
                                        <div className="user-post-box-right-top">
                                            <h1>Sarah Developer</h1>
                                            <p>2 days ago . 8 min read</p>
                                        </div>
                                        <div className="user-post-box-right-content">
                                            <h1>Building a Real-time Collab Editor with React and Websockets</h1>
                                            <p>A deep dive into building a VS Code-like collaborative editor with conflict resolution algorithms...</p>
                                            <img src="./images/banner1.jpg" alt=""/>
                                            <div className="user-post-actions">
                                                <div className="user-post-actions-left">
                                                    <span className="coment">
                                                        <i className="far fa-comment"></i> 24
                                                    </span>
                                                    <span className="like">
                                                        <i className="fas fa-heart"></i> 120
                                                    </span>
                                                </div>
                                                <div className="user-post-actions-right">
                                                    <span>React</span>
                                                    <span>WebSockets</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className="user-post-box">
                                <div className="user-post-box-contents">
                                    <div className="user-post-box-left">
                                        <img src="./images/user.png" alt=""/>
                                    </div>
                                    <div className="user-post-box-right">
                                        <div className="user-post-box-right-top">
                                            <h1>Sarah Developer</h1>
                                            <p>1 week ago . 8 min read</p>
                                        </div>
                                        <div className="user-post-box-right-content">
                                            <h1>AI-Powered Code Reviews:Our Implementation Journey</h1>
                                            <p>How we integrated GPT-4 into our code review workflow to catch bugs before they reach production...</p>
                                            {/* <!-- <img src="/images/banner1.jpg" alt=""> --> */}
                                            <div className="user-post-actions">
                                                <div className="user-post-actions-left">
                                                    <span className="coment">
                                                        <i className="far fa-comment"></i> 18
                                                    </span>
                                                    <span className="like">
                                                        <i className="fas fa-heart"></i> 89
                                                    </span>
                                                </div>
                                                <div className="user-post-actions-right">
                                                    <span>AI</span>
                                                    <span>GitHub</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
            </div>
            <Paginators/>
        </div>
    );
}
export default ProfilePagePosts;