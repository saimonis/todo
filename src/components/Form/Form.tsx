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
    this.checkFields = this.checkFields.bind(this);
  }

  state = {
    data: {
      text: '',
      date: '',
    },
    isCorrect: true,
  };

  checkFields(e: any) {
    e.preventDefault();
    let { text, date } = this.state.data;
    date
      ? (date = String(Date.parse(date)))
      : (date = String(Date.parse(new Date().toDateString())));
    if (!text || !date) {
      this.setState({ isCorrect: false });
      return;
    }
    this.handleSubmit(date);
  }

  clearFields() {
    this.setState({
      data: {
        text: '',
        date: '',
      },
      isCorrect: true,
    });
  }

  handeChange(e: any) {
    this.setState({
      data: { ...this.state.data, [e.target.type]: e.target.value },
    });
  }

  handleSubmit(date: string) {
    const newItem: ItemInterface = {
      id: `${Date.now()}`,
      complete: false,
      ...this.state.data,
      date,
    };
    this.props.thisOfState.setState(({ data }: any) => ({
      data: [...data, newItem],
    }));
    this.clearFields();
  }

  render() {
    return (
      <form>
        <div className={styles.container}>
          <Input
            className={styles['input-text']}
            onChange={this.handeChange}
            correct={this.state.isCorrect}
            value={this.state.data.text}
          />
          <Input
            type="date"
            onChange={this.handeChange}
            correct={this.state.isCorrect}
            value={this.state.data.date}
          />
          <Button text="Добавить" onClick={this.checkFields} />
        </div>
      </form>
    );
  }
}
