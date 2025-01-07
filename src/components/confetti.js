import JSConfetti from 'js-confetti'
import React, { useEffect } from 'react';
const jsConfetti = new JSConfetti()

const Confetti = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                jsConfetti.addConfetti()
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div style={{color: '#2d2d2d'}}>
            <h1>.</h1>
            <p>.</p>
        </div>
    );
};

export default Confetti;
