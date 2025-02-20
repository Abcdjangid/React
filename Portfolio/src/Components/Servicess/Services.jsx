import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className='service' id='Services'>
      <h1>My Quality Services</h1>
      <p>
        We put your ideas and thus your wishes in the form of a unique web project that <br />inspires you and you customers.
      </p>

      <div className='service-card'>
        <div className='card'>
          <span>01</span>
          <h2>Frontend Development</h2>
          <p>I build fast, responsive, and user-friendly websites using modern frontend technologies, ensuring seamless performance and optimized user experience.</p>
        </div>

        <div className='card'>
          <span>02</span>
          <h2>Website Migration</h2>
          <p>I ensure smooth website migration with zero downtime, secure data transfer, and optimized performance across servers, platforms, or hosting providers.</p>
        </div>

        <div className='card'>
          <span>03</span>
          <h2>WordPress Development</h2>
          <p>I create high-performing WordPress websites with custom themes, plugins, and SEO optimization, ensuring security and scalability.</p>
        </div>

        <div className='card'>
          <span>04</span>
          <h2>Hosting Support Service</h2>
          <p>I provide expert hosting support, managing domains, DNS, server configurations, and security to ensure website stability and optimal performance.</p>
        </div>

        <div className='card'>
          <span>05</span>
          <h2>Full-Stack Web Development</h2>
          <p>I develop complete web solutions, handling both frontend and backend using the MERN stack to build scalable and efficient applications.</p>
        </div>

        <div className='card'>
          <span>06</span>
          <h2>Performance & Security Optimization</h2>
          <p>I enhance website speed, security, and SEO, ensuring optimized performance, fast loading times, and protection from threats.</p>
        </div>
      </div>
    </div>
  )
}

export default Services