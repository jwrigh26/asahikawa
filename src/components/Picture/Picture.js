import React from 'react';
import PropTypes from 'prop-types';
import css from './picture.scss';

const req = require.context('assets/images', true);

const renderWebpSource = (image, size, width) => {
  if (size && width) {
    try {
      const src1 = req(`./${image}-${size}_1x.webp`);
      const src2 = req(`./${image}-${size}_2x.webp`);
      return (
        <source
          media={`(min-width: ${width}px)`}
          srcSet={`${src1} 1x, ${src2} 2x`}
          type="image/webp"
          alt={`image-${image}`}
        />
      );
    } catch (error) {
      const orig = req(`./${image}.webp`);
      return <source srcSet={`${orig}`} type="image/webp" alt={`${error}`} />;
    }
  }

  const src1 = req(`./${image}-sm_1x.webp`);
  const src2 = req(`./${image}-sm_2x.webp`);
  return <source srcSet={`${src1} 1x, ${src2} 2x`} type="image/webp" alt={`image-${image}`} />;
};

const renderJpgSource = (image, size, width) => {
  if (size && width) {
    try {
      const src1 = req(`./${image}-${size}_1x.jpg`);
      const src2 = req(`./${image}-${size}_2x.jpg`);
      return (
        <source
          media={`(min-width: ${width}px)`}
          srcSet={`${src1} 1x, ${src2} 2x`}
          type="image/jpeg"
          alt={`image-${image}`}
        />
      );
    } catch (error) {
      const orig = req(`./${image}.jpg`);
      return <source srcSet={`${orig}`} type="image/jpeg" alt={`${error}`} />;
    }
  }

  const src1 = req(`./${image}-sm_1x.jpg`);
  const src2 = req(`./${image}-sm_2x.jpg`);
  return <source srcSet={`${src1} 1x, ${src2} 2x`} type="image/jpeg" alt={`image-${image}`} />;
};

const renderImage = image => {
  try {
    const src1 = req(`./${image}-sm_1x.jpg`);
    const src2 = req(`./${image}-md_1x.jpg`);
    const src3 = req(`./${image}-lg_1x.jpg`);
    const srcSet = `${src1} 600w, ${src2} 900w, ${src3} 1440w`;
    const src = src1;
    return <img srcSet={srcSet} src={src} type="image/jpeg" alt={`image-${image}`} />;
  } catch (error) {
    const orig = req(`./${image}.jpg`);
    return <img src={orig} type="image/jpeg" alt={`${error}`} />;
  }
};

const Picture = ({image}) => {
  return (
    <picture className={css.picture}>
      {renderWebpSource(image, 'lg', 901)}
      {renderWebpSource('suika', 'md', 601)}
      {renderWebpSource(image)}
      {renderJpgSource(image, 'lg', 901)}
      {renderJpgSource(image, 'md', 601)}
      {renderJpgSource(image)}
      {renderImage(image)}
    </picture>
  );
};

Picture.defaultProps = {
  image: 'not_found',
};

Picture.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Picture;
