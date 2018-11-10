import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  getDrawerPosition,
  mqMobileLarge,
  createMediaQueries,
  onBreakPointChange,
  removeMediQueries,
} from './header.helper';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Drawer from './Drawer';
import menu from 'assets/icons/menu.json';
import css from './header.scss';

class Header extends Component {
  static defaultProps = {
    className: [],
  };

  static propTypes = {
    className: PropTypes.arrayOf(PropTypes.string).isRequired,
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

  handleDrawer = () => {
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

  renderMobileNavigation = () => {
    return (
      <Button onClick={this.handleDrawer}>
        <Icon svg={menu} className={[css.menuButton]} />
      </Button>
    );
  };

  render() {
    const {drawerPosition} = this.state;
    const {className} = this.props;
    const {breakPoint: activeBreakPoint} = this.state.activeBreakPoint;
    const {breakPoint: mobileBreakPoint} = mqMobileLarge;
    return (
      <Fragment>
        <nav className={[css.navigation, ...className].join(' ')}>
          {activeBreakPoint > mobileBreakPoint && <Fragment />}
          {activeBreakPoint <= mobileBreakPoint && (
            <Fragment>{this.renderMobileNavigation()}</Fragment>
          )}
        </nav>
        {activeBreakPoint <= mobileBreakPoint && (
          <Drawer drawerPosition={drawerPosition} handleDrawer={this.handleDrawer} />
        )}
      </Fragment>
    );
  }
}

export default Header;
