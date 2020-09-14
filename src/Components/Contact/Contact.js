import React from 'react';

function Contact() {
    return (
        <form className="contactForm" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact"/>
            <div>
                <label>Your Name <br></br> <input type="text" name="name" required/></label><br></br>
            </div>
            <div>
                <label>Your Email <br></br> <input type="email" name="email" required/></label><br></br>
            </div>
            <div>
                <label>Message <br></br> <textarea name="message" rows="10" required></textarea></label>
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}

export default Contact;