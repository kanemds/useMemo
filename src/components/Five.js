import React, { useState } from 'react'
import Expansive from './Expansive'




const Five = () => {

  return (
    <BgProvider>
      <br />
      set numbers component as children
      <br />
      only render if children component has changed
      <br />
      <Expansive />
    </BgProvider>
  )
}


const BgProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("white")
  console.log(backgroundColor)
  return (
    <div className="App" style={{ backgroundColor }}>
      <input onChange={(e) => setBackgroundColor(e.target.value)} />
      {children}
    </div>
  )
}


export default Five