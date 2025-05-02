import React from "react";

import AboutUser from "../../components/AboutUser/AboutUser";
import Mentorship from "../../components/Mentorship/Mentorship";
import Achievements from "../../components/Achievements/Achievements";
import RecentActivities from "../../components/RecentActivities/RecentActivities";
import ProfilePagePosts from "../../components/Post/ProfilePagePosts";

import './ProfilePage.css'



const ProfilePage = () =>{
    return(
       <>
        <section classNameName="userprofile-container">
            <div className="userprofile-top">
                <div className="user-top">
                    <div className="user-top-left">
                        <div className="user-profile-image">
                            <img src="/images/user.png" alt=""/>
                            <span></span>
                        </div>
                        <div className="user-profile-details">
                            <h1>Sarah Developer</h1>
                            <h4>@sarahcodes</h4>
                            <p>Full-stack developer | AI enthusiast | Open source contributor | Building the future one commit at a time</p>
                            <div className="user-data">
                                <div className="data-user">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>San Francisco, CA</span>
                                </div>
                                <div className="data-user">
                                    <i className="fas fa-briefcase"></i>
                                    <span>Senior Developer @TechCorp</span>
                                </div>
                                <div className="data-user">
                                    <i className="fas fa-calendar-alt"></i>
                                    <span>Joined June 2018</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-top-right">
                        <div className="user-count">
                            <h2>1.2K</h2>
                            <p>FOLLOWERS</p>
                        </div>
                        <div className="user-count">
                            <h2>348</h2>
                            <p>FOLLOWING</p>
                        </div>
                        <div className="user-count">
                            <h2>87</h2>
                            <p>POSTS</p>
                        </div>
                    </div>
                </div>
                <div className="user-bottom">
                    <div className="user-badges">
                        <span className="blue-stat">
                            <i className="fas fa-medal"></i> Top Contributor
                        </span>
                        <span className="yellow-stat">
                            <i className="fas fa-star"></i> Mentor
                        </span>
                        <span className="purple-stat">
                            <i className="fas fa-bolt"></i> Fast Responder
                        </span>
                    </div>
                    <div className="edit-user">
                        <a href="/usergroups.html">
                            <img src="./images/mygroups.png" alt=""/>
                            My Groups
                        </a>
                        <a href="">
                            <img src="./images/edit.png" alt=""/>Edit you Profile
                        </a>
                    </div>
                </div>
            </div>
            <div className="userprofile-box">
                <div className="userprofile-box-left">
                    <AboutUser/>
                    <Mentorship/>
                    <Achievements/>
                </div>
                <div className="userprofile-box-middle">
                    <ProfilePagePosts/>
                </div>
                <div className="userprofile-box-right">
                    <RecentActivities/>
                </div>
            </div>
        </section>
       </> 
    );
}
export default ProfilePage;