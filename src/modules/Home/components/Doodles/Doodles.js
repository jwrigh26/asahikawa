import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Picture from 'components/Picture/Picture';
import css from './doodles.scss';

const Doodles = ({images}) => {
  return (
    <Fragment>
      <div className={css.banner}>
        <h1 className={css.banner__title}>Doodles</h1>
        <span className={css.banner__subtitle}>A Collection of Drawings</span>
      </div>
      <ul className={css.list}>
        {images.map(image => (
          <li
            key={image.id}
            id={image.id}
            className={[css.list__item].join(' ')}
          >
            <Picture image={image.path} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

Doodles.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Doodles;