import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  getDrawerPosition,
  mqMobileLarge,
  createMediaQueries,
  onBreakPointChange,
  removeMediQueries,
} from './header.helper';
import Menu from './Menu';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Drawer from './Drawer';
import brand from 'assets/icons/brand.json';
import menu from 'assets/icons/menu.json';
import css from './header.scss';
import {Link} from 'react-router-dom';

class Header extends Component {
  static defaultProps = {
    classNames: [],
  };

  static propTypes = {
    classNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    navigation: PropTypes.object.isRequired,
  };

  state = {
    activeBreakPoint: {name: 'default', breakPoint: null},
    drawerPosition: 0,
  };

  componentDidMount() {
    const handleBreakPoint = onBreakPointChange(this.setActiveBreakPoint);
    this.mediaQueryState = createMediaQueries(handleBreakPoint);
    this.mediaQueryState.didMount();
  }

  componentWillUnmount() {
    removeMediQueries(this.mediaQueryState.queries, this.mediaQueryState.listener);
  }

  toggleDrawer = () => {
    const newPos = getDrawerPosition(this.state.drawerPosition);
    this.setDrawerPosition(newPos);
  };

  setActiveBreakPoint = breakPoint => {
    this.setState(() => ({
      activeBreakPoint: breakPoint,
    }));
  };

  setDrawerPosition = position => {
    this.setState(() => ({
      drawerPosition: position,
    }));
  };

  renderLogo = () => (
    <Link className={css.menu__link} to="/">
      <Icon svg={brand} classNames={[css.menu__mobileHeaderIcon]} />
    </Link>
  );

  renderMobileNavigation = () => {
    return (
      <Fragment>
        {this.renderLogo()}
        <Button classNames={[css.menu__drawerButton]} onClick={this.toggleDrawer}>
          <Icon svg={menu} classNames={[css.menu__drawerIcon]} />
        </Button>
      </Fragment>
    );
  };

  render() {
    const {drawerPosition} = this.state;
    const {classNames, navigation} = this.props;
    const {breakPoint: activeBreakPoint} = this.state.activeBreakPoint;
    const {breakPoint: mobileBreakPoint} = mqMobileLarge;
    return (
      <Fragment>
        <nav className={[css.navigation, ...classNames].join(' ')}>
          {activeBreakPoint > mobileBreakPoint && (
            <section className={css.navigation__wrapper}>
              {this.renderLogo()}
              <Menu navigation={navigation} />
            </section>
          )}
          {activeBreakPoint <= mobileBreakPoint && (
            <Fragment>{this.renderMobileNavigation()}</Fragment>
          )}
        </nav>
        {activeBreakPoint <= mobileBreakPoint && (
          <Drawer
            drawerPosition={drawerPosition}
            setDrawerPosition={this.setDrawerPosition}
            toggleDrawer={this.toggleDrawer}
          >
            <Menu navigation={navigation} toggleDrawer={this.toggleDrawer} />
          </Drawer>
        )}
      </Fragment>
    );
  }
}

export default Header;
