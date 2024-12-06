import React from 'react';
// import AmbVdo from '../assets/AmbiqVideo.mp4';
import ambulance from "../assets/ambulane (2).png";
import mobile from '../assets/mobile_hand.png';
import TypewriterText from './TypewriterText';
import "../styles/slider1.css";

function Slider1() {
    return (
        <div className="slider-wrapper">
            <div className="slider-container">
                {/* <div className="slider">
                     <video
                        src={AmbVdo}
                        autoPlay
                        muted
                        loop
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                    />
                    
                     <p className='support'>
                        <TypewriterText text="24/7 Ambulance Support?" />
                    </p>
                     
                    
                    <img src={ambulance} alt="Ambulance" className='Ambulanceop' />
                </div> */}
            </div>

             <div className='bookingform'>
                <div className='bookContainer'>
                    <h3>GET A CALL BACK IN  <br/> JUST 10 MINUTES</h3>
                    <div className='inputefield'>
                        <input type="text" placeholder="Your Name..." />
                        <input type="text" placeholder="Your Mobile No..." />
                        <div className="checkbox-container">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">By Continuing, you agree to our T&C Privacy and Policies</label>
                        </div>
                        <button type="button">Book Ambulance</button>
                        <div className='Handphone'>
                            <img src={mobile} alt="Mobile in hand" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider1;
