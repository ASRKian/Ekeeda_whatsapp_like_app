import React, { useState } from 'react'
import './LeftSide.css'

export default function SearchBar() {
  const [search, setSearch] = useState("")
  const write = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <input type="text" className='searchBar' placeholder='Search or start new chat' value={search} onChange={write}/>
    </div>
  )
}
