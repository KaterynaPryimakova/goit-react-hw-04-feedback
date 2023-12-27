import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
          type="button"
          key={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};
