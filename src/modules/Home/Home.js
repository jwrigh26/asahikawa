import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
// import Icon from 'components/Icon/Icon';
// import brand from 'assets/icons/brand.json';
import Comics from './components/Comics/Comics';
import PreciousRascals from './components/PreciousRascals/PreciousRascals';
import {comics, preciousRascals} from './mock';
import css from './home.scss';

const Home = () => {
  // console.log('paths', navigation.paths);
  // const {paths} = navigation;
  return (
    <main className={css.home}>
      <section className={css.jumbotron}>
        <PreciousRascals images={preciousRascals} />
      </section>
      <section className={css.comics}>
        <Comics images={comics} />
      </section>
      <section className={css.doodles} />
      <section className={css.portfolio} />
    </main>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;

//  <Icon svg={brand} className={[]} />
