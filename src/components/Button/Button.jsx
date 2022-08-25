import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className="loadMore" type="button" onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};