import React from 'react';
import "./Home.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";



const Home = () => {
    return (
        <div className='home' id='Home'>
            <h1>I am Chitvan...</h1>
            <h2>Frontend Developer | React.js | WordPress Developer </h2>
            <p>From frontend to backend, I create seamless web solutions that bring ideas to life. With expertise in React.js, JavaScript, and WordPress, I build responsive, scalable, and optimized applications, ensuring a smooth user experience. 🚀</p>
            
            <div className='social'>
                <div className='social-btn'>
                <a href='./chitvan jangid.pdf' target='blank' className='btn'>Download CV</a>
                {/* <a href='' className='btn'>Hire me</a> */}
                </div>
                <div className='social-icon'>
                <a href='https://www.linkedin.com/in/chitvan-jangid/' target="_blank" ><FaLinkedin size={30}/></a>
                <a href='https://github.com/Abcdjangid/' target="_blank" ><FaGithub size={30} /></a>
                <a href='https://www.instagram.com/abcdjangid/' target="_blank" ><FaInstagram size={30}/></a>
                </div>
            </div>
        </div>
    )
}

export default Home;
