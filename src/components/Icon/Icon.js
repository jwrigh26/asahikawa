import React from 'react';
import PropTypes from 'prop-types';
import css from './icon.scss';

const missing = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';

const Icon = ({fill, svg, className}) => {
  const {width, height, d, label} = svg;
  return (
    <svg
      className={`${className.join(' ')} ${css.icon}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-labelledby="title"
    >
      <title>{label}</title>
      <path fill={fill} d={d} />
    </svg>
  );
};

Icon.defaultProps = {
  className: [],
  fill: null,
  svg: {width: '24', height: '24', d: missing, label: 'alert'},
};

Icon.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
  fill: PropTypes.string,
  svg: PropTypes.object.isRequired,
};

export default Icon;
