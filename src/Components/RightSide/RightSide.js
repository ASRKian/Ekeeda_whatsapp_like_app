import React from 'react'
import RightHome from './RightHome'
import RightHeader from './RightHeader'
import MessageDisplay from './MessageDisplay'
import MessageInput from './MessageInput'
import './RightSide.css'

export default function RightSide() {
  return (
    <div className='rightSide'>
      {/* <RightHome/> */}
      <RightHeader/>
      <MessageDisplay />
      <MessageInput/>
    </div>
  )
}
