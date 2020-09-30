import React, { PureComponent, BaseSyntheticEvent } from "react";
import Input from "../Input/Input";
import styles from "./Filters.module.css";
import Button from "../Button/Button";

import { IItem, IUpdateStateBase } from "../../pages/App.types";
import Dates from "../../Helpers/Dates";

interface IBase extends IUpdateStateBase {
  data: IItem[];
}

export default class Filters extends PureComponent<IBase> {
  constructor(props: IBase) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
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

  onInputChange(e: BaseSyntheticEvent) {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }

  onDateChange(e: BaseSyntheticEvent) {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  useDateFilter(data: IItem[]) {
    return data.filter(({ date }) => {
      if (!this.state.date) return true;
      return date === Dates.parseDate(this.state.date);
    });
  }

  useTextFilter(data: IItem[]) {
    return data.filter(({ text }) => text.includes(this.state.search));
  }

  filterList() {
    this.props.updateState(() => ({
      filteredData: this.useDateFilter(this.useTextFilter(this.props.data)),
    }));
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
          onChange={this.onDateChange}
          value={this.state.date}
        />
        <Input
          type="search"
          onChange={this.onInputChange}
          value={this.state.search}
        />
        <Button text="Clear" onClick={this.clearFields} />
      </div>
    );
  }
}
