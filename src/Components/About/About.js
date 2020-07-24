import React from 'react';

function About() {
    return (
        <section id='about-section' className="about-section">
            <h1>About Me</h1>
            <div className="am-container">
                <div className="am-headshot-col">
                <img className="headshot" src='headshot.jpg' title="Dan Meegan" alt="dan meegan headshot" />
                </div>
                <div className="am-text-col">
                <p>I am a self-taught web developer currently based in Boston. I am focused on creating clean modern websites and web applications.</p>
                <p>Please feel free to contact me with any opportunities.</p>
                </div>
            </div>
        </section>
    )
}

export default About;