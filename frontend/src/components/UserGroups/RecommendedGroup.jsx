import React from "react";

import './RecommendedGroups.css'

const RecommendedGroup = () =>{
    return (
        <div className="recommended-group-box">
            <a href="">
                <div className="recommended-top">
                    <img src="./images/flask.jpeg" alt=""/>
                    Flask Developers
                </div>
                <p>2.4k members</p>
            </a>
        </div>
    );
}

export default RecommendedGroup;