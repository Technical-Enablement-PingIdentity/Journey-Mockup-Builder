function TextField({ label, value, onChange, onKeyUp }) {
  return (
    <div className="mb-3">
      <label className="form-label mb-1">{label}</label>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={(e) => onKeyUp && onKeyUp(e.key)}
      />
    </div>
  );
}

export default TextField;
