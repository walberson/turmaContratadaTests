import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import { Profile } from "../../src/screens/Profile";

describe("Test Profile", () => {
  it("Verify placeholder", () => {
    const { getByTestId  } = render(<Profile />);
    const inputName = getByTestId("input-id-name");
    expect(inputName.props.placeholder).toEqual("name");
  });
  it("checks if user data has been saved", () => {
    const { getByTestId  } = render(<Profile />);
    const inputName = getByTestId("input-id-name");
    expect(inputName.props.value).toEqual("Walberson");
  })
});
