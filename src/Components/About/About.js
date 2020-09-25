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
                <p>I am a web developer currently based in Boston. With a Bachelors Degree in Engineering, I continue to use my STEM background and analytical skills in my web development work. My focused is on creating clean modern websites and web applications that solve real-world problems.</p>
                <p>Working in the field of Engineering has taught me how to provide the best possible product, that meets a clients needs, before the scheduled deadline.</p>
                <p>I have experience with HTML, CSS, JavaScript, React, and I am constantly learning new tools to add to my abilities.</p>
                <p>Please feel free to {<a href='#contact-section'>contact</a>} me with any opportunities.</p>
                </div>
            </div>
        </section>
    )
}

export default About;