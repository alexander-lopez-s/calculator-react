import { useState } from "react";
import "./App.css";
import ButtonList from "../src/ButtonsList"
import Screen from "../src/Screen";

const App = () => {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState("");

  return (
    <div className="calculator">
      <Screen input={input} result={result} />
      <ButtonList setInput={setInput} setResult={setResult} input={input} />
    </div>
  );
};

export default App;
