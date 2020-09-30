import React, {
  BaseSyntheticEvent,
  PureComponent,
  SyntheticEvent,
} from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Form.module.css";

import App from "../../pages/App";
import Dates from "../../Helpers/Dates";

import { IItem } from "../../pages/App.types";

interface IList {
  thisOfState: App;
}

export default class Form extends PureComponent<IList> {
  constructor(props: IList) {
    super(props);
    this.handeChange = this.handeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkFields = this.checkFields.bind(this);
  }

  state = {
    data: {
      text: "",
      date: "",
    },
    isCorrect: true,
  };

  checkFields(e: SyntheticEvent) {
    e.preventDefault();
    let { text, date } = this.state.data;
    if (!text || !date) {
      this.setState({ isCorrect: false });
      return;
    }
    date = Dates.parseDate(date);
    this.handleSubmit(date);
  }

  clearFields() {
    this.setState({
      data: {
        text: "",
        date: "",
      },
      isCorrect: true,
    });
  }

  handeChange(e: BaseSyntheticEvent) {
    this.setState({
      data: { ...this.state.data, [e.target.type]: e.target.value },
    });
  }

  handleSubmit(date: string) {
    const newItem: IItem = {
      id: `${Date.now()}`,
      complete: false,
      ...this.state.data,
      date,
    };
    this.props.thisOfState.setState(({ data }: { data: [] }) => ({
      data: [...data, newItem],
    }));
    this.clearFields();
  }

  render() {
    return (
      <form>
        <div className={styles.container}>
          <Input
            className={styles["input-text"]}
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
