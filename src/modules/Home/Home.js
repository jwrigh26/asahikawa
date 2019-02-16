import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import Icon from 'components/Icon/Icon';
import brand from 'assets/icons/brand.json';
import PreciousRascals from './components/PreciousRascals/PreciousRascals';
import css from './home.scss';

const Home = ({navigation}) => {
  // console.log('paths', navigation.paths);
  const {paths} = navigation;
  return (
    <main className={css.home}>
      <section className={css.jumbotron}>
        <PreciousRascals
          images={[
            {id: uuidv4(), path: 'pr/pr_02162019_01'},
            {id: uuidv4(), path: 'pr/pr_02162019_02'},
            {id: uuidv4(), path: 'pr/pr_02162019_03'},
            {id: uuidv4(), path: 'pr/pr_02162019_04'},
          ]}
        />
      </section>
      <section className={css.comics} />
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
