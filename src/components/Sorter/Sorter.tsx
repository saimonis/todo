import React, { PureComponent } from "react";
import Button from "../Button/Button";
import styles from "./Sorter.module.css";
import Dates from "../../Helpers/Dates";

import App, { ItemInterface } from "../../pages/App";

interface Base {
  thisOfState: App;
}

export default class Sorter extends PureComponent<Base> {
  state = {
    date: false,
    text: false,
    isSorted: false,
  };

  _sortByDateCallBack(a: ItemInterface, b: ItemInterface) {
    if (this.state.date) return Dates.getTime(a.date) - Dates.getTime(b.date);
    return Dates.getTime(b.date) - Dates.getTime(a.date);
  }

  _sortByTextCallBack(a: ItemInterface, b: ItemInterface) {
    const textA = a.text.toLowerCase(),
      textB = b.text.toLowerCase();
    if (this.state.text) {
      if (textA < textB) return -1;
      if (textA > textB) return 1;
      return 0;
    }
    if (textA > textB) return -1;
    if (textA < textB) return 1;
    return 0;
  }

  sortByDate() {
    this.props.thisOfState.setState(({ data }: any) => ({
      data: [...data.sort(this._sortByDateCallBack.bind(this))],
    }));
    this.setState(({ date }: any) => ({ date: !date, isSorted: true }));
  }

  sortByText() {
    this.props.thisOfState.setState(({ data }: any) => ({
      data: [...data.sort(this._sortByTextCallBack.bind(this))],
    }));
    this.setState(({ text }: any) => ({ text: !text, isSorted: true }));
  }

  render() {
    return (
      <div className={styles.header}>
        <Button
          text="По дате"
          onClick={() => {
            this.sortByDate();
          }}
        />
        <Button
          text="По тексту"
          onClick={() => {
            this.sortByText();
          }}
        />
      </div>
    );
  }
}
