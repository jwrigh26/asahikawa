import {Component} from 'react';
import PropTypes from 'prop-types';
// import {v5} from 'uuid';

// import Routes
import About from '../../modules/About/About';
import Comics from '../../modules/Comics/Comics';
import Home from '../../modules/Home/Home';
import Portfolio from '../../modules/Portfolio/Portfolio';

const components = {
  About: About,
  Comics: Comics,
  Home: Home,
  Portfolio: Portfolio,
};

const paths = [
  {path: '/', title: 'Home', exact: true, key: '3e04948d-01'},
  {path: '/about', title: 'About', key: 'e5e8ce56-03'},
  {path: '/comics', title: 'Comics', key: '8efccff1-02'},
  {path: '/portfolio', title: 'Portfolio', key: 'f0d7f297-04'},
];

class Router extends Component {
  state = {
    components,
    paths,
    rootPath: '/',
  };

  render() {
    return this.props.render(this.state);
  }
}

Router.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Router;
