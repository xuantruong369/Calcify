import Display from "./Display";
import Keypad from "./Keypad";
import HistoryPanel from "./HistoryPanel";
import { useCalculator } from "../../hooks/useCalculator";

function CalculatorContainer() {
  const { display, loading, error, histories, handleButtonClick } =
    useCalculator();
  return (
    <div className="container-sm mx-auto mt-4 bg-dark p-4 rounded text-white">
      <Display value={display} />
      <Keypad handleButtonClick={handleButtonClick} />
      <HistoryPanel histories={histories} />
      {loading && <p className="text-white mt-2">Calculating...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default CalculatorContainer;
