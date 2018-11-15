import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import close from 'assets/icons/close.json';
import {drawerState, isDrawerHidden, isDrawerOpen} from './header.helper';
import css from './drawer.scss';

const inTrans = {type: 'tween', duration: 300, ease: 'circIn'};
const outTrans = {type: 'tween', duration: 425, ease: 'circOut'};
const Box = posed.div({
  open: {
    translateX: 0,
    transition: outTrans,
  },

  closed: {
    delay: 150,
    translateX: '68vw',
    transition: inTrans,
  },
});

const Close = posed.div({
  open: {
    delay: 225,
    translateX: 0,
    rotate: 0,
    opacity: 1,
    transition: outTrans,
  },
  closed: {
    translateX: '81vw',
    rotate: 360,
    opacity: 0,
    transition: inTrans,
  },
});

const Shade = posed.div({
  open: {opacity: 1, transition: outTrans},
  closed: {opacity: 0, delay: 150, transition: inTrans},
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
    return <div className={css.topNav} />;
  };

  return (
    <div className={[css.wrapper, hidden].join(' ')}>
      <Shade
        className={[css.shade, hidden].join(' ')}
        initialPose={'closed'}
        key="shade"
        onClick={toggleDrawer}
        onPoseComplete={handlePoseComplete(drawerPosition, setDrawerPosition)}
        pose={pose}
      />
      <Box className={[css.box, hidden].join(' ')} initialPose={'closed'} key="box" pose={pose}>
        {renderTopNav()}
        {children}
      </Box>
      <Close
        className={[css.close, hidden].join(' ')}
        initialPose={'closed'}
        key="close"
        pose={pose}
      >
        <Button className={[css.closeButton]} onClick={toggleDrawer}>
          <Icon svg={close} className={[css.closeIcon]} />
        </Button>
      </Close>
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
