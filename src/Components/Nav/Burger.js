import React from 'react';

function Burger(props) {
    return (
        <div className={props.navIsActive ? 'burger burger-active' : 'burger'} onClick={props.toggleNavActive}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    );
}

export default Burger;