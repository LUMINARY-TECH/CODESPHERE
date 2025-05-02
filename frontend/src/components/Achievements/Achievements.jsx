import React from "react";

import './Achievements.css'

const Achievements =()=>{
    return(
    <div className="achievements">
        <h1>Recent Achievements</h1>
        <div className="achievement-box">
            <div className="achievement">
                <div className="achievement-left">
                    <i className="fas fa-trophy trophy"></i>
                </div>
                <div className="achievement-right">
                    <p>Won August Coding Challenge</p>
                    <h4>3 days ago</h4>
                </div>
            </div>
            <div className="achievement">
                <div className="achievement-left">
                    <i className="fas fa-certificate certificate"></i>
                </div>
                <div className="achievement-right">
                    <p>Earned Senior Developer badge</p>
                    <h4>2 weeks ago</h4>
                </div>
            </div>
        </div>
        <a href="">View All Achievements</a>
    </div>
    );
}
export default Achievements;