import React from 'react';
import RenderStatistics from './RenderStatistics';
class FeedbackWidget extends React.Component {
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
        <div>
          <h1>Please leave feedback</h1>

          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          {countTotalFeedback === 0 ? (
            'There is no feedback'
          ) : (
            <RenderStatistics
              state={this.state}
              total={countTotalFeedback}
              percentage={countPositiveFeedbackPercentage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
