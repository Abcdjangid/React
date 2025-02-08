import React from 'react'
import './About.css'
import about_png from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_png} alt='' className='about-img'></img>
                <img src={play_icon} alt='' className='play-icon'></img>
            </div>
            <div className='about-right'>
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's leaders Today</h2>
                <p>At our university, we believe in empowering the next generation of leaders to shape the future. Our commitment is to provide a nurturing environment that fosters growth, innovation, and creativity. </p>
                <p>Our faculty members are renowned experts in their fields, dedicated to providing personalized attention and mentorship to each student. </p>
                <p>By fostering a culture of inclusivity, diversity, and social responsibility, we aim to inspire our students to become active global citizens, capable of addressing the most pressing challenges of our time. </p>
            </div>
        </div>
    )
}
export default About