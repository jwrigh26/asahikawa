import React from 'react';
import css from './home.scss';

import Picture from 'components/Picture/Picture';

const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.header} />
      <div className={css.comic} />
      <div className={css.art}>
        <Picture image={'neptune_03'} />
      </div>
      <div className={css.social} />
      <div className={css.shop} />
    </div>
  );
};

export default Home;
