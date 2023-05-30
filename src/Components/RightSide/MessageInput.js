import React, { useState } from 'react'
import { sendMssgs } from '../../Redux/messageSlice'
import { useDispatch } from 'react-redux'

export default function MessageInput() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const settingInput = (e) => {
    setInput(e.target.value)
    console.log(input);
  }
  return (
    <div className='msgInputDiv'>
      <i className="fa-solid fa-face-grin-beam inputIcon"></i>
      <i className="fa-solid fa-paperclip inputIcon"></i>
      <input type="text" className='msgInput' placeholder='Type a message' value={input} onChange={settingInput} />
      <i className="fa-solid fa-microphone inputIcon" onClick={() => dispatch(sendMssgs(input))}></i>
    </div>
  )
}
