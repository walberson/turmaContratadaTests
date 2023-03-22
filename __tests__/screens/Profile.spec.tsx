import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import { Profile } from "../../src/screens/Profile";
import { NativeBaseProvider } from "native-base";

const Provider: React.FC = ({children}) => <NativeBaseProvider initialWindowMetrics={inset}>{children}</NativeBaseProvider>
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("Test Profile", () => {
  /* it("Verify placeholder", () => {
    const { getByTestId  } = render(<Profile />);
    const inputName = getByTestId("input-id-name");
    expect(inputName.props.placeholder).toEqual("name");
  });
  it("checks if user data has been saved", () => {
    const { getByTestId  } = render(<Profile />);
    const inputName = getByTestId("input-id-name");
    expect(inputName.props.value).toEqual("Walberson");
  }) */
  /* it("verify multi components", () => {
    const ids = ["input-id-name", "input-id-surname"];
    const { getByTestId } = render(<Profile />);
    ids.forEach((id) => {
      const input = getByTestId(id);
      expect(input.props.value).toEqual("murilo");
    });
  }); */
  /* test("verify if background color is red", () => {
    const { getByTestId } = render(<Profile />);
    const input = getByTestId("input-id-name");
    expect(input.props.style.backgroundColor).toEqual("blue");
  }) */
  it("verify if input exists", () => {
    const { getByTestId } = render(<Profile />,{wrapper: Provider});
    const input = getByTestId("input-name");
    expect(input).toBeTruthy();
  })
});
