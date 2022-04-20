import Controls from '../Controls/Controls'

import styles from './Timer.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'





const Timer = () => {

  


  const [timer, setTimer] = useState(setInterval(() => {}, 1000));

  const [time, setTime] = useState(0);

  //let milliseconds = time.getMilliseconds()


  let milliseconds = String(time).slice(-3);
  let seconds = String(Math.floor(time / 1000)).padStart(2, "0");
  let minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  let hours = String(Math.floor(minutes / 60)).padStart(2, "0");
  
  const start = () => {
    
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  const stop = () => {
    clearInterval(timer);

  }
 
  const reset = () => {
    setTime(0)
  }


  return (
    <div>
      <h1 className={styles.timer}>{hours}:{minutes}:{seconds}.{milliseconds} </h1>
      <div className={styles.buttons}>
      <Controls start={start} stop={stop} reset={reset} />
      </div>
    </div>
  )
}

export default Timer