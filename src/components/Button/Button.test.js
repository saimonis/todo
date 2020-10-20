import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Buttons test", () => {
  const mockFn = jest.fn();
  const btn = shallow(<Button text="btnText" onClick={mockFn} />);
  it("The button has right text", () => {
    expect(btn.text()).toEqual("btnText");
  });

  it("Function from props calls", () => {
    btn.simulate("click");
    expect(mockFn).toBeCalledTimes(1);
  });
  it("renders properly", () => {
    expect(btn.debug()).toMatchSnapshot();
  });
});
