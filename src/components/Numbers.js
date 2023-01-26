import React from 'react'
import { memo } from 'react'

const Numbers = () => {


  console.log('rendering function')
  let total = 0
  for (let i = 1;i < 10000000;i++) {
    total += i
  }

  return (
    <div className="App">

      'Numbers Component'
      <br />
      <br />
      using react memo prevent children component re-render
      <br />
      const memoizedNumbers = memo(Numbers)
      <br />
      export default memoizedNumbers
      <br />
    </div>
  )
}

const memoizedNumbers = memo(Numbers)
export default memoizedNumbers