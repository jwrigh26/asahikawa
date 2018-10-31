import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({image}) => {
  return <div />;
};

Picture.defaultProps = {
  image: 'not_found',
};

Picture.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Picture;
