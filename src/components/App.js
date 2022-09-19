import React from 'react';
import Statistics from 'components/FeedbackWidget/Statistics';
import FeedbackOptions from 'components/FeedbackWidget/Button';
import Section from 'components/FeedbackWidget/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round(
      (good * 100) / (neutral + bad + good)
    );

    return (
      <div>
        <Section title="Please leave feedback" />

        <FeedbackOptions
          options={this.state}
          onLeaveFeedbackGood={this.handleGood}
          onLeaveFeedbackNeutral={this.handleNeutral}
          onLeaveFeedbackBad={this.handleBad}
        />

        <div>
          <h2>Statistics</h2>

          {countTotalFeedback === 0 ? (
            'There is no feedback'
          ) : (
            <Statistics
              state={this.state}
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
