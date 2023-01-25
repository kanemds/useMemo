import React from 'react'
import { useState, useMemo } from 'react'

const Second = () => {
  const [text, setText] = useState('')
  const [number, setNumber] = useState(0)

  const hugeNumber = (n) => {
    console.log('rendering function')
    let total = 0
    for (let i = 0;i <= n;i++) {
      total += i
    }
    return total
  }

  const sum = useMemo(() => hugeNumber(number), [number]) // like useEffect, render only when [] arg is changed

  console.log('component re-render')

  return (
    <div className="App">
      Added useMemo for state: number,
      <br />
      const sum = useMemo(() => hugeNumber(number), [number])
      <br />
      like useEffect, only render when number has changed
      <br />
      <input
        type='text'
        onChange={e => setText(e.target.value)}
        placeholder='Enter Text'
        value={text}
      />
      Text Value: {text}
      <br />
      <input
        type='number'
        onChange={e => setNumber(e.target.value)}
        placeholder='Enter Number'
        value={number}
      />
      Total: {sum}
    </div>
  )
}

export default Second