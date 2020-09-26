import React, { PureComponent } from 'react';
import Button from '../Button';
import Input from '../Input/Input';
import styles from './Form.module.css';

import { ItemInterface } from '../../pages/App';

interface ListInterface {
  thisOfState: any;
}

export default class Form extends PureComponent<ListInterface> {
  constructor(props: any) {
    super(props);
    this.handeChange = this.handeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    text: '',
    date: '',
  };

  handeChange(e: any) {
    e.preventDefault();
    this.setState({ [e.target.type]: e.target.value });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const newItem: ItemInterface = {
      id: `${Date.now()}`,
      complete: false,
      ...this.state,
    };

    this.props.thisOfState.setState(({ list }: any) => ({
      list: [...list, newItem],
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.container}>
          <Input className={styles['input-text']} onChange={this.handeChange} />
          <Input type="date" onChange={this.handeChange} />
          <Button text="Добавить" />
        </div>
      </form>
    );
  }
}
