import { Component } from 'react';
import Statistics from 'components/FeedbackWidget/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackWidget/Button/Button';
import Section from 'components/FeedbackWidget/Section/Section';
import Notification from 'components/FeedbackWidget/NotificationM/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatistics = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const value = this.state.good;
    const total = this.countTotalFeedback();

    if (!total) {
      return 0;
    }

    const result = (value / total) * 100;
    return Math.round(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { state, handleStatistics } = this;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={handleStatistics} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
