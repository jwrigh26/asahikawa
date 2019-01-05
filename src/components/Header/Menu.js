import React from 'react';
import PropTypes from 'prop-types';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import css from './menu.scss';

const Menu = ({navigation, toggleDrawer}) => {
  const {paths, rootPath} = navigation;
  console.log(paths);
  return (
    <nav>
      <span>Menu</span>
      <ul>
        {paths.map(e => (
          <li key={e.key}>
            <NavLink
              to={`${rootPath}#${e.title}`}
              onClick={toggleDrawer}
              activeClassName={css.selected}
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
