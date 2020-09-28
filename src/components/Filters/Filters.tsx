import React, { PureComponent, BaseSyntheticEvent } from "react";
import Input from "../Input/Input";
import styles from "./Filters.module.css";
import Button from "../Button/Button";

import App, { ItemInterface } from "../../pages/App";

interface Base {
  data: ItemInterface[];
  thisOfState: App;
}

export default class Filters extends PureComponent<Base> {
  constructor(props: Base) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  state = {
    date: "",
    search: "",
    transformedDate: "",
  };

  clearFields() {
    this.setState({
      date: "",
      search: "",
    });
  }

  handleChange(e: BaseSyntheticEvent) {
    e.preventDefault();
    this.setState({ [e.target.type]: e.target.value }, this.filterList);
  }

  useDateFilter(data: ItemInterface[]) {
    return data.filter(({ date }) => {
      if (!this.state.date) {
        return true;
      }
      return date === String(new Date(this.state.date).getTime());
    });
  }

  useTextFilter(data: ItemInterface[]) {
    return data.filter(({ text }) => text.includes(this.state.search));
  }

  filterList() {
    this.props.thisOfState.setState({
      filteredData: this.useDateFilter(this.useTextFilter(this.props.data)),
    });
  }

  componentDidMount() {
    this.filterList();
  }

  componentDidUpdate() {
    this.filterList();
  }

  render() {
    return (
      <div className={styles.header}>
        <Input
          type="date"
          onChange={this.handleChange}
          value={this.state.date}
        />
        <Input
          type="search"
          onChange={this.handleChange}
          value={this.state.search}
        />
        <Button text="Clear" onClick={this.clearFields} />
      </div>
    );
  }
}
