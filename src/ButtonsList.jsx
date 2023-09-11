import calcButtons from "./data/buttons.js";
import { evaluate } from "mathjs";

const ButtonList = ({ setInput, setResult, input }) => {
  const handleClick = (label) => {
    if (label === "=") {
      try {
        // Use External library method
        setResult(evaluate(input));
      } catch (error) {
        // Catch error
        setResult("Error");
      }
    } else if (label === "Clear") {
      // Clear the input and result
      setInput(0);
      setResult("");
    } else {
      // Append the clicked button value to the input
      setInput((prevInput) => prevInput + label);
    }
  };

  return (
    <div className="buttons-container">
      {calcButtons.map((button, index) => (
        <button
          key={index}
          id={button.label}
          onClick={() => handleClick(button.label)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
