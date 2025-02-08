import React, {useState} from 'react'

const Newcounter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1>Counter App (function Based)</h1>
        <p>Count : {count}</p>
        {/* 
       We pass a callback function to onClick for a few important reasons:
       1. The callback ensures the code only runs when clicked, not during render
       2. Allows React to properly handle the event and state updates
       
       If we wrote onClick={setCount(count+1)} without the arrow function,
       it would execute immediately during render instead of waiting for clicks
       */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Newcounter