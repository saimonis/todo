import React, { PureComponent } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Filters from "../components/Filters/Filters";
import Sorter from "../components/Sorter/Sorter";
import styles from "./App.module.css";

import { IUpdateStateCB } from "./App.types";

class App extends PureComponent {
  constructor(props: {}) {
    super(props);
    this._updateMainState = this._updateMainState.bind(this);
  }

  state = {
    data: [],
    sortedData: [],
    filteredData: [],
  };

  _updateMainState(callback: IUpdateStateCB) {
    this.setState(callback);
  }

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
        <Filters
          data={this.state.sortedData}
          updateState={this._updateMainState}
        />
        <Sorter data={this.state.data} updateState={this._updateMainState} />
        <List
          data={this.state.filteredData}
          updateState={this._updateMainState}
        />
        <Form updateState={this._updateMainState} />
      </section>
    );
  }
}

export default App;
