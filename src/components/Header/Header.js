import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  mqMobileLarge,
  createMediaQueries,
  onBreakPointChange,
  removeMediQueries,
} from './header.helper';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
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

  rednerDrawer = () => {
    console.log('Render Drawer');
    return (
      <Fragment>
        <span>Button</span>
        <Button>
          <Icon svg={menu} className={[css.menu]} />
        </Button>
      </Fragment>
    );
  };

  render() {
    const {className} = this.props;
    const {breakPoint: activeBreakPoint} = this.state.activeBreakPoint;
    const {breakPoint: mobileBreakPoint} = mqMobileLarge;
    return (
      <div className={[css.header, ...className].join(' ')}>
        {activeBreakPoint > mobileBreakPoint && <Fragment />}
        {activeBreakPoint <= mobileBreakPoint && <Fragment>{this.rednerDrawer()}</Fragment>}
      </div>
    );
  }
}

export default Header;
