import PropTypes from 'prop-types';
import css from 'components/FeedbackWidget/Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>good: {good}</li>
      <li className={css.statisticsItem}>neutral: {neutral}</li>
      <li className={css.statisticsItem}>bad: {bad}</li>
      <li className={css.statisticsItem}>total: {total}</li>
      <li className={css.statisticsItem}>
        positivePercentage: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.string,
};
