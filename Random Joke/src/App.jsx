import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joke from './Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Joke Generator Using React and Joke API</h1>
        <Joke/>
      </div>
    </>
  )
}

export default App
