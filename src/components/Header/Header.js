import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createMediaQueries, onBreakPointChange, removeMediQueries} from './header.helper';
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
    activeBreakPoint: {name: 'default', size: null},
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

  render() {
    console.log('Active BreakPoint', this.state.activeBreakPoint.size);
    return <div className={[css.header, ...this.props.className].join(' ')} />;
  }
}

export default Header;
