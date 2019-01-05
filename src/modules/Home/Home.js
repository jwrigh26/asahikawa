import React from 'react';
import PropTypes from 'prop-types';
import css from './home.scss';
import Icon from 'components/Icon/Icon';
import brand from 'assets/icons/brand.json';

const Home = ({navigation}) => {
  console.log('paths', navigation.paths);
  const {paths} = navigation;
  return (
    <div className={css.home}>
      {paths.map(e => {
        if (e.path === '/') {
          return (
            <div className={css.header} key={e.key}>
              <span>
                <a id={e.title}>Header</a>
              </span>
            </div>
          );
        }
        return (
          <div className={css[e.title.toLowerCase()]} key={e.key}>
            <span>
              <a id={e.title}>{e.title}</a>
            </span>
          </div>
        );
      })}
    </div>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;

//  <Icon svg={brand} className={[]} />
