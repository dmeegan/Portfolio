import React from 'react';

function NavLinks(props) {

    return (
        <ul className={props.navIsActive ? 'navLinks navLinks-active' : 'navLinks'}>
            <li><a href='#about-section'>About</a></li>
            <li><a href='#portfolio-section'>Work</a></li>
            <li><a href='#contact-section'>Contact</a></li>
        </ul>
    );
}

export default NavLinks;