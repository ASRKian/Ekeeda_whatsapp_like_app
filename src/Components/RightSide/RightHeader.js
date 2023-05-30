import React from 'react'

export default function RightHeader() {
  return (
    <div className='headerProfile'>
      <div className='profile2'>
        <img src="https://picsum.photos/200" alt="" srcSet="" className='profilePic2' />
        <h1 className="name">Lokendra Gupta</h1>
      </div>
      <div className='rightIcons'>
        <i className="fa-solid fa-magnifying-glass right-side-icon"></i>
        <i className="fa-solid fa-ellipsis-vertical right-side-icon"></i>
      </div>
    </div>
  )
}
