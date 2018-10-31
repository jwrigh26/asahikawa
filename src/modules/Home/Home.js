import React from 'react';
import css from './home.scss';

const Home = props => {
  return (
    <div className={css.wrapper}>
      <div className={css.header} />
      <div className={css.comic} />
      <div className={css.art} />
      <div className={css.social} />
      <div className={css.shop} />
    </div>
  );
};

export default Home;
