import React, { PureComponent } from "react";
import styles from "./List.module.css";
import Item from "./Item/Item";

import App from "../../pages/App";

import { IItem } from "../../pages/App.types";

interface IList {
  data: IItem[];
  thisOfState: App;
}

export default class List extends PureComponent<IList> {
  constructor(props: IList) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onPerform = this.onPerform.bind(this);
  }

  onDelete(id = "") {
    this.props.thisOfState.setState(({ data }: { data: { id: string }[] }) => ({
      data: data.filter((i) => i.id !== id),
    }));
  }

  onPerform(id = "") {
    this.props.thisOfState.setState(
      ({ data }: { data: { id: string; complete: boolean }[] }) => ({
        data: data.map((i) => {
          if (i.id === id) return { ...i, complete: !i.complete };
          return i;
        }),
      })
    );
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
