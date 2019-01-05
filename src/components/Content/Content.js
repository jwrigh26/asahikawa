import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router';

const Content = ({navigation}) => {
  const {paths, rootPath} = navigation;
  return (
    <Switch>
      {paths.map(route => (
        <Route {...route} />
      ))}
      <Route render={() => <Redirect to={rootPath} />} />
    </Switch>
  );
};

Content.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Content;
