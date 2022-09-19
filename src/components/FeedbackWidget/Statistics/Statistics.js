const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total === 0
        ? 'There is no feedback'
        : `good: ${good}
          neutral: ${neutral}
          bad: ${bad}
          total: ${total}
          positivePercentage: ${positivePercentage}%`}
    </div>
  );
};

export default Statistics;
