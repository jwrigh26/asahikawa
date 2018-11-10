import React, {Component} from 'react';
import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';
import Content from 'components/Content/Content';
import Footer from 'components/Footer/Footer';
import css from 'styles/app.scss';

import Icon from 'components/Icon/Icon';
import alien from 'assets/icons/alien.json';

class App extends Component {
  componentDidMount() {
    document.getElementById('root').style.height = '100%';
  }

  render() {
    return (
      <Navigation
        render={navigation => (
          <div className={css.wrapper}>
            <Content navigation={navigation} />
            <Footer navigation={navigation} />
            <Header navigation={navigation} />
          </div>
        )}
      />
    );
  }
}

export default App;
