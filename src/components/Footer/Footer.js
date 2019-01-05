import React from 'react';
import PropTypes from 'prop-types';
import css from './footer.scss';

const Footer = ({className}) => {
  return <div className={[css.footer, ...className].join(' ')}>Footer</div>;
};

Footer.defaultProps = {
  className: [],
};

Footer.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Footer;
