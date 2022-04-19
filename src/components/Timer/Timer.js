import Button from '../Button/Button'
import styles from './Timer.module.scss'


const Timer = () => {
  return (
    <div>
      <h1 className={styles.timer}>TIMER HERE</h1>
      <div className={styles.buttons}>
      <Button>START</Button>
      <Button>STOP</Button>
      <Button>RESET</Button>
      </div>
    </div>
  )
}

export default Timer