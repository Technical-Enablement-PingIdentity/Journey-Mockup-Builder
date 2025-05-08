function Divider({ color }) {
  return (
    <div className="row divider pt-2 pb-3">
      <div className="col-5 d-flex align-items-center">
        <div className="divider-line" style={{ backgroundColor: color }}></div>
      </div>
      <div className="col-2 text-center" style={{ color }}>
        or
      </div>
      <div className="col-5 d-flex align-items-center">
        <div className="divider-line" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}

export default Divider;
