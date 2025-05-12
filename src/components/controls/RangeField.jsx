function RangeField({ label, value, onChange, min, max }) {
  return (
    <div className="mb-3">
      <label className="form-label mb-1">{label}</label>
      <input
        type="range"
        className="form-range"
        min={min || 0}
        max={max || 400}
        step="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default RangeField;
