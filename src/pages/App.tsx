import React, { PureComponent } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Header from '../components/Filter';
import styles from './App.module.css';

export interface ItemInterface {
  id: string;
  text: string;
  date: string;
  complete: boolean;
}

class App extends PureComponent {
  state = {
    list: [
      {
        id: `${Date.now()}`,
        text: 'sd',
        date: '2021-07-13',
        complete: false,
      },
      {
        id: `${Date.now() + 1}`,
        text: 'sds',
        date: '2021-07-13',
        complete: false,
      },
    ],
  };

  render() {
    return (
      <section className={styles.todo}>
        <Header />
        <List list={this.state.list} thisOfState={this} />
        <Form thisOfState={this} />
      </section>
    );
  }
}

export default App;
