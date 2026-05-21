import Display from "./Display";
import Keypad from "./Keypad";

function CalculatorContainer() {
  return (
    <div className="container-sm mx-auto mt-4 bg-dark p-4 rounded text-white">
      <Display value="0" />
      <Keypad />
    </div>
  );
}

export default CalculatorContainer;
