import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState();

  return (
    <>
      <h1>Count : {count}</h1>
      <div className='btncontainer'>
        <input type="text" value={step} placeholder=' Enter your Number' onChange={(e) => setStep(Number(e.target.value))} />
        <button onClick={() => setCount(count + step)}>Increment by Step</button>
        <button onClick={() => setCount(count - step)}>Decrement by Step</button>
        <button onClick={() => setCount(count + 1)}> +1 </button>
        <button onClick={() => setCount(count - 1)}> -1 </button>
        <button onClick={() => setCount(count*2)}>Double</button>
        <button onClick={() => setCount(count/2)}>Halve</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
