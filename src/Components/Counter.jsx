import React, { useState, useEffect } from 'react';

function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerID;

    if (isRunning) {
          timerID = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timerID); 
    }

    return () => clearInterval(timerID); 
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning); 
  };

  const handleReset = () => {
    setSeconds(0); 
  };

  return (
    <div>
      <h2>Counter: {seconds} saniyə</h2>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
