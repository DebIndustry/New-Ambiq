import React, { useState, useEffect } from 'react';

export const Bookingform = () => {
  const fullText = "  Book your appointment now for a seamless experience! Our team is dedicated to providing you with top-notch service and care."; // Full text for typewriter effect

  const [displayedText, setDisplayedText] = useState("");  
  const [typingComplete, setTypingComplete] = useState(false);  

   useEffect(() => {
    if (typingComplete) return;  

    let index = 0; 
    const typingInterval = setInterval(() => {
      if (index < fullText.length) { 
        setDisplayedText(prev => prev + fullText.charAt(index));  
        index++;
      } else {
        clearInterval(typingInterval); 
        setTypingComplete(true);  
      }
    }, 50); 

    return () => clearInterval(typingInterval); 
  }, [typingComplete]);  

  return (
    <div>
      <h2>Booking Form</h2>
      <p>{displayedText}</p>  
     </div>
  );
};
