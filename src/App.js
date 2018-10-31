import React, {Component} from 'react';
import Router from 'components/Router/Router';
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
      <Router
        render={router => (
          <div className={css.wrapper}>
            <Content router={router} />
            <footer className={css.footer} router={router}>
              Footer
            </footer>
          </div>
        )}
      />
    );
  }
}

export default App;
