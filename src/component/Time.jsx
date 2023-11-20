import { useState, useEffect } from 'react'

const Time = () => {

    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(currentTime, 1000);
    }, []);

    function currentTime(){
        let t = new Date();
        setTime(t.toLocaleTimeString());
    }

  return (
    <div className='clock'>{time}</div>
  )
}

export default Time