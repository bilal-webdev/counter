import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const decrement = (event) => {
    setCount(count - 1);
  };

  const increment = (event) => {
    setCount(count + 1);
  };

  const changeColor = () => {
    if (count < 5) {
      return "rgb(241, 83, 83)";
    }
    if (count > 100) {
      return "rgb(46, 231, 46)";
    }
    return "white";
  };

  return (
    <div className="App">
      <div className="counter">
        <Button action={decrement} title={"-"} />
        <div className="showCount">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: changeColor(),
            }}
          >
            {count}
          </h1>
        </div>
        <Button action={increment} title={"+"} />
      </div>
    </div>
  );
}

export default App;
