import React, { Component } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Header from '../components/Header';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <section className={styles.todo}>
        <Header />
        <List />
        <Form />
      </section>
    );
  }
}

export default App;
