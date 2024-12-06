import React, { useState, useEffect } from "react";
import aboutImg from "../assets/about-img.jpg";
import "../styles/About.css";
import "../styles/AnimatedButton.css"
 import AOS from "aos";
// import video from "../assets/sample-video.mp4" 
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const About = () => {

  const location = useLocation();
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);

  const fullText = `AmbiQ is a revolutionary online ambulance booking application
                    that operates on a model similar to popular ride-hailing
                    services like Ola and Uber. With AmbiQ, individuals can
                    seamlessly book ambulances round the clock, ensuring prompt
                    assistance at critical moments, all at an affordable price
                    point. The app offers real-time tracking of the ambulance,
                    allowing users to know the exact arrival time, and provides
                    access to a network of well-equipped ambulances staffed with
                    trained medical professionals. AmbiQ also integrates with local
                    hospitals and medical facilities to ensure patients receive
                    immediate care upon arrival. Whether it's a medical emergency or
                    a scheduled transport, AmbiQ is dedicated to providing reliable
                    and efficient service, making it a crucial tool for healthcare
                    accessibility in Kolkata.`;

  const shortText = `AmbiQ is a revolutionary online ambulance booking application
                    that operates on a model similar to popular ride-hailing
                    services like Ola and Uber. With AmbiQ, individuals can
                    seamlessly book ambulances round the clock, ensuring prompt
                    assistance at critical moments, all at an affordable price
                    point.`;

  return (
    <>
      <div className="hero_area">
        <section className="about_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="video-box" data-aos="fade-right">
                <video className="video-frame" width="100%" height="315" controls loop autoPlay muted>
               </video>
            </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box" data-aos="fade-left">
                  <div className="heading_container">
                    <h2>
                      AMBIQ Ambulance Services
                    </h2>
                  </div>
                  <p>{readMore ? fullText : shortText}</p>
                  <button className="custom-btn btn-11" onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}<div className="dot"></div></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

 