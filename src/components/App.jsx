import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const OPTIONS = ['Good', 'Neutral', 'Bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.warn(`There is no option ${option}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedback = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  return (
    <div>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
