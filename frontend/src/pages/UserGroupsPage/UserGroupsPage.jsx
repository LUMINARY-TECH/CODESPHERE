import React from "react";
import UserAdminGroup from "../../components/UserGroups/UserAdminGroup";
import UserGroupMember from "../../components/UserGroups/UserGroupMember";
import UserGroupOwner from "../../components/UserGroups/UserGroupOwner";
import RecommendedGroup from "../../components/UserGroups/RecommendedGroup";


import './UserGroupsPage.css'

const UserGroupsPage = () =>{
    return (
        <>
            <section className="user-groups">
                <div className="usergroups-top">
                    <h1>Your Groups</h1>
                    <a href="">
                        <i className="fas fa-plus mr-2"></i>Create Group
                    </a>
                </div>
                <div className="groups-box">
                    <UserAdminGroup/>
                    <UserGroupMember/>
                    <UserGroupOwner/>
                </div>
                <div className="recommended-groups">
                    <h2>Recommnded Groups</h2>
                    <div className="recommended-groups-container">
                        <RecommendedGroup/>
                        <RecommendedGroup/>
                        <RecommendedGroup/>
                        <RecommendedGroup/>
                        <RecommendedGroup/>
                        <RecommendedGroup/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserGroupsPage;