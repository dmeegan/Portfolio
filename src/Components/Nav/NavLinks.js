import React from 'react';

function NavLinks(props) {

    return (
        <ul className={props.navIsActive ? 'navLinks navLinks-active' : 'navLinks'}>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Work</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    );
}

export default NavLinks;