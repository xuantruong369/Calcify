function Button({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-secondary btn-lg w-100"
    >
      {label}
    </button>
  );
}

export default Button;
