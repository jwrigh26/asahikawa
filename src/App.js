import React, {Component} from 'react';
import Navigation from 'components/Navigation/Navigation';
import Content from 'components/Content/Content';
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
            <footer className={css.footer} navigation={navigation}>
              Footer
            </footer>
          </div>
        )}
      />
    );
  }
}

export default App;
