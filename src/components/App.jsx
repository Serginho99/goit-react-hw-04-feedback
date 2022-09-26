import Statistics from './statistics/Statistics';
import Section from './section/Section';
import React from 'react';
import FeedBackOptions from './feedback/FeedBackOptions';
import Notification from './notification/Notification';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return { [propertyName]: value + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    if (!total) {
      return;
    }
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
