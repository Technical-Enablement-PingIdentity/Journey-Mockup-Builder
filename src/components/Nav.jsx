function Nav({ journeyOptions }) {
  return (
    <nav
      className="navbar navbar-expand-sm mb-5"
      style={{ backgroundColor: journeyOptions.navbarBackgroundColor }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={journeyOptions.pageLogo}
            alt="Logo"
            width={journeyOptions.pageLogoWidth}
            height="auto"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {journeyOptions.navLink1 && (
              <a className="nav-link active" aria-current="page" href="#">
                {journeyOptions.navLink1}
              </a>
            )}
            {journeyOptions.navLink2 && (
              <a className="nav-link me-auto" href="#">
                {journeyOptions.navLink2}
              </a>
            )}
          </div>
          {journeyOptions.navLink3 && (
            <a className="nav-link" href="#">
              {journeyOptions.navLink3}
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
