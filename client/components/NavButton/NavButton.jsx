import React from 'react';

const NavButton = ({ toggle, mode }) => {
    return (
        <div className={`nav ${mode === 'desktop' ? 'desktop desktop-only' : 'mobile-only'}`}>
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

export default NavButton;