import React from 'react';
import css from './home.scss';

import Picture from 'components/Picture/Picture';

// const pathToImage = require('neptune_02-lg_1x.jpg');

// const image1 = 'assets/images/neptune_01-lg_1x.jpg';
// const image2 = 'static/images/neptune_02';

const Home = props => {
  return (
    <div className={css.wrapper}>
      <div className={css.header} />
      <div className={css.comic}>
        <Picture image={'koen_asobi'} />
      </div>
      <div className={css.art}>
        <Picture image={'neptune_03'} />
      </div>
      <div className={css.social} />
      <div className={css.shop} />
    </div>
  );
};

export default Home;
