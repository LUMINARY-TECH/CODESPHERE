import React from "react";
import FeaturedGroup from "./FeaturedGroup";
import './Featured.css'

const Featured =() =>{
    return (
        <>
        <div className="featured-groups">
            <div className="featured-top">
                <h1>Featured Groups</h1>
                <a href="">See All</a>
            </div>
            <div className="featuredGroups">
                <FeaturedGroup/>
                <FeaturedGroup/>
                <FeaturedGroup/>
                <FeaturedGroup/>
                <FeaturedGroup/>
                <FeaturedGroup/>
            </div>
        </div>
        </>
    );
}
export default Featured