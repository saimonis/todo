import React, { PureComponent } from 'react';
import styles from './List.module.css';
import Item from './Item';

import { ItemInterface } from '../../pages/App';

interface ListInterface {
  list: ItemInterface[];
  thisOfState: any;
}

export default class List extends PureComponent<ListInterface> {
  constructor(props: any) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onPerform = this.onPerform.bind(this);
  }

  onDelete(id = '') {
    this.props.thisOfState.setState(({ list }: { list: { id: string }[] }) => ({
      list: list.filter((i) => i.id !== id),
    }));
  }

  onPerform(id = '') {
    this.props.thisOfState.setState(
      ({ list }: { list: { id: string; complete: boolean }[] }) => {
        return {
          list: list.map((i) => {
            if (i.id === id) {
              return { ...i, complete: !i.complete };
            }
            return i;
          }),
        };
      }
    );
  }

  render() {
    const list = this.props.list.map((i: ItemInterface) => (
      <Item
        data={i}
        key={i.id + i.text}
        onDelete={this.onDelete}
        onPerform={this.onPerform}
      />
    ));
    return <ul className={styles.list}>{list}</ul>;
  }
}
