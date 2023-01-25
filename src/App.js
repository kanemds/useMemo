import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState('')

  const hugeNumber = () => {
    let total = 0
    for (let i = 1;i < 10000000;i++) {
      total += i
    }
    return total
  }

  return (
    <div className="App">
      <input
        onChange={e => setText(e.target.value)}
        placeholder='Enter any Number'
      />
      total {hugeNumber()}
    </div>
  )
}

export default App
