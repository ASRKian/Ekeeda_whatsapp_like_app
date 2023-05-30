import { React, useEffect } from 'react'
import LeftHeader from './LeftHeader'
import SearchBar from './SearchBar'
import Contact from './Contact'

export default function LeftSide() {
  return (
    <div className='leftSide'>
      <LeftHeader />
      <SearchBar />
      <div className='contacts'>
        <Contact />
      </div>
    </div>
  )
}
