import React from 'react';
import PropTypes from 'prop-types';
import css from './footer.scss';

const Footer = ({classNames}) => {
  return <div className={[css.footer, ...classNames].join(' ')}>Footer</div>;
};

Footer.defaultProps = {
  className: [],
};

Footer.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Footer;
