import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Picture from 'components/Picture/Picture';
import {Link} from 'react-router-dom';
import css from './preciousRascals.scss';

const PreciousRascals = ({images}) => {
  return (
    <Fragment>
      <ul className={css.list}>
        {images.map(image => (
          <li key={image.id} id={image.id} className={css.list__item}>
            <Picture image={image.path} />
          </li>
        ))}
      </ul>
      <div className={css.footer}>
        <div className={css.footer__spacer} />
        <span className={css.footer__caption}>
          The drawing police are here, and they don't like your mermaid butt
        </span>
        <div className={css.footer__menu}>
          <div className={css.footer__menu__leading}>
            <Link className={css.link_inline} to={'/comics'}>
              <p className={css.text}>More Precious Rascals</p>
              <span>HERE!</span>
            </Link>
          </div>
          <div className={css.footer__menu__trailing}>
            <span className={css.date}>FEB. 16 2019</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PreciousRascals.propTypes = {
  images: PropTypes.array.isRequired,
};

export default PreciousRascals;
