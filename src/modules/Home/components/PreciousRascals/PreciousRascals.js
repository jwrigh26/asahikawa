import React from 'react';
import Picture from 'components/Picture/Picture';
import PropTypes from 'prop-types';
import css from './preciousRascals.scss';

const PreciousRascals = ({images}) => {
  return (
    <ul className={css.preciousRascals}>
      {images.map(image => (
        <li id={image.id} className={css.preciousRascals__panel}>
          <Picture image={image.path} />
        </li>
      ))}
    </ul>
  );
};

PreciousRascals.propTypes = {
  images: PropTypes.array.isRequired,
};

export default PreciousRascals;
