import React, { useState } from 'react'
import './Navbar.css'
// import '../../utils/app'

import logo from '../../assets/images/logo.png'
import addImage from '../../assets/images/interface.png'
import profileImage from '../../assets/images/user.png'

const Navbar = () =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleDropDown = (dropdownName) =>{
        setOpenDropdown(openDropdown === dropdownName ? null :dropdownName);
    };
    return(
        <>
        <header>
            <nav>
                <div className="logo">
                    <a href="">
                        <img src={logo} alt=""/>
                        CodeSphere
                    </a>
                </div>
                <div className="middle">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>
                        <a>Explore <i className="fas fa-chevron-down"></i></a>
                        <div className="dropdownmenu menu1">
                            <div className="links">
                                <a href="">Articles</a>
                                <a href="">Tutorials</a>
                                <a href="">Trending</a>
                                <a href="">AI Recs</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a>Community <i className="fas fa-chevron-down"></i></a>
                        <div className="dropdownmenu menu1">
                            <div className="links">
                                <a href="">Q&A Forum</a>
                                <a href="">Live Collab</a>
                                <a href="">Events</a>
                                <a href="">Mentorship</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a>Groups <i className="fas fa-chevron-down"></i></a>
                        <div className="dropdownmenu">
                            <h1>YOUR GROUPS</h1>
                            <hr/>
                            <div className="links">
                                        <a href="">
                                            <img src="./images/java-script.png" alt=""/>
                                            JavaScript Developers
                                        </a>
                                        <a href="">
                                            <img src="./images/python.png" alt=""/>
                                            Pythoniasts
                                        </a>
                                        <a href="">
                                            <img src="./images/artificial-intellegence.png" alt=""/>
                                            AI enthusiasts
                                        </a>
                            </div>
                            <hr/>
                            <h1>DISCOVER</h1>
                            <hr/>
                            <div className="links">
                                <a href="/groupspage">
                                    <img src={logo} alt=""/>
                                    Browse All
                                </a>
                                <a href="">
                                    <img src={addImage} alt=""/>
                                    Create New Group
                                </a>
                            </div>
                        </div>
                    </li>
                    <li><a href="/landingpage">Jobs</a></li>
                </ul>
            </div>
            <div className="search">
                <form action="">
                    <span><i className="fas fa-search"></i></span>
                    <input type="text" placeholder="Search CodeSphere..."/>
                </form>
            </div>
            <div className="navright">
                <ul>
                    <li><a href=""><i className="fas fa-bookmark"></i></a></li>
                    <li><a href="">
                        <i className="fas fa-bell"></i>
                        <span></span>
                    </a></li>
                    <li>
                        <a><i className="fas fa-plus"></i></a>
                        <div className="dropdownmenu menu2">
                            <div className="links">
                                <a href="/newpost">New Post</a>
                                <a href="">Live Session</a>
                                <a href="">Challenge</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a><img src={profileImage} alt=""/></a>
                        <div className="dropdownmenu menu2">
                            <div className="links">
                                <a href="/profile">Your Profile</a>
                                <a href="/settings">Settings</a>
                                <a href="">Monetization</a>
                                <a href="">Sign Out</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="toggle">
            <button className="togglebtn" onClick={toggleSidebar}>
                            <div className={`btnsdiv ${isSidebarOpen ? 'open' : ''}`}>
                                <div className="common span1"></div>
                                <div className="common span2"></div>
                                <div className="common span3"></div>
                            </div>
                        </button>
                    </div>
            </nav>
        </header>

        
        <div className={`sidebar-container ${isSidebarOpen ? 'slide' : ''}`}>
        <div className="sidebarmain">
            <div className="searchdiv">
                <form action="">
                    <span><i className="fas fa-search"></i></span>
                    <input type="text" placeholder="Search CodeSphere..."/>
                </form>
            </div>
            <div className="sidebar-menu">
                <a href="/">
                    <span><i className="fas fa-home mr-3"></i> Home</span>
                </a>
                <div className="group">
                    <a className="droptrigger" onClick={()=>toggleDropDown('explore')}>
                        <span><i className="fas fa-compass mr-3"></i> Explore</span>
                        <i className="fas fa-chevron-down drop"></i>
                    </a>
                    <div className={`groupdrop ${openDropdown === 'explore' ? 'openmenu' : ''}`}>
                        <a href="">Articles</a>
                        <a href="">Tutorials</a>
                        <a href="">Trending</a>
                        <a href="">AI Recs</a>
                    </div>
                </div>
                <div className="group">
                    <a className="droptrigger" onClick={()=>toggleDropDown('community')}>
                        <span><i className="fas fa-users"></i> Community</span>
                        <i className="fas fa-chevron-down drop"></i>
                    </a>
                    <div className={`groupdrop ${openDropdown === 'community' ? 'openmenu' : ''}`}>
                        <a href="">Q&A Forum</a>
                        <a href="">Live Collab</a>
                        <a href="">Events</a>
                        <a href="">Mentorship</a>
                    </div>
                </div>
                <div className="group">
                    <a className="droptrigger" onClick={() =>toggleDropDown('groups')}>
                        <span className="groupdiv"><img src="/images/groups.png" alt=""/>Groups</span>
                        <i className="fas fa-chevron-down drop"></i>
                    </a>
                    <div className={`groupdrop ${openDropdown === 'groups' ? 'openmenu' : ''}`}>
                        <h1>YOUR GROUPS</h1>
                        <a href="">
                            <img src="/images/java-script.png" alt=""/>
                            Javascript Developers
                        </a>
                        <a href="">
                            <img src="/images/python.png" alt=""/>
                            Pythoniasts
                        </a>
                        <a href="">
                            <img src="/images/artificial-intellegence.png" alt=""/>
                            AI enthusiasts
                        </a>
                        <h1>DISCOVER</h1>
                        <a href="/groupspage">
                            <img src={logo} alt=""/>
                            Browse All
                        </a>
                        <a href="">
                            <img src={addImage} alt=""/>
                            Create New
                        </a>
                    </div>
                </div>
                <a href="">
                    <span><i className="fas fa-briefcase"></i>Jobs</span>
                </a>
                <a href="">
                    <span><i className="fas fa-bookmark"></i>Bookmarks</span>
                </a>
                <a href="">
                    <span><i className="fas fa-bell"></i>Notifications</span>
                    <span className="notifications-span"></span>
                </a>
                <div className="group">
                    <a className="droptrigger" onClick={() =>toggleDropDown('create')}>
                        <span><i className="fas fa-plus"></i> Create</span>
                        <i className="fas fa-chevron-down drop"></i>
                    </a>
                    <div className={`groupdrop ${openDropdown === 'create' ? 'openmenu' : ''}`}>
                        <a href="/newpost">New Post</a>
                        <a href="">Live Session</a>
                        <a href="">Challenge</a>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="sidebar-footer">
            <div className="sidebar-profile">
                <div className="prof">
                    <img src={profileImage} alt=""/>
                    <div className="profname">
                        <h2>Sarah Developer</h2>
                        <p>@sarahDev</p>
                    </div>
                </div>
                    <a href="/profile">Your Profile</a>
                    <a href="">Monetization</a>
                    <a href="/settings">Settings</a>
                    <a href="">Sign Out</a>
            </div>
        </div>
    </div>
    </>
    )
}
export default Navbar
