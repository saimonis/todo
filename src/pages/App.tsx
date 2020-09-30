import React, { PureComponent } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Filters from "../components/Filters/Filters";
import Sorter from "../components/Sorter/Sorter";
import styles from "./App.module.css";

export interface ItemInterface {
  id: string;
  text: string;
  date: string;
  complete: boolean;
}

class App extends PureComponent {
  state = {
    data: [],
    sortedData: [],
    filteredData: [],
  };

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
  }

  componentDidMount() {
    let data = localStorage.getItem("data");
    if (data != null) {
      data = JSON.parse(data);

      this.setState({ data });
    }
  }

  render() {
    return (
      <section className={styles.todo}>
        <Filters data={this.state.sortedData} thisOfState={this} />
        <Sorter data={this.state.data} thisOfState={this} />
        <List data={this.state.filteredData} thisOfState={this} />
        <Form thisOfState={this} />
      </section>
    );
  }
}

export default App;
