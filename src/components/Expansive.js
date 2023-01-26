import React from 'react'

const Expansive = () => {

  console.log('rendering function')
  let total = 0
  for (let i = 1;i < 10000000;i++) {
    total += i
  }

  return (
    <div className="App">

      'Expansive Component'

    </div>
  )
}

export default Expansive