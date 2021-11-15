import { useState } from 'react';
import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello.</h1>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
};
