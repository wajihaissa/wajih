import React from 'react'
import Adress from './componment/profile/Adress'
import FullName from './componment/profile/FullName'
import ProfilePhoto from './componment/profile/ProfilePhoto'

const App = () => {
  return (
    <div className="main">
      <Adress/>
      <FullName/>
      <ProfilePhoto/>
    </div>
  )
}

export default App
