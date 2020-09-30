import React, { PureComponent } from "react";
import Button from "../Button/Button";
import styles from "./Sorter.module.css";
import Dates from "../../Helpers/Dates";

import App from "../../pages/App";

import { IItem } from "../../pages/App.types";

interface IBase {
  data: IItem[];
  thisOfState: App;
}

export default class Sorter extends PureComponent<IBase> {
  constructor(props: IBase) {
    super(props);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByText = this.sortByText.bind(this);
    this._sortByDateCallBack = this._sortByDateCallBack.bind(this);
    this._sortByTextCallBack = this._sortByTextCallBack.bind(this);
  }

  state = {
    date: false,
    text: false,
    isSortedByDate: false,
    isSortedByText: false,
    isSorted: false,
  };

  _sortByDateCallBack(a: IItem, b: IItem) {
    if (this.state.date) return Dates.getTime(a.date) - Dates.getTime(b.date);
    return Dates.getTime(b.date) - Dates.getTime(a.date);
  }

  _sortByTextCallBack(a: IItem, b: IItem) {
    const textA = a.text.toLowerCase(),
      textB = b.text.toLowerCase();
    let value = 0;
    if (textA > textB) value = -1;
    if (textA < textB) value = 1;
    if (this.state.text) value *= -1;
    return value;
  }

  sortByDate() {
    this.props.thisOfState.setState(({ sortedData }: { sortedData: [] }) => ({
      filteredData: [...sortedData.sort(this._sortByDateCallBack)],
    }));
    this.setState(({ date }: { date: boolean }) => ({
      date: !date,
      isSorted: true,
      isSortedByDate: true,
      isSortedByText: false,
    }));
  }

  sortByText() {
    this.props.thisOfState.setState(({ sortedData }: { sortedData: [] }) => ({
      sortedData: [...sortedData.sort(this._sortByTextCallBack)],
    }));
    this.setState(({ text }: { text: string }) => ({
      text: !text,
      isSorted: true,
      isSortedByText: true,
      isSortedByDate: false,
    }));
  }

  componentDidUpdate() {
    if (this.state.isSorted) {
      if (this.state.isSortedByDate)
        return this.props.thisOfState.setState(
          ({ data }: { sortedData: []; data: [] }) => ({
            sortedData: [...data].sort(this._sortByDateCallBack),
          })
        );
      if (this.state.isSortedByText)
        return this.props.thisOfState.setState(
          ({ data }: { sortedData: []; data: [] }) => ({
            sortedData: [...data].sort(this._sortByTextCallBack),
          })
        );
    } else {
      this.props.thisOfState.setState({
        sortedData: [...this.props.thisOfState.state.data],
      });
    }
  }

  render() {
    return (
      <div className={styles.header}>
        <Button text="По дате" onClick={this.sortByDate} />
        <Button text="По тексту" onClick={this.sortByText} />
      </div>
    );
  }
}
