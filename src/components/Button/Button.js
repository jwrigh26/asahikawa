import React from 'react';
import PropTypes from 'prop-types';
import css from './button.scss';

const handleClick = callback => () => {
  return callback();
};

const Button = props => {
  const {onClick, disabled, children, className} = props;

  return (
    <button
      className={[css.button, ...className].join(' ')}
      disabled={disabled}
      onClick={handleClick(onClick)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: [],
  disabled: false,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
