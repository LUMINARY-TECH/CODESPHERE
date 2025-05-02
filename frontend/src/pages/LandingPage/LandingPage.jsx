import React from "react";
import Footer from '../../components/Footer/Footer'
import './LandingPage.css';
const LandingPage = ()=>{
    return(
        <>
        <section class="herosection">
            <div class="hero">
                <div class="hero-left">
                    <div class="hero-top">
                        <h1><span class="text1">Connect. </span> <span class="text2">Code.</span><br/><span>Collaborate.</span></h1>
                    </div>
                    <div class="hero-mid">
                        <p>The ultimate platform for developers to share knowledge, build <br/> projects, and grow their careers in tech communities.</p>
                    </div>
                    <div class="hero-cta">
                        <a href="" class="join">
                            Join Now - It's Free
                        </a>
                        <a href="" class="demo">
                            <i class="fas fa-play"></i>
                            Watch Demo
                        </a>
                    </div>
                    <div class="devs">
                        <div class="devsbox">
                            <div class="devs-div common-dev1">
                                <img src="./images/user2.png" alt=""/>
                            </div>
                            <div class="devs-div common-dev2">
                                <img src="./images/boy.png" alt=""/>
                            </div>
                            <div class="devs-div common-dev3">
                                <img src="./images/woman.png" alt=""/>
                            </div>
                        </div>
                        <div class="counters">
                            <p>Join <span>24,817+ </span>developers worldwide</p>
                        </div>
                        
                    </div>
                </div>
                <div class="hero-right">
                    <div class="example-post">
                        <div class="hero-absolute"></div>
                        <div class="hero-right-post">
                            <div class="hero-right-post-top">
                                <div class="divcont">
                                    <span class="spanred"></span>
                                    <span class="spanyellow"></span>
                                    <span class="spangreen"></span>
                                </div>
                                <p>#react-community</p>
                            </div>
                            <div class="hero-right-post-content">
                                <div class="user-post-image">
                                    <img src="./images/user.png" alt=""/>
                                </div>
                                <div class="hero-right-post-user-content">
                                    <div class="user-name-details">
                                        <h2>Sarah Developer</h2>
                                        <p>2m ago</p>
                                    </div>
                                    <div class="hero-right-post-details">
                                        <p>Has anyone implemented React Server Components in production yet?</p>
                                    </div>
                                    <div class="hero-post-container">
                <pre><code>function MyServerComponent() &rbrace;
        const data = fetchData(); // Runs on server
        return &lt;div&gt;&rbrace;data&rbrace;&lt;/div&gt;;
    &rbrace;</code>
                                        </pre>
                                    </div>
                                    <div class="hero-post-actions">
                                        <a href="#" class="electric-blue"><i class="far fa-comment mr-1"></i> 12</a>
                                        <a href="#" class="red"><i class="far fa-heart mr-1"></i> 34</a>
                                        <a href="#" class="green"><i class="far fa-bookmark mr-1"></i> Save</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
        <section class="trustees">
            <h1>Trusted by developers at</h1>
            <div class="trusters">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="Sass"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="npm"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel"/>
            </div>
        </section>
        <section class="features">
            <div class="features-container">
                <h1>Everything Developers Need</h1>
                <p>From technical discussions to career growth, we,ve built the perfect environment for coders</p>
                <div class="featuresbox-div">
                    <div class="feature">
                        <div class="featuretop">
                            <div class="featureicon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="features-content">
                                <h1>Tech Communities</h1>
                                <p>Join Language/framewor-specific groups or craeate your own. Moderate with powerful tools.</p>
                                <ul>
                                    <li><i class="fas fa-check "></i> Public & private groups</li>
                                    <li><i class="fas fa-check "></i> Advanced moderation</li>
                                    <li><i class="fas fa-check "></i> Customizable roles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="featuretop">
                            <div class="featureicon">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="features-content">
                                <h1>Real-time Collaboration</h1>
                                <p>Built-in VS Code-like editor for pair programming and code reviews.</p>
                                <ul>
                        <li ><i class="fas fa-check "></i> Multiplayer coding</li>
                        <li ><i class="fas fa-check "></i> Terminal access</li>
                        <li ><i class="fas fa-check "></i> Code execution</li>
                    </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="feature">
                        <div class="featuretop">
                            <div class="featureicon">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="features-content">
                                <h1>AI-Powered Features</h1>
                                <p>Smart tools to enhance your developer experience.</p>
                                <ul>
                                    <li ><i class="fas fa-check"></i> Code explanations</li>
                                    <li ><i class="fas fa-check"></i> Error debugging</li>
                                    <li ><i class="fas fa-check"></i> Documentation generation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="feature">
                        <div class="featuretop">
                            <div class="featureicon">
                                <i class="fas fa-gem"></i>
                            </div>
                            <div class="features-content">
                                <h1>Gamification</h1>
                                <p>Earn achievements and climb leaderboards for your contributions.</p>
                                <ul>
                                    <li><i class="fas fa-check"></i> Skill badges</li>
                                    <li><i class="fas fa-check"></i> Weekly challenges</li>
                                    <li><i class="fas fa-check"></i> Reputation system</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="feature">
                        <div class="featuretop">
                            <div class="featureicon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <div class="features-content">
                                <h1>Career Hub</h1>
                                <p>Connect with opportunities tailored to your skills.</p>
                                <ul>
                                    <li ><i class="fas fa-check"></i> Job matching</li>
                                    <li ><i class="fas fa-check"></i> Portfolio builder</li>
                                    <li ><i class="fas fa-check"></i> Interview prep</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature">
                        <div class="featuretop">
                            <div class="featureicon">
                                <i class="fas fa-bolt"></i>
                            </div>
                            <div class="features-content">
                                <h1>Lightning Fast</h1>
                                <p>Optimized for developers with instant search and real-time updates.</p>
                                <ul>
                                    <li class="flex items-center"><i class="fas fa-check"></i> Global CDN</li>
                                    <li class="flex items-center"><i class="fas fa-check"></i> WebSockets</li>
                                    <li class="flex items-center"><i class="fas fa-check"></i> Edge caching</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="testimonials">
            <div class="testimnials-top">
                <h1>Trusted by Developers</h1>
                <p>Join thousands of developers who've accelerated their careers with CodeSphere</p>
            </div>
            <div class="testimonies-box">
                <div class="testimony">
                    <div class="testimony-top">
                        <img src="./images/user.png" alt=""/>
                        <div class="test-details">
                            <h2>Sarah Developer</h2>
                            <p>Senior React Engineer</p>
                        </div>
                    </div>
                    <div class="testimony-details">
                        <p>"CodeSphere helped me find my current job through their career network. The React community is incredibly active and supportive."</p>
                    </div>
                    <div class="ratings">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="testimony">
                    <div class="testimony-top">
                        <img src="./images/boy.png" alt=""/>
                        <div class="test-details">
                            <h2>Alex Coder</h2>
                            <p>Python Developer</p>
                        </div>
                    </div>
                    <div class="testimony-details">
                        <p>"The real-time collaboration tools saved our distributed team during crunch time. We debugged production issues together in minutes."</p>
                    </div>
                    <div class="ratings">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="testimony">
                    <div class="testimony-top">
                        <img src="./images/woman.png" alt=""/>
                        <div class="test-details">
                            <h2>Jamie Dev</h2>
                            <p>DevOps Engineer</p>
                        </div>
                    </div>
                    <div class="testimony-details">
                        <p>"As an open source maintainer, CodeSphere's project tools helped me organize contributors and streamline code reviews."</p>
                    </div>
                    <div class="ratings">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </section>
        <section class="join-community">
            <div class="join-div">
                <h1>Ready to join the Community?</h1>
                <p>Connect with developers worldwide and take your skills to the next level</p>
                <div class="joinactions">
                    <a href="" class="start">Get Started for Free</a>
                    <a href="" class="explore">Explore communities</a>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}


export default LandingPage;