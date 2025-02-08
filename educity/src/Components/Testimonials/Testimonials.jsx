import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef(null);
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}></img>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}></img>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt='William Jackson'></img>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>"Edusity has been a game-changer for my career. The courses are engaging and informative. I've been able to apply the skills I've learned directly to my work, and it's made a significant impact on my professional growth."</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt='William ksiams'></img>
                            <div>
                                <h3>William ksiams</h3>
                                <span>Edusity, US</span>
                            </div>
                        </div>
                        <p>"Edusity has been a game-changer for my career. The courses are engaging and informative. I've been able to apply the skills I've learned directly to my work, and it's made a significant impact on my professional growth."</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt='WiLson Kkais'></img>
                            <div>
                                <h3>WiLson Kkais</h3>
                                <span>Edusity, UP</span>
                            </div>
                        </div>
                        <p>"Edusity has been a game-changer for my career. The courses are engaging and informative. I've been able to apply the skills I've learned directly to my work, and it's made a significant impact on my professional growth."</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt='kaikmasii  ddaia'></img>
                            <div>
                                <h3>kaikmasii  ddaia</h3>
                                <span>Edusity, kingdom</span>
                            </div>
                        </div>
                        <p>"Edusity has been a game-changer for my career. The courses are engaging and informative. I've been able to apply the skills I've learned directly to my work, and it's made a significant impact on my professional growth."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div> 
  )
}

export default Testimonials