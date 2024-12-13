import React, { useState, useEffect } from 'react'
export default function RealTime(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timerID = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timerID); // Təmizləmə
      };
    }, []);
  
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    return (
      <div>
        <h2>Saat: {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      </div>
    );
}