import React from 'react'
import Button from '../Button'

const Signup = () => {
  return (
   <span className="signup">
    <p className="title">Join the experience</p>
    <input placeholder="Enter your email address here" id="email" type="text" className="validate" />
    <div className="btn-container">
      <Button text={'Sign up'} />
    </div>
   </span>
  )
}

export default Signup