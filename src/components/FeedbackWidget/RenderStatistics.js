const RenderStatistics = ({ state, total, percentage }) => {
  return (
    <div>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage} %</p>
    </div>
  );
};

export default RenderStatistics;
