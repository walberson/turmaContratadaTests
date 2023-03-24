import { render, fireEvent, waitFor, act, renderHook } from "@testing-library/react-native";
import React from "react";
import { Profile } from "../../src/screens/Profile";
import { NativeBaseProvider } from "native-base";
import useCounter from "../../hooks/useCounter";
type Props = {
  children?: React.ReactNode;
};
const name: string = "Walberson";
const age: number = 30;
const Provider: React.FC<Props> = ({ children }) => (
  <NativeBaseProvider initialWindowMetrics={inset}>
    {children}
  </NativeBaseProvider>
);
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
    const { getByTestId } = render(<Profile />, { wrapper: Provider });
    const input = getByTestId("input-name");
    expect(input).toBeTruthy();
  });
  it("verify if the user name is printed", async () => {
    const expectedWelcome = "Bem-vinda Taty";
    const screen = render(<Profile />, { wrapper: Provider });
    //Estou escreveno no input
    fireEvent.changeText(screen.getByTestId("input-name"), "Taty");
    //Estou pressionando o botão
    fireEvent.press(screen.getByTestId("botao-test"));
    //Estou verificando se o texto foi impresso
    const welcomeOutput = await waitFor(
      () => screen.getByTestId("printed-username"),
      { timeout: 3000 }
    );
      expect(welcomeOutput.children[0]+welcomeOutput.children[1]).toEqual(expectedWelcome);
  });
});
