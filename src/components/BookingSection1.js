import React from 'react';
import Ambu from '../assets/ambulanceGIF.gif';
import bookinglogo from '../assets/booking-section-logo1.jpg';
import bookinglogo1 from '../assets/booking-section-logo2.jpg';

import bookinglogo2 from '../assets/booking-section-logo3.jpg';

import bookinglogo3 from '../assets/booking-section-logo4.jpg';


import "../styles/BookingSection1.css";

const BookingSection1 = () => {
    return (
        <div className='booking-main'>
            <div className='booking-card-container'>
                <div className="booking-card">
                    <img src={Ambu}alt="Ambulance" className="booking-card-image" />
                    <p className="booking-card-text">Ambulance</p>
                 </div>
                <div className="booking-card">
                    <img src={bookinglogo3} alt="Blood Bank" className="booking-card-image" />
                    <p className="booking-card-text">Blood Bank</p>
                 </div>
                <div className="booking-card">
                    <img src={bookinglogo2} alt="Bed Availability" className="booking-card-image" />
                    <p className="booking-card-text">Bed Availability</p>
                </div>

                <div className="booking-card">
                    <img src={bookinglogo1} alt="Mediclain Information" className="booking-card-image" />
                    <p className="booking-card-text">Mediclain Information</p>
                </div>

                <div className="booking-card">
                    <img src={bookinglogo} alt="24/7 Services" className="booking-card-image" />
                    <p className="booking-card-text">24/7 Services</p>
                </div>
            </div>
        </div>
    );
}

export default BookingSection1;
