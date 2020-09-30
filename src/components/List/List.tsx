import React, { PureComponent } from "react";
import styles from "./List.module.css";
import Item from "./Item/Item";

import App, { ItemInterface } from "../../pages/App";

interface ListInterface {
  data: ItemInterface[];
  thisOfState: App;
}

export default class List extends PureComponent<ListInterface> {
  constructor(props: ListInterface) {
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
    const data = this.props.data.map((i: ItemInterface) => (
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
