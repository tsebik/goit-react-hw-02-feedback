const FeedbackOptions = ({
  options,
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedbackGood}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedbackNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedbackBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
