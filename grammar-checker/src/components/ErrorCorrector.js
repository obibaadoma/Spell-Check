import React, { useState } from 'react';
import InputColumn from './InputColumn';
import ErrorSuggestion from './ErrorSuggestion';
import detectErrors from './errorDetection';

const ErrorCorrector = () => {
  const [userInput, setUserInput] = useState('');
  const [errorSuggestions, setErrorSuggestions] = useState({});
  const [correctedText, setCorrectedText] = useState('');

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    const errorSuggestions = detectErrors(userInput);
    setErrorSuggestions(errorSuggestions);
  };

  const handleSuggestionAcceptance = (suggestion) => {
    const correctedText = userInput.replace(suggestion.error.text, suggestion.suggestion.correctedText);
    setCorrectedText(correctedText);
  };

  return (
    <div className="error-corrector">
      <InputColumn
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter text here"
      />
      <InputColumn>
        {Object.keys(errorSuggestions).map((errorId) => (
          <ErrorSuggestion
            key={errorId}
            error={errorSuggestions[errorId]}
            onAccept={handleSuggestionAcceptance}
          />
        ))}
      </InputColumn>
      <InputColumn
        value={correctedText}
        readOnly
        placeholder="Corrected text will appear here"
      />
    </div>
  );
};

export default ErrorCorrector;