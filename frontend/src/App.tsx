import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the AI Employee</h1>
      <button type='buttton' className='button' onClick={() => setCount(count + 1)}>Counter</button>
      <p className='body'>{count}</p>
      <p className='name'>{count == 5 && "Hi Vivek" }</p>
    </>
  )
}

export default App
