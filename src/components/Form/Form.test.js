import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";
import Button from "../Button/Button";

describe("Form tests", () => {
  const mockFnUpdateAppState = jest.fn();
  const form = shallow(<Form updateState={mockFnUpdateAppState} />);

  test("test form click", () => {
    expect(form.find(Button).render().text()).toEqual("Добавить");
    form.find(Button).simulate("click", {
      preventDefault: () => {},
    });
    expect(form.state().isCorrect).toEqual(false);
  });
});
