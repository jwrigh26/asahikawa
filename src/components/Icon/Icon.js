import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import css from './icon.scss';

const missing = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';

const createPaths = group => {
  return group.map(d => {
    return <path d={d} key={uuid.v4()} />;
  });
};

const Icon = ({className, fill, svg}) => {
  const {group, height, label, preserveAspectRatio, stroke, transform, width} = svg;
  return (
    <svg
      className={`${className.join(' ')} ${css.icon}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      aria-labelledby="title"
    >
      <title>{label}</title>
      {group.length > 1 && (
        <g
          transform={transform}
          fill={fill}
          stroke={stroke}
          preserveAspectRatio={preserveAspectRatio}
        >
          {createPaths(group)}
        </g>
      )}
      {group.length === 1 && <path fill={fill} d={group[0]} key={uuid.v4()} />}
    </svg>
  );
};

Icon.defaultProps = {
  className: [],
  fill: null,
  svg: {
    group: [missing],
    height: '24',
    label: 'alert',
    width: '24',
    transfrom: '',
    preserveAspectRatio: 'xMidYMid meet',
    stroke: 'none',
  },
};

Icon.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
  fill: PropTypes.string,
  svg: PropTypes.object.isRequired,
};

export default Icon;
