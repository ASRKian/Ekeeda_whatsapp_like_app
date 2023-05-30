import React from 'react'

export default function SentMessage(props) {
  return (
    <div className='sentMsg'>
        {props.mssg}
      <i className="fa-solid fa-message fa-flip-horizontal sentMsgIcon"></i>
    </div>
  )
}
