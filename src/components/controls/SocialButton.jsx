function SocialButton({ icon, name, color, borderColor }) {
  return (
    <button
      className="social-button w-100 d-flex align-items-center justify-content-center fw-light mb-2 border-1 rounded-pill"
      style={{ color, borderColor }}
    >
      <img
        src={icon}
        alt={`${name} icon`}
        className="me-2"
        width="21px"
        height="21px"
      />
      Sign in with {name}
    </button>
  );
}

export default SocialButton;
