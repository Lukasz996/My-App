import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doExampleAction } from '../actions/ExampleActions';

const ExampleComponent = () => {
  const exampleData = useSelector((state) => state.example);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(doExampleAction('Nowe dane'));
  };

  return (
    
    <div>
        <h1>Hello</h1>
      <p>{exampleData}</p>
      <button onClick={handleClick}>Wywołaj akcję</button>
    </div>
  );
};

export default ExampleComponent;