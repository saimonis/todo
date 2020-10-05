import React, { PureComponent, BaseSyntheticEvent } from "react";
import Input from "../Input/Input";
import styles from "./Filters.module.css";
import Button from "../Button/Button";
import Dates from "../../Helpers/Dates";

import { IItem, IUpdateStateBase } from "../../pages/App.types";

interface IBase extends IUpdateStateBase {
  data: IItem[];
}

export default class Filters extends PureComponent<IBase> {
  state = {
    date: "",
    search: "",
    transformedDate: "",
  };

  clearFields = () => {
    this.setState({
      date: "",
      search: "",
    });
  };

  onInputChange = (e: BaseSyntheticEvent) => {
    this.setState({ search: e.target.value });
  };

  onDateChange = (e: BaseSyntheticEvent) => {
    this.setState({ date: e.target.value });
  };

  _useDateFilter(data: IItem[]) {
    return data.filter(({ date }) => {
      if (!this.state.date) return true;
      return date === Dates.parseDate(this.state.date);
    });
  }

  _useTextFilter(data: IItem[]) {
    return data.filter(({ text }) => text.includes(this.state.search));
  }

  _filterList() {
    this.props.updateState(() => ({
      filteredData: this._useDateFilter(this._useTextFilter(this.props.data)),
    }));
  }

  componentDidMount() {
    this._filterList();
  }

  componentDidUpdate() {
    this._filterList();
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
