import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import close from 'assets/icons/close.json';
import css from './drawer.scss';

const Box = posed.div({
  open: {
    translateX: 0,
    transition: {type: 'tween', duration: 225, ease: 'easeIn'},
  },

  closed: {
    translateX: '80vw',
    transition: {type: 'tween', duration: 225, ease: 'easeOut'},
  },
});

const Shade = posed.div({
  open: {opacity: 1},
  closed: {opacity: 0},
});

const Drawer = ({children, drawerPosition, handleDrawer}) => {
  const renderTopNav = () => {
    return (
      <div className={css.topNav}>
        <Button onClick={this.handlerDrawer}>
          <Icon svg={close} className={[css.closeButton]} />
        </Button>
      </div>
    );
  };

  return (
    <div className={css.wrapper}>
      <Shade key="shade" className={css.shade} />
      <Box key="box" className={css.box}>
        {renderTopNav()}
      </Box>
    </div>
  );
};

Drawer.defaultProps = {
  children: [],
  drawerPosition: 0,
  handleDrawer: () => {},
};

Drawer.propTypes = {
  children: PropTypes.any.isRequired,
  drawerPosition: PropTypes.number.isRequired,
  handleDrawer: PropTypes.func.isRequired,
};

export default Drawer;
