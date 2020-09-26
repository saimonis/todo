import React, { Component } from 'react';
import styles from './List.module.css';
import Item from './Item';

export default class List extends Component {
  render() {
    return (
      <ul className={styles.list}>
        <Item />
      </ul>
    );
  }
}
