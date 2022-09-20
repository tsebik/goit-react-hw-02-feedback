import PropTypes from 'prop-types';
import css from 'components/FeedbackWidget/Button/Button.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <ul className={css.btnList}>
      {keys.map(key => (
        <li key={key}>
          <button
            type="button"
            onClick={() => onLeaveFeedback(key)}
            className={css.btn}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
