import React from 'react';
import css from './home.scss';
import Icon from 'components/Icon/Icon';
import brand from 'assets/icons/brand.json';

const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.header}>Header</div>
      <div className={css.comic}>Comic</div>
      <div className={css.art}>Art</div>
      <div className={css.social}>Social</div>
      <div className={css.shop}>Shop</div>
    </div>
  );
};

export default Home;

//  <Icon svg={brand} className={[]} />
