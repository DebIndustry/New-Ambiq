import React from 'react';
import '../styles/Ouresteemed.css';
import logo from "../assets/esteemlogo1.jpg"
import logo1 from "../assets/esteemlogo2.jpg"
import logo2 from "../assets/esteemlogo3.jpg"
import logo3 from "../assets/esteemlogo4.jpg"
import logo4 from "../assets/esteemlogo5.jpg"



export const Ouresteemed = () => {
  return (
    <div className='MainOurContainer'> 
      <div className='Partner'>
        <p>OUR ESTEEMED PARTNER</p>
        <p>Expanding our reach by joining forces with hospitals and corporates</p>
      </div>

      <div className='cardMainContainer'>
        <div className='card'>
          <img src={logo} alt="St. Mary's Hospital" className="card-image" />
          </div>
        <div className='card'>
          <img src= {logo1} alt="Greenfield Medical Center" className="card-image" />
          
        </div>
        <div className='card'>
          <img src= {logo2} alt="St. John's Hospital" className="card-image" />
         
        </div>
        <div className='card'>
          <img src= {logo3} alt="Mercy Health Hospital" className="card-image" />
        </div>
        <div className='card'>
          <img src={logo4} alt="LA Hospitals" className="card-image" />
         </div>
        <div className='card'>
          <img src={logo} alt="Hope Medical Center" className="card-image" />
         </div>
        <div className='card'>
          <img src={logo1} alt="Pinehill Hospital" className="card-image" />
          </div>
        <div className='card'>
          <img src={logo2} alt="City Health Hospital" className="card-image" />
         </div>
      </div>
    </div>
  );
};
