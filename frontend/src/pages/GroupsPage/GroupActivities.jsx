import React from "react";
import GroupAdmin from "../../components/Groups/GroupAdmin";
import GroupCreator from "../../components/Groups/GroupCreator";
import RelatedGroups from "../../components/Groups/RelatedGroups";
import Post from "../../components/Post/Post";
import './GroupDetails.css'
// import 'homepage/Homepage.css'

const GroupActivities =()=>{
    
    return(
        <>
        <section className="groupdetailstop">
            <div className="groupdetailstop-container">
                <div className="group-details-top-left">
                    <div className="group-details-top-left-top">
                        <div className="group-details-image">
                            <img src="./images/java.png" alt=""/>
                        </div>
                        <div className="group-name-details">
                            <h1>Java Developers Squad</h1>
                            <p>@javadevssquad</p>
                            <h2>Created November 2024 by <span>Sarah Developer</span></h2>
                            <p className="about">A community for JavaScript developers to share knowledge, ask questions, <br/> and collaborate on projects. All skill levels welcome!</p>
                        </div>
                    </div>
                    <div className="group-details-top-left-stats">
                        <div className="group-details-stat">
                            <h2>Posts<span>1.2K</span></h2>
                        </div>
                        <div className="group-details-stat">
                            <h2>Views<span>34kK</span></h2>
                        </div>
                        <div className="group-details-stat">
                            <h2>Upvotes<span>21.4</span></h2>
                        </div>
                        <div className="group-details-stat">
                            <h2>Members<span>235</span></h2>
                        </div>
                    </div>
                    <div className="group-admins">
                        {/* <GroupCreator/>
                        <GroupAdmin/> */}
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
                        <div className="adminbox">
                            <div className="admin-image">
                                <img src="./images/dev1.jpg" alt=""/>
                            </div>
                            <div className="admin-details-name">
                                <h2>Elisha Kwena</h2>
                                <p className="groupadmin-rank">Admin</p>
                            </div>
                            <div className="admin-details-container">
                                <div className="admin-profile-image">
                                    <div className="admin-profle-pic">
                                        <img src="./images/dev1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="group-admin-details">
                                    <h2>Elisha Kwena</h2>
                                    <p>Mobile App Developer | Full-stack Developer | Block Chain Developer</p>
                                </div>
                                <div className="group-admin-details-stats">
                                    <div className="group-admin-stats">
                                        <span>432</span>
                                        <p>posts</p>
                                    </div>
                                    <div className="group-admin-stats">
                                        <span>3.7k</span>
                                        <p>followers</p>
                                    </div>
                                    <div className="group-admin-stats">
                                        <span>23.9K</span>
                                        <p>Upvotes</p>
                                    </div>
                                    <div className="group-admin-stats">
                                        <span>87</span>
                                        <p>Following</p>
                                    </div>
                                </div>
                                <div className="followup">
                                    <button>Message</button>
                                    <button>Follow</button>
                                </div>
                            </div>
                        </div>
                        <div className="adminbox">
                            <div className="admin-image">
                                <img src="./images/dev2.jpg" alt=""/>
                            </div>
                            <div className="admin-details-name">
                                <h2>Alex Coder</h2>
                                <p className="groupadmin-rank">Admin</p>
                            </div>
                            <div className="admin-details-container">
                                <div className="admin-profile-image">
                                    <div className="admin-profle-pic">
                                        <img src="./images/dev2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="group-admin-details">
                                    <h2>Alex Coder</h2>
                                    <p>Frontend Developer | AI enthusiast | Open source contributor</p>
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
                    </div>

                </div>
                <div className="group-details-top-right">
                <div class="group-details-top-right-any">
                    <div class="group-details-top-right-top">
                        <h2>Related Groups</h2>
                        <div className="related-group-box">
                            {/* <div class="related">
                                <img src="./images/java2.png" alt=""/>
                                <div class="related-details">
                                    <h2>Java Juggernuts</h2>
                                    <p>3.5k Members</p>
                                </div>
                                <a href="">View</a>
                            </div>
                            <div class="related">
                                <img src="./images/c-sharp.png" alt=""/>
                                <div class="related-details">
                                    <h2>C# Developers</h2>
                                    <p>1.27k Members</p>
                                </div>
                                <a href="">View</a>
                            </div>
                            <div class="related">
                                <img src="./images/kotlin.jpeg" alt=""/>
                                <div class="related-details">
                                    <h2>Kotlin Community</h2>
                                    <p>10k Members</p>
                                </div>
                                <a href="">View</a>
                            </div> */}
                            <RelatedGroups/>
                            <RelatedGroups/>
                            <RelatedGroups/>
                            <RelatedGroups/>
                        </div>
                    </div>
                    <div class="group-details-top-right-bottom">
                        <a href="" class="group-post">
                            <i class="fas fa-plus"></i> Create Post
                        </a>
                        <div class="group-settings">
                            <a href="">
                                <i class="fas fa-bell"></i> Notifications
                            </a>
                            <a href=""><i class="fas fa-share-alt"></i> Share</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="group-details-nav-links">
            <div className="group-details-nav-links-top">
                    <div className="group-details-nav-links-indicator" id="menu-indication"></div>
                    <a href="#" id="menu1" className="menu_btns active">Posts</a>
                    <a href="#" id="menu2" className="menu_btns">Members</a>
                    <a href="#" id="menu3" className="menu_btns">Resources</a>
                    <a href="#" id="menu4" className="menu_btns">About</a>
                </div>
                <hr/>
                <div className="group-details-nav-links-bottom">
                    <div className="group-details-nav-links-bottom-left">
                        <img src="./images/mary2.jpg" alt=""/>
                    </div>
                    <div className="group-details-nav-links-bottom-right">
                        <input type="text" placeholder="Create Post..."/>
                        <div className="group-details-nav-links-bottom-type">
                            <button className="">
                                <i className="fas fa-file-alt"></i> Article
                            </button>
                            <button className="">
                                <i className="fas fa-code"></i> Code
                            </button>
                            <button className="">
                                <i className="fas fa-question"></i> Question
                            </button>
                            <button className="">
                                <i className="fas fa-link"></i> Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="group-details-posts">
            <div className="group-details-posts-top">
                <div className="group-details-posts-sort">
                    <button className="sortbtns active">Newest</button>
                    <button className="sortbtns">Top</button>
                    <button className="sortbtns">Hot</button>
                </div>
                <div className="group-details-posts-filter">
                    <button className="">
                        <i className="fas fa-sliders-h "></i> Filters
                    </button>
                </div>
            </div>
            <div className="posts-section-container">
                <Post/>
            </div>
        </section>
        </>
        
    );
}
export default GroupActivities;