import { Component } from 'react';
import Statistics from 'components/FeedbackWidget/Statistics/Statistics';
// import FeedbackOptions from 'components/FeedbackWidget/Button';
import Section from 'components/FeedbackWidget/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatistics = property => {
    this.setState(prevState => {
      const value = prevState[property];
      return {
        [property]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();

    if (!total) {
      return 0;
    }

    const value = this.state.good;
    const result = (value / total) * 100;
    return Math.round(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <div>
            <button type="button" onClick={() => this.handleStatistics('good')}>
              Good
            </button>
            <button
              type="button"
              onClick={() => this.handleStatistics('neutral')}
            >
              Neutral
            </button>
            <button type="button" onClick={() => this.handleStatistics('bad')}>
              Bad
            </button>
          </div>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
