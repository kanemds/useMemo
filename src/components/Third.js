import React, { useState } from 'react'
import Numbers from './Numbers'

const Third = () => {

  const [text, setText] = useState('')

  console.log(text)

  return (
    <div className="App">
      <input
        onChange={e => setText(e.target.value)}
        placeholder='Entery Text'
      />

      <br />
      <Numbers />
    </div>
  )
}

export default Third