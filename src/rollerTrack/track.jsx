import React, { useState } from 'react';

function Track () {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    
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

  return (
     <>
        <div style={circleStyle}>
        </div>
     </>
  )
}

export default Track;