import Button from '../Button/Button';

const Controls = props => {
    return (
      <div>
        <Button onClick={props.start}>START</Button>
        <Button onClick={props.stop}>STOP</Button>
        <Button onClick={props.reset}>RESET</Button>

      </div>
    );
};

export default Controls;