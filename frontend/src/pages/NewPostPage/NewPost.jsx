import React from 'react'

import './NewPost.css'

const NewPost = () =>{
    const imageDisplay = document.getElementById('selected-image');
        function loadUserImage(){
            document.getElementById('post-image').onchange = (event) =>{
                const file = event.target.files[0];
                if(file && file.type.startsWith('image/')){
                    const reader = new FileReader();
                    reader.onload = function(e){
                        
                        imageDisplay.src = e.target.result;
                        imageDisplay.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }else{
                    imageDisplay.style.display='none';
                    imageDisplay.src='#';
                }

            }
        }
    return(
        <>
         <section className="new-post">
            <div className="newpost-container">
                <div className="new-post-top">
                    <h1>Create New Post</h1>
                    <a href="">
                        <i className="fas fa-question-circle"></i>Help
                    </a>
                </div>
                <div className="new-post-body">
                    <form action="">
                        {/* {<!-- post title -->} */}
                        <div className="new-post-input-container">
                            <label for="title">Title</label><br/>
                            <input type="text" id="title" placeholder="What's your post about?"/>
                        </div>

                        {/* <!-- group selection --> */}
                        <div className="new-post-input-container">
                            <label for="group-select">Post to Group(Optional)</label><br/>
                            <select name="" id="group-select">
                                <option value="">Select a group...</option>
                                <option value="javascript">JavaScript Developers</option>
                                <option value="react">React Enthusiasts</option>
                                <option value="python">Pythonistas</option>
                                <option value="ai">AI Enthusiasts</option>
                            </select>
                            <div className="tagscontainer" id="selected-groups">

                            </div>
                        </div>
                        {/* <!-- post banner --> */}
                        <div className="new-post-input-container">
                            <label>Post banner</label>
                            <div className="banner-box">
                                <label for="post-image" className="bannerlabel" onclick="loadUserImage()">
                                    <img src="./images/camera.png" alt="" />
                                </label><br/>
                                <input type="file" id="post-image"/>
                                <img className="user-banner" src="" id="selected-image"/>
                            </div>
                        </div>
                        {/* <!-- Post content --> */}
                         <div className="new-post-input-container">
                            <label for="content">Content</label><br/>
                            <textarea name="" id="content" placeholder="Start writing your post here..."></textarea>
                         </div>
                        {/* <!-- tags --> */}
                        <div className="new-post-input-container tag-container">
                            <label for="tags">Tags (max 5)</label>
                            <input type="text" id="tag-input" placeholder="Add tags..."/>
                            <div className="tagscontainer" id="tags-display">
                                <span>React<i className="fas fa-times"></i></span>
                                <span>Sarah Developer<i className="fas fa-times"></i></span>
                                <span>Php dev<i className="fas fa-times"></i></span>
                                <span>Php dev<i className="fas fa-times"></i></span>
                                <span>Php dev<i className="fas fa-times"></i></span>
                            </div>
                            <p>Press Enter or comma to add a tag</p>
                        </div>
                        {/* <!-- post settings --> */}
                        <div className="new-post-input-container-settings">
                            <h2>Post Settings</h2>
                            <input type="checkbox" id="comments"/>
                            <label for="comments">Allow Comments</label><br/>
                            <input type="checkbox" id="followers"/>
                            <label for="followers">Notufy my followers</label>

                            <div className="new-post-input-container">
                                <h3>Visibility</h3>
                                <select name="" id="">
                                    <option>Public (anyone can see)</option>
                                    <option>Group members only</option>
                                    <option>Private (only me)</option>
                                </select>
                            </div>
                        </div>
                        <div className="new-post-input-container">
                            <div className="input-buttons">
                                <button type="button" className="draft">Save Draft</button>
                                <button className="publish">Publish Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );

}

export default NewPost;