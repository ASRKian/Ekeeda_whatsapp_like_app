import React from 'react'

export default function ReceivedMessage(props) {
  return (
    <div className='rcvMsg'>
        <i className="fa-solid fa-message rcvMsgIcon"></i>
        {props.mssg}
    </div>
  )
}
