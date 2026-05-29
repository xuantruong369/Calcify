import Button from "./Button";

function Keypad({ handleButtonClick }) {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "=",
    "AC",
    "+",
  ];

  return (
    <div className="row row-cols-4 g-2 mt-3">
      {buttons.map((btn) => (
        <div key={btn} className="col">
          <Button label={btn} onClick={() => handleButtonClick(btn)} />
        </div>
      ))}
    </div>
  );
}

export default Keypad;
