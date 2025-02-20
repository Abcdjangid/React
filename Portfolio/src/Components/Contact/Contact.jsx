import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "4126e9f5-5ae1-4315-948e-5eff001b4f5b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult(data.message);
        }
    };

    return (
        <div className='contact' id='Contact'>
            <div className='contact-col'>
                <h3>Send us a message <FaPaperPlane /></h3>
                <p>
                    Feel free to contact us with any questions or inquiries. Whether you're looking for more information about our services 
                    or have a specific request, don't hesitate to reach out.
                </p>
                <ul>
                    <li><FaEnvelope /> Contact@ckj.dev</li>
                    <li><FaPhone /> +919462778568</li>
                    <li><FaMapMarkerAlt /> 123, ABC Street, New Delhi, India - 110001</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name </label>
                    <input type='text' name='name' placeholder='Enter Your Name' required />
                    
                    <label>Phone Number</label>
                    <input type='tel' name='number' placeholder='Enter Your Number' required />
                    
                    <label>Write your message here</label>
                    <textarea name='message' rows={6} placeholder='Enter your Message' required></textarea>
                    
                    <button type='submit' className='btn'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
