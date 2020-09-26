import React, { PureComponent } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Header from '../components/Header';
import styles from './App.module.css';

export interface ItemInterface {
  text: string;
  id: string;
  complete: boolean;
}

class App extends PureComponent {
  state = {
    list: [
      {
        id: `${Date.now()}`,
        text: 'sd',
        complete: false,
      },
      {
        id: `${Date.now() + 1}`,
        text: 'sds',
        complete: false,
      },
    ],
  };

  render() {
    return (
      <section className={styles.todo}>
        <Header />
        <List list={this.state.list} thisOfState={this} />
        <Form />
      </section>
    );
  }
}

export default App;
