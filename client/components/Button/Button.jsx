import React from 'react';
import Link from "next/link";

const Button = ({ text, link, theme, clickFunc, funcArg }) => {

  const classes = theme === 'dark' ? 'btn dark' : 'btn light'

    return (
      <button className={ classes } onClick={clickFunc ? () => clickFunc(funcArg) : ''}>
        { link && <Link href={`/${link}`}><a>{ text }</a></Link> }
        { !link && <a>{ text }</a>}
      </button>
    )
}

export default Button;