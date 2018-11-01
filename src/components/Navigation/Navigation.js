import {Component} from 'react';
import PropTypes from 'prop-types';
// import {v5} from 'uuid';

// import Routes
import Comics from '../../modules/Comics/Comics';
import Home from '../../modules/Home/Home';
import News from '../../modules/News/News';
import Shop from '../../modules/Shop/Shop';
import StoryBoards from '../../modules/StoryBoards/StoryBoards';

const paths = [
  {component: Home, path: '/', title: 'Home', exact: true, key: '3e04948d-01'},
  {component: Comics, path: '/comics', title: 'Comics', key: '8efccff1-02'},
  {component: News, path: '/news', title: 'News', key: 'e5e8ce56-03'},
  {component: StoryBoards, path: '/storyboards', title: 'Story Boards', key: 'f0d7f297-04'},
  {component: Shop, path: '/shop', title: 'Shop', key: 'eb4c5ba0-05'},
];

class Router extends Component {
  state = {
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
