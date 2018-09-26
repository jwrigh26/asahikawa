import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router';

const Content = ({router}) => {
  return (
    <Switch>
      {router.paths.map(route => (
        <Route {...route} />
      ))}
      <Route render={() => <Redirect to={router.rootPath} />} />
    </Switch>
  );
};

Content.propTypes = {
  router: PropTypes.object.isRequired,
};

export default Content;
