import React, { useState } from 'react';

const Screen = () => {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleButtonClick = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get Screen Size</button>
      <p>Screen Width: {screenSize.width}px</p>
      <p>Screen Height: {screenSize.height}px</p>
    </div>
  );
};

export default Screen;
