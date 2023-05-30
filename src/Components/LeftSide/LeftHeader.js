import React from 'react'
import './LeftSide.css'

export default function LeftHeader() {
  return (
    <div className='leftHeader'>
      <div className="profileDiv">
        <img src="https://picsum.photos/200" alt="profile" srcSet="" className='profilePic' />
      </div>
      <div className='iconDiv'>
        <i className="fa-solid fa-user-group left-header-icon"></i>
        <i className="fa-solid fa-circle-notch left-header-icon"></i>
        <i className="fa-solid fa-message left-header-icon"></i>
        <i className="fa-solid fa-ellipsis-vertical left-header-icon"></i>
      </div>
    </div>
  )
}
