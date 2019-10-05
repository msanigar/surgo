import React from 'react';
import Link from "next/link";

const Button = ({ text, link, theme }) => {

  const classes = theme === 'dark' ? 'btn dark' : 'btn light'

    return (
      <button className={ classes }>
        { link && <Link href={`/${link}`}>{ text }</Link> }
        { !link && <a>{ text }</a>}
      </button>
    )
}

export default Button;