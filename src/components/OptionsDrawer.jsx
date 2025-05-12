import ColorField from './controls/ColorField';
import PageBackgroundTypeSelector from './PageBackgroundTypeSelector';
import SwitchField from './controls/SwitchField';
import TextField from './controls/TextField';
import UrlField from './controls/UrlField';

function OptionsDrawer({ journeyOptions, setJourneyOptions }) {
  const updateOptions = (key, value) => {
    setJourneyOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  return (
    <div className="p-3">
      <UrlField
        label="Page Logo"
        value={journeyOptions.pageLogo}
        onChange={(newValue) => updateOptions('pageLogo', newValue)}
      />
      <ColorField
        label="Navbar Background Color"
        value={journeyOptions.navbarBackgroundColor}
        onChange={(newValue) =>
          updateOptions('navbarBackgroundColor', newValue)
        }
      />
      <TextField
        label="First Link"
        value={journeyOptions.navLink1}
        onChange={(newValue) => updateOptions('navLink1', newValue)}
      />
      <TextField
        label="Second Link"
        value={journeyOptions.navLink2}
        onChange={(newValue) => updateOptions('navLink2', newValue)}
      />
      <TextField
        label="Right Link"
        value={journeyOptions.navLink3}
        onChange={(newValue) => updateOptions('navLink3', newValue)}
      />
      <PageBackgroundTypeSelector
        value={journeyOptions.pageBackgroundType}
        onChange={(e) => updateOptions('pageBackgroundType', e.target.value)}
      />
      {journeyOptions.pageBackgroundType === 'color' && (
        <ColorField
          label="Page Background Color"
          value={journeyOptions.pageBackgroundColor}
          onChange={(newValue) =>
            updateOptions('pageBackgroundColor', newValue)
          }
        />
      )}
      {journeyOptions.pageBackgroundType === 'image' && (
        <UrlField
          label="Page Background Image"
          value={journeyOptions.pageBackgroundImage}
          onChange={(newValue) =>
            updateOptions('pageBackgroundImage', newValue)
          }
        />
      )}
      <UrlField
        label="Form Logo"
        value={journeyOptions.pageLogo}
        onChange={(newValue) => updateOptions('formLogo', newValue)}
      />
      <TextField
        label="Form Header"
        value={journeyOptions.formHeaderText}
        onChange={(newValue) => updateOptions('formHeaderText', newValue)}
      />
      <TextField
        label="Form Sub Header"
        value={journeyOptions.formSubHeaderText}
        onChange={(newValue) => updateOptions('formSubHeaderText', newValue)}
      />
      <ColorField
        label="Form Text Color"
        value={journeyOptions.formTextColor}
        onChange={(newValue) => updateOptions('formTextColor', newValue)}
      />
      <ColorField
        label="Form Background Color"
        value={journeyOptions.formBackgroundColor}
        onChange={(newValue) => updateOptions('formBackgroundColor', newValue)}
      />
      <SwitchField
        label="Show Sign In with Apple"
        value={journeyOptions.showSignInWithApple}
        onChange={(newValue) => updateOptions('showSignInWithApple', newValue)}
      />
      <SwitchField
        label="Show Sign In with Google"
        value={journeyOptions.showSignInWithGoogle}
        onChange={(newValue) => updateOptions('showSignInWithGoogle', newValue)}
      />
      <SwitchField
        label="Show Sign In with Facebook"
        value={journeyOptions.showSignInWithFacebook}
        onChange={(newValue) =>
          updateOptions('showSignInWithFacebook', newValue)
        }
      />
      <SwitchField
        label="Show Divider"
        value={journeyOptions.showDivider}
        onChange={(newValue) => updateOptions('showDivider', newValue)}
      />
      <SwitchField
        label="Show Username Field"
        value={journeyOptions.showUsernameField}
        onChange={(newValue) => updateOptions('showUsernameField', newValue)}
      />
      {journeyOptions.showUsernameField && (
        <TextField
          label="Username Placeholder"
          value={journeyOptions.usernamePlaceholder}
          onChange={(newValue) =>
            updateOptions('usernamePlaceholder', newValue)
          }
        />
      )}
      <SwitchField
        label="Show Password Field"
        value={journeyOptions.showPasswordField}
        onChange={(newValue) => updateOptions('showPasswordField', newValue)}
      />
      {journeyOptions.showPasswordField && (
        <TextField
          label="Password Placeholder"
          value={journeyOptions.passwordPlaceholder}
          onChange={(newValue) =>
            updateOptions('passwordPlaceholder', newValue)
          }
        />
      )}
      <SwitchField
        label="Show Submit Button"
        value={journeyOptions.showSubmitButton}
        onChange={(newValue) => updateOptions('showSubmitButton', newValue)}
      />
      {journeyOptions.showSubmitButton && (
        <>
          <TextField
            label="Submit Button Text"
            value={journeyOptions.submitButtonText}
            onChange={(newValue) => updateOptions('submitButtonText', newValue)}
          />
          <ColorField
            label="Submit Button Background Color"
            value={journeyOptions.submitButtonBackgroundColor}
            onChange={(newValue) =>
              updateOptions('submitButtonBackgroundColor', newValue)
            }
          />
          <ColorField
            label="Submit Button Text Color"
            value={journeyOptions.submitButtonTextColor}
            onChange={(newValue) =>
              updateOptions('submitButtonTextColor', newValue)
            }
          />
        </>
      )}
    </div>
  );
}

export default OptionsDrawer;
