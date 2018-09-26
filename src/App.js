import React, {Component} from 'react';
import Router from 'components/router/Router';
import Content from 'components/content/Content';
import styles from 'styles/app.scss';
import other from 'styles/other.scss';

import Icon from 'components/Icon/Icon';
import alien from 'assets/icons/alien.json';

class App extends Component {
  componentDidMount() {
    document.getElementById('root').style.height = '100%';
  }

  render() {
    return (
      <Router
        render={router => (
          <div className={styles.wrapper}>
            <header className={styles.header} router={router}>
              Header
              <Icon
                path={alien.path}
                label={alien.label}
                fill={'#fff'}
                styles={[other.green, other.padding]}
              />
            </header>
            <Content router={router} />
            <footer className={styles.footer} router={router}>
              Footer
            </footer>
          </div>
        )}
      />
    );
  }
}

export default App;
