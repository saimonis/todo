import React, { PureComponent } from 'react';
import Button from '../Button/Button';
import styles from './Sorter.module.css';

interface Base {
  thisOfState: any;
}

export default class Sorter extends PureComponent<Base> {
  state = {
    date: false,
    text: false,
    isSorted: false,
  };

  _sortByDateCallBack(a: any, b: any) {
    if (this.state.date)
      return (
        new Date(Number(a.date)).getTime() - new Date(Number(b.date)).getTime()
      );
    return (
      new Date(Number(b.date)).getTime() - new Date(Number(a.date)).getTime()
    );
  }

  _sortByTextCallBack(a: any, b: any) {
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
    this.props.thisOfState.setState(
      ({ data }: any) => {
        return {
          data: [...data.sort(this._sortByDateCallBack.bind(this))],
        };
      },
      this.setState(({ date }: any) => ({ date: !date, isSorted: true }))
    );
  }

  sortByText() {
    this.props.thisOfState.setState(
      ({ data }: any) => {
        return {
          data: [...data.sort(this._sortByTextCallBack.bind(this))],
        };
      },
      this.setState(({ text }: any) => ({ text: !text, isSorted: true }))
    );
  }

  sortList() {
    if (this.state.isSorted) {
      this.sortByDate();
      this.sortByText();
    }
  }

  componentDidMount(): void {
    this.sortByDate();
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
