import React, { useState, useEffect } from 'react';

function Timer() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerID;
    if (isRunning && timeLeft > 0) {
      timerID = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === 1) {
            clearInterval(timerID);
            alert('Taymer bitdi!');
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      alert('Taymer bitdi!');
    }

    return () => clearInterval(timerID);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
  
      const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };
  const handleHoursChange = (event) => {
    setHours(Math.min(24, Math.max(0, event.target.value)));
  };

  const handleMinutesChange = (event) => {
    setMinutes(Math.min(59, Math.max(0, event.target.value)));
  };

  const handleSecondsChange = (event) => {
    setSeconds(Math.min(59, Math.max(0, event.target.value)));
  };

  return (
    <div>
      <h2>Taymer</h2>
      <div>
        <label>Saat: </label>
        <input 
          type="number" 
          value={hours} 
          onChange={handleHoursChange}
          min="0" 
          max="23" 
        />
      </div>
      <div>
        <label>Dəqiqə: </label>
        <input 
          type="number" 
          value={minutes} 
          onChange={handleMinutesChange}
          min="0" 
          max="59" 
        />
      </div>
      <div>
        <label>Saniyə: </label>
        <input 
          type="number" 
          value={seconds} 
          onChange={handleSecondsChange}
          min="0" 
          max="59" 
        />
      </div>
      <h3>Qalan vaxt: {timeLeft} saniyə</h3>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pauza' : 'Başla'}
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Taymer Tətbiqi</h1>
      <Timer />
    </div>
  );
}

export default App;
