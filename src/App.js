import React, { Component } from "react";
import Router from "components/router/Router";
import Content from "components/content/Content";
import styles from "styles/app.scss";

class App extends Component {
  componentDidMount() {
    document.getElementById("root").style.height = "100%";
  }

  render() {
    return (
      <Router
        render={router => (
          <div className={styles.wrapper}>
            <header className={styles.header} router={router}>
              Header
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
