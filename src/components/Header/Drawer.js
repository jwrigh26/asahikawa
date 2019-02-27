import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
// import Picture from 'components/Picture/Picture';
import close from 'assets/icons/close.json';
import {drawerState, isDrawerHidden, isDrawerOpen} from './header.helper';
import css from './drawer.scss';

const inTrans = {type: 'tween', duration: 300, ease: 'circIn'};
const outTrans = {type: 'tween', duration: 425, ease: 'circOut'};
const Box = posed.div({
  open: {
    x: 0,
    transition: outTrans,
  },

  closed: {
    delay: 150,
    x: '68vw',
    transition: inTrans,
  },
});

const Close = posed.div({
  open: {
    delay: 225,
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: outTrans,
  },
  closed: {
    x: '81vw',
    rotate: 360,
    opacity: 0,
    transition: inTrans,
  },
});

const Shade = posed.div({
  open: {opacity: 1, duration: 300},
  closed: {opacity: 0, delay: 150, duration: 425},
});

const Drawer = ({
  children,
  drawerPosition,
  setDrawerPosition,
  toggleDrawer,
}) => {
  const hidden = isDrawerHidden(drawerPosition) ? css.hidden : '';
  const pose = isDrawerOpen(drawerPosition) ? 'open' : 'closed';

  const handlePoseComplete = (pos, setPos) => () => {
    if (!isDrawerOpen(pos)) {
      setPos(drawerState.hidden);
    }
  };

  // const renderHeader = () => {
  //   return (
  //     <Fragment>
  //       <div className={css.header}>
  //         <Picture image="brand/AnthonyHoldenArt_Header" />
  //       </div>
  //       <div className={css.header_after} />
  //     </Fragment>
  //   );
  // };

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
      <Box
        className={[css.drawer, hidden].join(' ')}
        initialPose={'closed'}
        key="box"
        pose={pose}
      >
        {children}
      </Box>
      <Close
        onClick={toggleDrawer}
        className={[css.close, hidden].join(' ')}
        initialPose={'closed'}
        key="close"
        pose={pose}
      >
        <Button classNames={[css.closeButton]}>
          <Icon svg={close} classNames={[css.closeIcon]} />
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
