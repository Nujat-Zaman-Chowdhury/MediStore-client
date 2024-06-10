import  { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);
    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      };
    return (
        <div className='font-poppins text-blue-400 font-bold'>
            {formatTime(time)}
        </div>
    );
};

export default DigitalClock;