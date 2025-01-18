import React, { useState } from 'react';

function Track () {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        const circleRect = e.target.getBoundingClientRect();
        const centerX = circleRect.width / 2;
        const centerY = circleRect.height / 2;

        const x = e.clientX - circleRect.left - centerX;
        const y = e.clientY - circleRect.top - centerY;

        const distance = Math.min(Math.sqrt(x * x + y * y), centerX); // Ensure the dot stays on the circle's perimeter

        setCursorPosition({
        x: (x / Math.sqrt(x * x + y * y)) * distance + centerX,
        y: (y / Math.sqrt(x * x + y * y)) * distance + centerY,
        });
    };

    const circleStyle = {
        width: '80vw',
        height: '80vw',
        maxWidth: '700px',
        maxHeight: '700px', 
        borderRadius: '50%',
        border: '2px solid white', 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent', 
        cursor: 'pointer',
    };
    const dotStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'red',
        position: 'absolute',
        top: `calc(50% - 5px)`, // Center the dot vertically
        left: `calc(50% - 5px)`, // Center the dot horizontally
        transform: `translate(${cursorPosition.x - 50}%, ${cursorPosition.y - 50}%)`,
    };

  return (
     <>
        <div style={circleStyle}>
            <div style={dotStyle}></div>
        </div>
     </>
  )
}

export default Track;