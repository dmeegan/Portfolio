import React from 'react';

function About() {
    return (
        <section id='about-section' className="about-section">
            <h2>About Me</h2>
            <div className="am-container">
                <div className="am-headshot">
                <img className="headshot" src='./Images/headshot.jpg' title="Dan Meegan" alt="dan meegan headshot" />
                </div>
                <div className="am-text">
                <p>I am a self-taught web developer currently based in Boston. I am focused on creating clean modern websites and web applications.</p>
                <p>Please feel free to contact me with any opportunities.</p>
                </div>
            </div>
        </section>
    )
}

export default About;