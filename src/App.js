import React from 'react';
import './App.css';
import Counter from './Counter';



function App() {
  return (
    <div className="App">
      <Counter initValue={1}/>
      <Counter initValue={100}/>
    </div>
  );
}

export default App;
