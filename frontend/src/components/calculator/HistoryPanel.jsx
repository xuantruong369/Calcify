function HistoryPanel({ histories }) {
  return (
    <div>
      <h2>Histories</h2>

      {histories.map((item, index) => (
        <div key={index}>
          {item.expression} = {item.result}
        </div>
      ))}
    </div>
  );
}

export default HistoryPanel;
