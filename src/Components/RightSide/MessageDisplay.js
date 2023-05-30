import React from 'react'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'
import { useSelector } from 'react-redux'

export default function MessageDisplay(props) {
  const state = useSelector(state => state);
  console.log(state);
  const mssgs = state.data[0].messagesList
  console.log(mssgs);

  return (
    <div className='allMsg'>
      {mssgs.map((e) => (      
      <div key={e.id}>
        {e.senderID === 0 ?
        <ReceivedMessage mssg ={e.text} /> :
        <SentMessage mssg ={e.text} /> }
      </div>))}
    </div>
  )
}
