import React from 'react';
import css from './home.scss';
import Icon from 'components/Icon/Icon';
import brand from 'assets/icons/brand.json';

const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.header} />
      <div className={css.comic}>
        <Icon svg={brand} className={[]} />
      </div>
      <div className={css.art} />
      <div className={css.social} />
      <div className={css.shop} />
    </div>
  );
};

export default Home;
