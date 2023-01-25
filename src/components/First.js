import React from 'react'
import { useState } from 'react'

const First = () => {
  const [text, setText] = useState('')

  const hugeNumber = () => {
    console.log('rendering function')
    let total = 0
    for (let i = 1;i < 10000000;i++) {
      total += i
    }
    return total
  }


  return (
    <div className="App">
      both number and text re-render when text value has changed
      <br />
      <input
        onChange={e => setText(e.target.value)}
        placeholder='Enter Text'
      />
      total {hugeNumber()}
    </div>
  )
}

export default First