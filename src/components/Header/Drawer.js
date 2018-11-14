import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import close from 'assets/icons/close.json';
import {drawerState, isDrawerHidden, isDrawerOpen} from './header.helper';
import css from './drawer.scss';

const Box = posed.div({
  open: {
    translateX: 0,
    transition: {type: 'tween', duration: 425, ease: 'circOut'},
  },

  closed: {
    translateX: '70vw',
    transition: {type: 'tween', duration: 425, ease: 'circIn'},
  },
});

const Shade = posed.div({
  open: {opacity: 1},
  closed: {opacity: 0},
});

const Drawer = ({children, drawerPosition, setDrawerPosition, toggleDrawer}) => {
  const hidden = isDrawerHidden(drawerPosition) ? css.hidden : '';
  const pose = isDrawerOpen(drawerPosition) ? 'open' : 'closed';

  const handlePoseComplete = (pos, setPos) => () => {
    if (!isDrawerOpen(pos)) {
      setPos(drawerState.hidden);
    }
  };

  const renderTopNav = () => {
    return (
      <div className={css.topNav}>
        <Button onClick={toggleDrawer}>
          <Icon svg={close} className={[css.closeButton]} />
        </Button>
      </div>
    );
  };

  return (
    <div className={[css.wrapper, hidden].join(' ')}>
      <Shade
        className={[css.shade, hidden].join(' ')}
        initialPose={'closed'}
        key="shade"
        onClick={toggleDrawer}
        pose={pose}
      />
      <Box
        className={[css.box, hidden].join(' ')}
        initialPose={'closed'}
        key="box"
        onPoseComplete={handlePoseComplete(drawerPosition, setDrawerPosition)}
        pose={pose}
      >
        {renderTopNav()}
        {children}
      </Box>
    </div>
  );
};

Drawer.defaultProps = {
  children: [],
  drawerPosition: 0,
  setDrawerPosition: () => {},
  toggleDrawer: () => {},
};

Drawer.propTypes = {
  children: PropTypes.any.isRequired,
  drawerPosition: PropTypes.number.isRequired,
  setDrawerPosition: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Drawer;
