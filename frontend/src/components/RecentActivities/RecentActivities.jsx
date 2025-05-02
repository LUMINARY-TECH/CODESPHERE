import React from 'react'

import './RecentActivities.css'

const RecentActivities = ()=>{
    return(
        <div className="recent-activity">
            <h1>Recent Activity</h1>
            <div className="activity-box">
                <div className="activity-container">
                    <div className="activity-left">
                        <img src="./images/boy.png" alt=""/>
                    </div>
                    <div className="activity-right">
                        <p><span>Alex Coder</span>Commented on your post <strong>"Building a Real-time Collab Editor"</strong></p>
                        <h4>1 hour ago</h4>
                        <div className="activity-comment">
                            <p>"This is exactly what our team needed! Have you considered open-sourcing the conflict resolution module?"</p>
                        </div>
                    </div>
                </div>
                <div className="activity-container">
                    <div className="activity-left">
                        <img src="./images/bussiness-man.png" alt=""/>
                    </div>
                    <div className="activity-right">
                        <p><span>You</span>upvoted <strong>"Next.js 13 Performance Deep Dive</strong> by<span>Jamie Dev</span></p>
                        <h4>3 hours ago</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RecentActivities;