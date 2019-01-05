import {Component} from 'react';
import PropTypes from 'prop-types';
// import {v5} from 'uuid';

// import Routes
import Comics from '../../modules/Comics/Comics';
import Home from '../../modules/Home/Home';
import Art from '../../modules/Art/Art';
import Shop from '../../modules/Shop/Shop';
import StoryBoards from '../../modules/StoryBoards/StoryBoards';

const components = {
  Home: Home,
  Comics: Comics,
  Art: Art,
  'Story Boards': StoryBoards,
  Shop: Shop,
};

const paths = [
  {path: '/', title: 'Home', exact: true, key: '3e04948d-01'},
  {path: '/comics', title: 'Comics', key: '8efccff1-02'},
  {path: '/art', title: 'Art', key: 'e5e8ce56-03'},
  {path: '/storyboards', title: 'Story Boards', key: 'f0d7f297-04'},
  {path: '/shop', title: 'Shop', key: 'eb4c5ba0-05'},
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
