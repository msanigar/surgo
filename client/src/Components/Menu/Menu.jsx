import React from 'react';
import './Menu.scss';

const Menu = ({show, hide}) => {
    return (
        <div className={show ? "menu open" : "menu"}>
        <p onClick={() => hide()}>close</p>    
        <p>menu</p>
        </div>
    )
}

export default Menu;