import React from "react";
import Group from "../../components/Groups/Group";
import Paginators from "../../components/Paginators/Paginators";

import './GroupsPage.css'
const GroupsPage =() =>{
    return (
        <section className="groupsboxsection">
            <div className="groupsbox-top">
                <div className="groupsbox-top-left">
                    <h1>Explore Groups</h1>
                    <p>Connect with communities in your tech stack</p>
                </div>
                <a href="">
                    <i className="fas fa-plus"></i>Create Group
                </a>
            </div>
            <div className="groupsbox-middle">
                <div className="groupsbox-middle-top">
                    <form action="">
                        <span><i className="fas fa-search"></i></span>
                        <input type="text" placeholder="Search Groups..."/>
                    </form>
                    <select name="" id="">
                        <option value="">All Categories</option>
                        <option value="">Programming Languages</option>
                        <option value="">Frameworks</option>
                        <option value="">DevOps</option>
                        <option value="">AI/ML</option>
                        <option value="">Security</option>
                        <option value="">Career</option>
                    </select>
                </div>
                <div className="groupsbox-middle-bottom">
                    <button>
                        All Groups
                    </button>
                    <button className="react">
                        <i className="fab fa-react"></i> React
                    </button>
                    <button className="python">
                        <i className="fab fa-python"></i> Python
                    </button>
                    <button className="artificial">
                        <i className="fas fa-robot"></i> AI
                    </button>
                    <button className="devops">
                        <i className="fas fa-server"></i> DevOps
                    </button>
                    <button className="security">
                        <i className="fas fa-lock "></i> Security
                    </button>
                </div>
            </div>
            <div className="groupsbox-container">
                <Group/>
                <Group/>
                <Group/>
                <Group/>
                <Group/>
            </div>
            <Paginators/>
        </section>
    );
}

export default GroupsPage;