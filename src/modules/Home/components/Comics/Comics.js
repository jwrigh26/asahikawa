import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import css from './comics.scss';

const Comics = ({images}) => {
  return (
    <Fragment>
      <div className={css.banner}>
        <h1 className={css.banner__title}>Comics</h1>
        <span className={css.banner__subtitle}>New strips all the time!</span>
      </div>
      <ul className={css.list}>
        {images.map(image => (
          <li
            key={image.id}
            id={image.id}
            className={[css.list__item, image.cssImage].join(' ')}
          >
            <span className={image.cssOverlay} />
            <span className={image.cssCaption}>{image.caption}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

Comics.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Comics;
