import React, {Component} from 'react';
import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import {Route, Switch, Redirect} from 'react-router';
import css from 'styles/app.scss';

class App extends Component {
  componentDidMount() {
    document.getElementById('root').style.height = '100%';
  }

  render() {
    return (
      <Navigation
        render={navigation => {
          const {components, paths, rootPath} = navigation;
          return (
            <div className={css.grid}>
              <main className={css.main}>
                <Switch>
                  {paths.map(route => {
                    return (
                      <Route
                        {...route}
                        path={`${route.path}`}
                        render={props => {
                          const Page = components[route.title];
                          return <Page navigation={navigation} {...props} />;
                        }}
                      />
                    );
                  })}
                  <Route render={() => <Redirect to={`${rootPath}`} />} />
                </Switch>
              </main>
              <Footer navigation={navigation} />
              <Header navigation={navigation} />
            </div>
          );
        }}
      />
    );
  }
}

export default App;
