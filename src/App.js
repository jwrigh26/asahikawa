import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "styles/App.scss";

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.app__title}>Welcome to React</h1>
        </header>
        <p className={styles.app__intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
