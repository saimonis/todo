import React, {
  BaseSyntheticEvent,
  PureComponent,
  SyntheticEvent,
} from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Form.module.css";

import Dates from "../../Helpers/Dates";

import { IItem, IMainState, IUpdateStateBase } from "../../pages/App.types";

export default class Form extends PureComponent<IUpdateStateBase> {
  constructor(props: IUpdateStateBase) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  state = {
    data: {
      text: "",
      date: "",
    },
    isCorrect: true,
  };

  onSubmitForm(e: SyntheticEvent) {
    e.preventDefault();
    let { text, date } = this.state.data;
    if (!text || !date) {
      this.setState({ isCorrect: false });
      return;
    }
    date = Dates.parseDate(date);
    this._handleSubmit(date);
  }

  onInputChange(e: BaseSyntheticEvent) {
    this.setState({
      data: { ...this.state.data, text: e.target.value },
    });
  }

  onDateChange(e: BaseSyntheticEvent) {
    this.setState({
      data: { ...this.state.data, date: e.target.value },
    });
  }

  _clearFields() {
    this.setState({
      data: {
        text: "",
        date: "",
      },
      isCorrect: true,
    });
  }

  _handleSubmit(date: string) {
    const newItem: IItem = {
      id: `${Date.now()}`,
      complete: false,
      ...this.state.data,
      date,
    };

    this.props.updateState(({ data }: IMainState) => ({
      data: [...data, newItem],
    }));
    this._clearFields();
  }

  render() {
    return (
      <form>
        <div className={styles.container}>
          <Input
            className={styles["input-text"]}
            onChange={this.onInputChange}
            correct={this.state.isCorrect}
            value={this.state.data.text}
          />
          <Input
            type="date"
            onChange={this.onDateChange}
            correct={this.state.isCorrect}
            value={this.state.data.date}
          />
          <Button text="Добавить" onClick={this.onSubmitForm} />
        </div>
      </form>
    );
  }
}
