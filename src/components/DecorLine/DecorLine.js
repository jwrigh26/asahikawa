import React from 'react';
import PropTypes from 'prop-types';
import css from './decorLine.scss';

const desireStyle = [
  {id: 'f8760880-4046-11e9-b210-d663bd873d93', style: css.desire_start},
  {id: 'f8760af6-4046-11e9-b210-d663bd873d93', style: css.desire_middle},
  {id: 'f8760fc4-4046-11e9-b210-d663bd873d93', style: css.desire_end},
];

const greyStyle = [
  {id: 'c8d89e96-40e9-11e9-b210-d663bd873d93', style: css.grey_start},
  {id: 'c8d8a198-40e9-11e9-b210-d663bd873d93', style: css.grey_middle},
  {id: 'c8d8a38c-40e9-11e9-b210-d663bd873d93', style: css.grey_end},
];

const DecorLine = ({style}) => {
  const decor =
    {
      grey: greyStyle,
    }[style] || desireStyle;

  return (
    <div className={css.decorline}>
      {decor.map(d => (
        <span key={d.id} className={d.style} />
      ))}
    </div>
  );
};

DecorLine.desireProps = {
  style: 'desire',
};

DecorLine.propTypes = {
  style: PropTypes.string,
};

export default DecorLine;
