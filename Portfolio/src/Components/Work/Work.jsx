import React from 'react';
import './Work.css';


const Work = () => {
    return (
        <div className='work' id='Works'>
            <h1>My Recent Works</h1>
            <div className='work-main'>
                {/* <div className='work-card'>
                    <img src='./portfolio.png' alt='portfolio'></img>
                    <span>portfolio</span>
                    <a href='https://chitvanjangid.com/'>Open Website</a>
                </div> */}

                <div className='work-card'>
                    <img src='./codehubnest.png' alt='codehubnest'></img>
                    <span>codehubnest</span>
                    <a href='https://codehubnest.chitvanjangid.com/' target='blank'>Open Website</a>
                </div>


                <div className='work-card'>
                    <img src='./Goat.png' alt='Goat Training'></img>
                    <span>Goat Training</span>
                    <a href='https://wordpress.chitvanjangid.com/' target='blank'>Open Website</a>
                </div>
            </div>

        </div>
    );
}

export default Work;
