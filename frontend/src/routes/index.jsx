import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/homepage/Homepage';
import UserGroupsPage from '../pages/UserGroupsPage/UserGroupsPage';
import GroupsPage from '../pages/GroupsPage/GroupsPage';
import LandingPage from '../pages/LandingPage/LandingPage';
import NewPost from '../pages/NewPostPage/NewPost';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import GroupActivities from '../pages/GroupsPage/GroupActivities';
import SettingsPage from '../pages/SettingsPage/SettingsPage';


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/profile" element = {<ProfilePage/>}/>
            <Route path="/landingpage" element = {<LandingPage/>}/>
            <Route path="/newpost" element = {<NewPost/>}/>
            <Route path="/usergroups" element = {<UserGroupsPage/>}/>
            <Route path="/groupspage" element = {<GroupsPage/>}/>
            <Route path="/groupdetails" element = {<GroupActivities/>}/>
            <Route path="/settings" element = {<SettingsPage/>}/>
        </Routes>
    )
}

export default AppRoutes;