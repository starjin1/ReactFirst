import PropTypes from 'prop-types';

function Button({ text, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
Button.prototype = {
  text: PropTypes.string.isRequired,
};
export default Button;
