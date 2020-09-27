import React, { PureComponent } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Filters from '../components/Filters';
import Sorter from '../components/Sorter/Sorter';
import styles from './App.module.css';

export interface ItemInterface {
  id: string;
  text: string;
  date: string;
  complete: boolean;
}

class App extends PureComponent {
  state: any = {
    data: [],
    filteredData: [],
  };

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state));
  }

  componentDidMount() {
    const data = localStorage.getItem('data');
    if (data != null) {
      this.setState(JSON.parse(data));
    }
  }

  render() {
    return (
      <section className={styles.todo}>
        <Filters data={this.state.data} thisOfState={this} />
        <Sorter thisOfState={this} />
        <List data={this.state.filteredData} thisOfState={this} />
        <Form thisOfState={this} />
      </section>
    );
  }
}

export default App;
