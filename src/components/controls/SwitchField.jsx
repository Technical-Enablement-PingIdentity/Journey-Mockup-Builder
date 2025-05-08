function SwitchField({ label, value, onChange }) {
  return (
    <div className="form-check form-switch mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        onChange={(e) => onChange(e.target.checked)}
        checked={value}
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
}

export default SwitchField;
