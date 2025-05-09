import Divider from './controls/Divider';
import SocialButton from './controls/SocialButton';
import Nav from './Nav';
import Eyecon from './icons/Eyecon';

function JourneyPreview({ journeyOptions }) {
  const mainStyle = {};

  if (journeyOptions.pageBackgroundType === 'image') {
    mainStyle.backgroundImage = `url(${journeyOptions.pageBackgroundImage})`;
  } else {
    mainStyle.backgroundColor = journeyOptions.pageBackgroundColor;
  }

  return (
    <div id="wrapper">
      <div className="journey-preview border" style={mainStyle}>
        <Nav journeyOptions={journeyOptions} />
        <main className="site-content d-flex justify-content-center align-items-start">
          <div
            className="form-container p-4 w-100 mb-5"
            style={{ backgroundColor: journeyOptions.formBackgroundColor }}
          >
            <div className="d-flex justify-content-center mb-2">
              <img className="form-logo" src={journeyOptions.formLogo} />
            </div>
            <h2
              className="text-center fw-light"
              style={{ color: journeyOptions.formTextColor }}
            >
              {journeyOptions.formHeaderText}
            </h2>
            <h6
              className="text-center mb-4 fw-light lh-base"
              style={{ color: journeyOptions.formTextColor }}
            >
              {journeyOptions.formSubHeaderText}
            </h6>
            {journeyOptions.showSignInWithApple && (
              <SocialButton
                icon="https://img.icons8.com/ios-filled/344/mac-os.png"
                name="Apple"
                color="rgb(0, 0, 0)"
                borderColor="rgb(0, 0, 0)"
              />
            )}
            {journeyOptions.showSignInWithGoogle && (
              <SocialButton
                icon="https://developers.google.com/static/identity/images/g-logo.png"
                name="Google"
                color="rgb(117, 117, 117)"
                borderColor="rgb(221, 221, 221)"
              />
            )}
            {journeyOptions.showSignInWithFacebook && (
              <SocialButton
                icon="https://img.icons8.com/fluency/452/facebook-new.png"
                name="Google"
                color="rgb(24, 119, 242)"
                borderColor="rgb(24, 119, 242)"
              />
            )}
            {journeyOptions.showDivider && (
              <Divider color={journeyOptions.formTextColor} />
            )}
            {!journeyOptions.showDivider &&
              (journeyOptions.showSignInWithApple ||
                journeyOptions.showSignInWithGoogle ||
                journeyOptions.showSignInWithFacebook) && <br />}
            {journeyOptions.showUsernameField && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={journeyOptions.usernamePlaceholder}
                />
              </div>
            )}
            {journeyOptions.showPasswordField && (
              <div className="mb-3 position-relative">
                <input
                  type="password"
                  className="form-control"
                  placeholder={journeyOptions.passwordPlaceholder}
                />
                <div
                  className="position-absolute"
                  style={{
                    width: '15px',
                    height: '15px',
                    top: '10px',
                    right: '15px',
                  }}
                >
                  <Eyecon />
                </div>
              </div>
            )}
            {journeyOptions.showSubmitButton && (
              <button
                className="w-100 d-flex justify-content-center fw-light mb-2 border-1 rounded-pill"
                style={{
                  borderColor: journeyOptions.submitButtonBackgroundColor,
                  backgroundColor: journeyOptions.submitButtonBackgroundColor,
                  color: journeyOptions.submitButtonTextColor,
                }}
              >
                {journeyOptions.submitButtonText}
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default JourneyPreview;
