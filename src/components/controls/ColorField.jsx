function ColorField({ label, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label mb-1">{label}</label>
      <input
        className="form-control"
        style={{ height: '46px' }}
        type="color"
        value={value}
        onInput={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default ColorField;
