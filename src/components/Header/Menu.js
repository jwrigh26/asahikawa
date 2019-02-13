import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import css from './menu.scss';

const Menu = ({isMobile, navigation, toggleDrawer}) => {
  const {paths} = navigation;
  console.log('IsMobile', isMobile);
  const filteredPaths = !isMobile ? paths.filter(e => e.path !== navigation.rootPath) : paths;
  return (
    <nav className={css.nav}>
      <span className={css.nav__title}>Menu</span>
      <ul className={css.menu}>
        {filteredPaths.map(e => (
          <li className={css.menu__item} key={e.key}>
            <NavLink
              activeClassName={css.selected}
              to={`${e.path}`}
              onClick={typeof toggleDrawer !== undefined ? toggleDrawer : undefined}
            >
              <span className={css.menu__item_title}>{e.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.defaultProps = {
  isMobile: false,
  toggleDrawer: undefined,
};

Menu.propTypes = {
  isMobile: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func,
};

export default Menu;

// For anchors do the following
/*
<li className={css.menu__item} key={e.key}>
            <NavLink
              activeClassName={css.selected}
              to={`${rootPath}#${e.title}`}
              onClick={typeof toggleDrawer !== undefined ? toggleDrawer : undefined}
              location={{pathname: document.location.pathname + document.location.hash}}
            >
              <span className={css.menu__item_title}>{e.title}</span>
            </NavLink>*/

// Then in the page set the id
/*
<div className={css.header} key={e.key}>
              <span>
                <a id={e.title}>Header</a>
              </span>
            </div> */
/*
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router';

const Content = ({navigation}) => {
  const {components, paths, rootPath} = navigation;
  return (
    <Switch>
      {paths.map(route => (
        <Route
          {...route}
          render={props => {
            const Component = components[route.title];
            return <Component navigation={navigation} {...props} />;
          }}
        />
      ))}
      <Route render={() => <Redirect to={rootPath} />} />
    </Switch>
  );
};

Content.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Content;*/
