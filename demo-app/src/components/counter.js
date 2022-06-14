import { useState } from "react";
import "./Counter.css";
const Counter = ({ counter }) => {
  const [count, setCounter] = useState(counter);

  const increse = () => {
    setCounter(count + 1);
  };

  const decrese = () => {
    setCounter(count - 1);
    if (count === 0) {
      setCounter(0);
    }
  };

  const makeDouble = () => {
    setCounter(2 * count);
  };

  return (
    <div>
      <p>
        {count % 2 === 0 ? (
          <h4 style={{color:"green"}}>{count}</h4>
        ) : (
          <h4 style={{color:"red"}}>{count}</h4>
        )}
         
      </p>

      <button onClick={increse}>
        Increment By 1
      </button>

      <button onClick={decrese}>
        Decrement By 1
      </button>

      <button onClick={makeDouble}>
        Double the count
      </button>

    </div>
  );
};

export default Counter;
