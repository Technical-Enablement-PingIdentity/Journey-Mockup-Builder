import { useState } from 'react';

import JourneyPreview from './components/JourneyPreview';
import OptionsDrawer from './components/OptionsDrawer';

function App() {
  const [journeyOptions, setJourneyOptions] = useState({
    pageLogo: 'https://demo.bxindustry.org/company/logo.svg',
    navLink1: 'About',
    navLink2: 'Investors',
    navLink3: 'Register',
    navbarBackgroundColor: '#ffffff',
    pageBackgroundType: 'image',
    pageBackgroundImage: 'https://demo.bxindustry.org/company/banner.png',
    pageBackgroundColor: '#002aec',
    formLogo: 'https://demo.bxindustry.org/company/logo.svg',
    formBackgroundColor: '#ffffff',
    formTextColor: '#002aec',
    formHeaderText: 'Sign in',
    formSubHeaderText:
      'Provide Username and Password or select your own Identity Provider!',
    showSignInWithApple: true,
    showSignInWithGoogle: true,
    showSignInWithFacebook: true,
    showDivider: true,
    showUsernameField: true,
    showPasswordField: true,
    showSubmitButton: true,
    usernamePlaceholder: 'User Name',
    passwordPlaceholder: 'Password',
    submitButtonText: 'Next',
    submitButtonBackgroundColor: '#ff0000',
    submitButtonTextColor: '#ffffff',
  });
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-sm-8">
          <JourneyPreview journeyOptions={journeyOptions} />
        </div>
        <div className="col-sm-4 drawer overflow-auto">
          <OptionsDrawer
            journeyOptions={journeyOptions}
            setJourneyOptions={setJourneyOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
