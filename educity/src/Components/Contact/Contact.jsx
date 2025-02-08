import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
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
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon}></img></h3>
                <p>Feel free to contact us with any questions or inquiries you may have. We're always eager to hear from you and help in any way we can. Whether you're looking for more information about our services or have a specific request, don't hesitate to reach out.</p>
                <ul>
                    <li><img src={mail_icon}></img>Contact@ckj.dev</li>
                    <li><img src={phone_icon}></img>+91 1234567890</li>
                    <li><img src={location_icon}></img>123, ABC Street, New Delhi, India - 110001</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name </label>
                    <input type='text' name='name' placeholder='Enter Your Name' required></input>
                    <label>Phone Number</label>
                    <input type='tel' name='number' placeholder='Enter Your Number' required></input>
                    <label>Write your message here</label>
                    <textarea name='message' rows={6} placeholder='Enter your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow}></img></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact