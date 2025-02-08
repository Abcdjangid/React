import React from 'react'
import './App.css'
import { useState } from 'react'


const App = () => {
  const[color, setColor] = useState("")
  const[bgcolor, setBgcolor] = useState("")


const handlecolorchanger = (e) =>{
  setColor(e.target.value);
}

const applycolor = (e) =>{
  setBgcolor(color);
}

const clearcolor = (e)=>{
  setBgcolor("");
  setColor("");
}

const handlekeypress = (e)=>{
  if(e.key === 'Enter'){
    applycolor()
  }
}

  return (
    <>
      <h1>Background Color Changer</h1>
      <div className='button_container'>
        <input 
        placeholder='Enter color Name' type='text' onChange={handlecolorchanger} onKeyDown={handlekeypress} maxLength={24} value={color}>
        </input>
        <button onClick={applycolor} className='apply'>Apply</button>
        <button onClick={clearcolor} className='clear'>Clear</button>
      </div>
      <div className='bg_container' style={{backgroundColor: bgcolor}}>
        { color ? `Background color is : ${color}` : `Please enter a color name`}
      </div>
    </>
  )
}

export default App