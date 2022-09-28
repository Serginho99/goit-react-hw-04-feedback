import Statistics from './statistics/Statistics';
import Section from './section/Section';
import FeedBackOptions from './feedback/FeedBackOptions';
import Notification from './notification/Notification';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(propertyName) {
    switch (propertyName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage(total, good) {
    if (!total) {
      return;
    }
    const percentage = Math.round((good / total) * 100);
    return percentage;
  }

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total, good)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// export default class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = propertyName => {
//     this.setState(prevState => {
//       const value = prevState[propertyName];
//       return { [propertyName]: value + 1 };
//     });
//   };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// countPositiveFeedbackPercentage = (total, good) => {
//   if (!total) {
//     return;
//   }
//   const percentage = Math.round((good / total) * 100);
//   return percentage;
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage(
//       total,
//       good
//     );
//     const options = Object.keys(this.state);
// return (
//   <>
//     <Section title="Please leave feedback">
//       <FeedBackOptions
//         options={options}
//         onLeaveFeedback={this.onLeaveFeedback}
//       />
//     </Section>
//     <Section title="Statistics">
//       {total > 0 ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={positivePercentage}
//         />
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//     </Section>
//   </>
// );
//   }
// }
