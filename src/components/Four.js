import React, { useState } from 'react'
import Numbers from './Numbers'

const Four = () => {

  const Form = () => {
    const [text, setText] = useState('')
    return (
      <input
        onChange={e => setText(e.target.value)}
        placeholder='Entery Text'
      />
    )
  }

  return (
    <div className="App">
      create another component
      <br />
      <Form />
      <br />
      <Numbers />

    </div>
  )
}

export default Four