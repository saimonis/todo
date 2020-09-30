import React, { PureComponent } from "react";
import styles from "./List.module.css";
import Item from "./Item/Item";

import { IItem, IMainState, IUpdateStateBase } from "../../pages/App.types";

interface IBase extends IUpdateStateBase {
  data: IItem[];
}

export default class List extends PureComponent<IBase> {
  constructor(props: IBase) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onPerform = this.onPerform.bind(this);
  }

  onDelete(id = "") {
    this.props.updateState(({ data = [] }: IMainState) => ({
      data: data.filter((i) => i.id !== id),
    }));
  }

  onPerform(id = "") {
    this.props.updateState(({ data = [] }: IMainState) => ({
      data: data.map((i) => {
        if (i.id === id) return { ...i, complete: !i.complete };
        return i;
      }),
    }));
  }

  render() {
    const data = this.props.data.map((i: IItem) => (
      <Item
        data={i}
        key={i.id + i.text}
        onDelete={this.onDelete}
        onPerform={this.onPerform}
      />
    ));
    return <ul className={styles.list}>{data}</ul>;
  }
}
