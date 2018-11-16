import React from 'react';
import css from './home.scss';
import Icon from 'components/Icon/Icon';
import brand from 'assets/icons/brand.json';
import Picture from 'components/Picture/Picture';

const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.header}>
        <Picture image="neptune_01" classNames={[css.image]} />
      </div>
      <div className={css.comic}>
        <Icon svg={brand} className={[]} />
      </div>
      <div className={css.art}>
        <Picture image="neptune_02" classNames={[css.image]} />
        <Picture image="neptune_03" classNames={[css.image]} />
      </div>
      <div className={css.social} />
      <div className={css.shop} />
    </div>
  );
};

export default Home;
