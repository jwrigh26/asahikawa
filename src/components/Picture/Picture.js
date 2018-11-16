import React from 'react';
import PropTypes from 'prop-types';
import css from './picture.scss';

const req = require.context('assets/images', true);

const haveImageSource = (image, size = 'sm', ext) => {
  try {
    req(`./${image}-${size}_1x.${ext}`);
    req(`./${image}-${size}_2x.${ext}`);
    return true;
  } catch (error) {
    return false;
  }
};

const haveImageSet = image => {
  try {
    req(`./${image}-sm_1x.jpg`);
    req(`./${image}-md_1x.jpg`);
    req(`./${image}-lg_1x.jpg`);
    return true;
  } catch (error) {
    return false;
  }
};

const getImageSet = image => {
  const src1 = req(`./${image}-sm_1x.jpg`);
  const src2 = req(`./${image}-md_1x.jpg`);
  const src3 = req(`./${image}-lg_1x.jpg`);
  return `${src1} 600w, ${src2} 900w, ${src3} 1440w`;
};

const renderImageSource = (image, size, width, ext) => {
  if (size && width) {
    const src1 = req(`./${image}-${size}_1x.${ext}`);
    const src2 = req(`./${image}-${size}_2x.${ext}`);
    return (
      <source
        media={`(min-width: ${width}px)`}
        srcSet={`${src1} 1x, ${src2} 2x`}
        type={`image/${ext}`}
        alt={`image-${image}`}
      />
    );
  }

  const src1 = req(`./${image}-sm_1x.${ext}`);
  const src2 = req(`./${image}-sm_2x.${ext}`);
  return <source srcSet={`${src1} 1x, ${src2} 2x`} type={`image/${ext}`} alt={`image-${image}`} />;
};

const renderImage = (image, classNames) => {
  const srcSet = haveImageSet(image) ? getImageSet(image) : null;
  const sizes = '(max-width: 600px) 600px, (max-width: 900px) 900px, 100vw';
  const innerProps = {
    className: [css.img, ...classNames].join(' '),
    src: req(`./${image}.jpg`),
    type: 'image/jpeg',
    alt: `image-${image}`,
  };
  return srcSet ? <img srcSet={srcSet} sizes={sizes} {...innerProps} /> : <img {...innerProps} />;
};

// convenience methods for jpg and webp

const haveJpgSource = (image, size = 'sm') => {
  return haveImageSource(image, size, 'jpg');
};

const haveWebpSource = (image, size = 'sm') => {
  return haveImageSource(image, size, 'webp');
};

const renderWebpSource = (image, size, width) => {
  return renderImageSource(image, size, width, 'webp');
};

const renderJpgSource = (image, size, width) => {
  return renderImageSource(image, size, width, 'jpg');
};

const Picture = ({image, classNames, pictureClassNames}) => {
  return (
    <picture className={[css.picture, ...pictureClassNames].join(' ')}>
      {haveWebpSource(image, 'lg') && renderWebpSource(image, 'lg', 900)}
      {haveWebpSource(image, 'md') && renderWebpSource(image, 'md', 600)}
      {haveWebpSource(image) && renderWebpSource(image)}
      {haveJpgSource(image, 'lg') && renderJpgSource(image, 'lg', 900)}
      {haveJpgSource(image, 'md') && renderJpgSource(image, 'md', 600)}
      {haveJpgSource(image) && renderJpgSource(image)}
      {renderImage(image, classNames)}
    </picture>
  );
};

Picture.defaultProps = {
  classNames: [],
  image: 'not_found',
  pictureClassNames: [],
};

Picture.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  pictureClassNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Picture;
