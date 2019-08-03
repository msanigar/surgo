import React from 'react';
import './Nav.scss';

const Nav = ({ toggle }) => {
    return (
        <div className="nav">
            <div className="nav-logo">
                <p>Surgo</p> 
            </div>
            <div className="nav-toggle">
                <input
                    type="checkbox"
                    id="nav-checkbox"
                    onChange={() => toggle()}
                />
                <label htmlFor="nav-checkbox">
                <div></div>
                <div></div>
                <div></div>
                </label>
            </div>
        </div>
    )
}

export default Nav;