import React from 'react';
import Post from '../../components/Post/Post'
import Featured from '../../components/FeaturedGroups/Featured'
import './Homepage.css'
const Homepage = () =>{
    return (
        <>
        <Featured/>
        <section className="posts-section">
            <div className="posts-section-top">
                <h1>Recent Posts</h1>
                <div className="posts-filter">
                    <button>
                        <i className="fas fa-sliders-h"></i> Filters
                    </button>
                    <button>
                        <i className="fas fa-sort-amount-down"></i> Sort
                    </button>
                </div>
            </div>
            <div className="posts-section-container">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </section>
        </>
    );
}

export default Homepage