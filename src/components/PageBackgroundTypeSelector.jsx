function PageBackgroundTypeSelector({ value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label mb-1 d-block">Page Background Type</label>
      <div className="form-check form-check-inline">
        <input
          id="pageBackgroundImage"
          className="form-check-input"
          name="pageBackgroundType"
          type="radio"
          value="image"
          checked={value === 'image'}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="pageBackgroundImage">
          Image
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          id="pageBackgroundColor"
          className="form-check-input"
          name="pageBackgroundType"
          type="radio"
          value="color"
          checked={value === 'color'}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="pageBackgroundColor">
          Color
        </label>
      </div>
    </div>
  );
}

export default PageBackgroundTypeSelector;
