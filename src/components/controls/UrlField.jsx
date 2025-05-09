import { useState } from 'react';
import TextField from './TextField';
import CheckIcon from '../icons/CheckIcon';
import CancelIcon from '../icons/CancelIcon';

import useUrl from '../hooks/useUrl';

function UrlField({ label, value, onChange }) {
  const [currentValue, setCurrentValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const { isValidUrl } = useUrl();

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
    if (!isValidUrl(currentValue)) {
      setIsValid(false);
    } else {
      onChange(currentValue);
      setIsEditing(false);
    }
  };

  const cancelChange = () => {
    setCurrentValue(value);
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
