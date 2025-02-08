import React from 'react'
import './Hero.css'
import dark_arrow  from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better World</h1>
            <p>Education is the process of acquiring knowledge, skills, and values through formal learning, empowering individuals to critically think, solve problems, and contribute meaningfully to society, enabling personal growth and career advancement.</p>
            <button className='btn'>Explore more<img src ={dark_arrow} alt=''></img></button>
        </div>
    </div>
  )
}

export default Hero