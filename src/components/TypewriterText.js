import React, { useEffect, useState } from 'react';

const TypewriterText = ({ text, speed = 150 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval); // Stop when done
            }
        }, speed);

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, [text, speed]);

    return <span>{displayedText}</span>;
};

export default TypewriterText;
