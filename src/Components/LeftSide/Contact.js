import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Contact() {
  const state = useSelector(state => state);
  // console.log(state.data[0].name);
  // const [nameData, setNameData] = useState([]);
  const nameData = state.data
  // console.log(nameData);

  return (
    <>{nameData.map((e) => (
      <div className='contactDiv' key={e.id}>
        <img src={e.profilePic} alt="profilePicture" className='contactPic' />
        <div className="nameDiv">
          <h1 className="name">{e.name}</h1>
          <p className="lastMsg">{e.lastText}</p>
        </div>
      </div>
    ))}
    </>
  )
}
