import React from 'react';
import PropTypes from 'prop-types';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import css from './menu.scss';

const Menu = ({navigation, toggleDrawer}) => {
  const {paths, rootPath} = navigation;
  console.log(paths);
  return (
    <nav className={css.nav}>
      <span className={css.nav__title}>Menu</span>
      <ul className={css.menu}>
        {paths.map(e => (
          <li className={css.menu__item} key={e.key}>
            <NavLink
              activeClassName={css.selected}
              to={`${rootPath}#${e.title}`}
              onClick={toggleDrawer}
              location={{pathname: document.location.pathname + document.location.hash}}
            >
              {e.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  navigation: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Menu;
