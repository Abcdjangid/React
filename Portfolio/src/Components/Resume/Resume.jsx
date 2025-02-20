import React from 'react';
import "./Resume.css";

const Resume = () => {
  return (
    <div className='resume' id='Resume'>
      <h1>My Resume</h1>

      <div className='resume-section'>
        <h2>Experience</h2>
        <div className='resume-card'>
          <span>2022 - 2024</span>
          <h3>Hosting Support Administrator - AmbitionHost</h3>
          <p>Managed DNS configurations, server support, and hosting-related troubleshooting.</p>
        </div>

        <div className='resume-card'>
          <span>Freelancing</span>
          <h3>WordPress Developer</h3>
          <p>Developed and customized WordPress websites for various clients, focusing on SEO, performance, and user experience.</p>
        </div>
      </div>

      {/* Education Section */}
      <div className='resume-section'>
        <h2>Education</h2>
        <div className='resume-card'>
          <span>2021 - 2024</span>
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Gained foundational knowledge in programming, databases, and web development.</p>
        </div>

        <div className='resume-card'>
          <span>Self-Learning</span>
          <h3>Online Courses & YouTube</h3>
          <p>Enhanced skills in React, JavaScript, and backend development through various online platforms.</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
