import React from 'react';
import Card from './card';

function App() {
  const [count, setCount] = React.useState(0);
  const [col, setCol] = React.useState('blue');
  
  return(
    <div>
      <div></div>
      <Card count={count} setCount={setCount} col={col} setCol={setCol}/>
    </div>
  );
}

export default App;