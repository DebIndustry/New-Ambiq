import React, { useState, useEffect, useRef } from 'react';
import '../styles/CounterItem.css';  
  import TypewriterText from './TypewriterText';  
import { Button } from 'react-bootstrap';


const Counter = () => {
   const fullText = "";

   const [count300, setCount300] = useState(0);
  const [count5000, setCount5000] = useState(0);
  const [count262K, setCount262K] = useState(0);
  const [count94, setCount94] = useState(0);
  const [count50, setCount50] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Track if counting has started

  const counterRef = useRef(null); // Create a ref for the counter section

  useEffect(() => {
    const counters = [
      { setCount: setCount300, target: 300, duration: 10000 },
      { setCount: setCount5000, target: 5000, duration: 10000 },
      { setCount: setCount262K, target: 262000, duration: 10000 },
      { setCount: setCount94, target: 94, duration: 10000 },
      { setCount: setCount50, target: 50, duration: 10000 },
    ];

    if (hasStarted) {
      counters.forEach(({ setCount, target, duration }) => {
        let start = 0;
        const increment = target / (duration / 50);  
        const counterInterval = setInterval(() => {
          if (start < target) {
            start += increment;
            setCount(Math.floor(start));  
          } else {
            setCount(target);  
            clearInterval(counterInterval);
          }
        }, 10);

        return () => clearInterval(counterInterval);
      });
    }
  }, [hasStarted]);  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHasStarted(true);  
          observer.disconnect();  
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);  
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);  
      }
    };
  }, []);

  return (
    <section className="counter-wrapper" ref={counterRef}>    
      <div className="JoinSection">
         <div className="underSection1">
          <h1>JOIN OUR TEAM</h1>
          <p><TypewriterText text=" AmbiQ is a revolutionary online ambulance booking application that operates on a model similar to popular ride-hailing services like Ola and Uber. With AmbiQ, individuals can seamlessly book ambulances round the clock, ensuring prompt assistance at critical moments, all at an affordable price point." /></p> 
          <Button>VIEW CAREERS</Button>
        </div>
        <div className='underSection2'>
          <p>{count300}+</p>
          <p>Partnered Hospitals</p>
          <p>{count5000}+</p>
          <p>Fleet of Ambulances</p>
        </div>
        <div className='underSection3'>
          <p>{Math.floor(count262K / 1000)}K+</p>  
          <p>Lives Touched</p>
          <p>{count94}% Satisfaction Rate</p>
          <p>{count50}+</p>
          <p>Cities</p>
        </div>
       </div>
      
    </section>
  );
};

export default Counter;
