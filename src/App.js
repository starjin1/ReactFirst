import Button from './Button';
import TextStyle from './App.module.css';
import { useState, useEffect } from 'react';
import BtnStyles from './Button.module.css';

function Practice01() {
  useEffect(() => {
    console.log('CALL THE API.....');
  }, []);
  const [count, setCount] = useState(0);
  const countUpBtn = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count !== 0) {
      console.log('run counter');
    }
  }, [count]);

  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value !== '' && value.length > 5) {
      console.log('Search For', value);
    }
  }, [value]);
  useEffect(() => {
    console.log('value and count run');
  }, [value, count]);
  useEffect(() => {
    console.log('created');
    return () => console.log('bye');
  }, []);
  return (
    <div>
      <div className='App'>
        <input
          value={value}
          onChange={onChange}
          types='text'
          placeholder='input text'
        ></input>
        <h2>Check Value : {value}</h2>
        <h1 className={TextStyle.title}>Welcome ReactJs : {count}</h1>
        <Button
          className={BtnStyles.btn}
          onClick={countUpBtn}
          text='Click me'
        />
      </div>
    </div>
  );
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Practice01 /> : null}
      <Button
        onClick={onClick}
        text={showing ? 'Hide' : 'Show'}
        className={BtnStyles.changeBtn}
      ></Button>
    </div>
  );
}

export default App;
