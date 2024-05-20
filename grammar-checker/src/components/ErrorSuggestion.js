import React from 'react';

const ErrorSuggestion = ({ error, onAccept }) => {
  return (
    <div className="error-suggestion">
      <span className="error-message">{error.message}</span>
      <button onClick={() => onAccept(error.suggestion)}>Accept</button>
    </div>
  );
};

export default ErrorSuggestion;