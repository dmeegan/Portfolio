import React from 'react';

function Contact() {
    return (
        <section id="contact-section">
            <h2>Contact Me</h2>
            <form className="contactForm" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label for="contactName">Your Name </label> <input type="text" name="name" id="contactName" required placeholder="Enter your name" /><br></br>
                </div>
                <div>
                    <label for="contactEmail">Your Email </label> <input type="email" name="email" id="contactEmail" required placeholder="Enter your email" /><br></br>
                </div>
                <div>
                    <label for="contactMessage"> Message </label><textarea name="message" rows="10" id="contactMessage" required placeholder="Message"></textarea>
                </div>
                <div>
                    <button type="submit" value="send">Send</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;