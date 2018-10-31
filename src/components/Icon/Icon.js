import React from 'react';
import PropTypes from 'prop-types';
import style from './icon.scss';

const Icon = ({fill, height, label, path, styles, width}) => {
  return (
    <svg
      className={`${styles.join(' ')} ${style.icon}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-labelledby="title"
    >
      <title>{label}</title>
      <path fill={fill} d={path} />
    </svg>
  );
};

Icon.defaultProps = {
  className: 'icon',
  fill: '#000',
  height: '24',
  label: 'icon',
  path: '',
  styles: [],
  width: '24',
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  styles: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.string.isRequired,
};

export default Icon;

/*

<header className={styles.header} router={router}>
              Header
              <Icon
                path={alien.path}
                label={alien.label}
                fill={'#fff'}
                styles={[other.green, other.padding]}
              />
            </header>*/
