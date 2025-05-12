import { useState } from 'react';
import TextField from './TextField';
import CheckIcon from '../icons/CheckIcon';
import CancelIcon from '../icons/CancelIcon';

function UrlField({ label, value, onChange }) {
  const [currentValue, setCurrentValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (newValue) => {
    setCurrentValue(newValue);
    if (newValue === value) {
      setIsValid(true);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const confirmChange = () => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+()\\w]*)*' + // port and path (allow encoded characters and parentheses)
        '(\\?[;&a-z\\d%_.~()+=-]*)?' + // query string (allow encoded characters and parentheses)
        '(\\#[-a-z\\d_]*)?$',
      'i' // fragment locator
    );
    if (!urlPattern.test(currentValue)) {
      setIsValid(false);
    } else {
      onChange(currentValue);
      setIsEditing(false);
      setIsValid(true);
      document.activeElement.blur();
    }
  };

  const cancelChange = () => {
    document.activeElement.blur();
    setCurrentValue(value);
    setIsValid(true);
    setIsEditing(false);
  };

  const checkKey = (key) => {
    if (key === 'Enter') {
      confirmChange();
    } else if (key === 'Escape') {
      cancelChange();
    }
  };

  return (
    <div className="position-relative">
      <div className={isEditing ? ' url-field-editing' : ''}>
        <TextField
          label={label}
          value={currentValue}
          onChange={handleChange}
          onKeyUp={checkKey}
        />
      </div>
      {isEditing && (
        <div className="position-absolute" style={{ top: '38px', right: '0' }}>
          <button
            className="url-field-button me-2 border-0 confirm-button"
            style={{ width: '20px', height: '20px' }}
            onClick={confirmChange}
          >
            <CheckIcon />
          </button>
          <button
            className="url-field-button border-0 cancel-button"
            style={{ width: '20px', height: '20px' }}
            onClick={cancelChange}
          >
            <CancelIcon />
          </button>
        </div>
      )}
      {!isValid && (
        <div className="url-invalid text-danger mb-3">
          Please enter a valid URL
        </div>
      )}
    </div>
  );
}

export default UrlField;
