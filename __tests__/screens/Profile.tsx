import { Profile } from "../../src/screens/Profile";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import React from "react";
import { Button } from "native-base";
import { NativeBaseProvider } from "native-base";
import { Example } from "../../src/screens/Example";
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};
const Provider: React.FC = ({children}) =>(<NativeBaseProvider initialWindowMetrics={inset}>{children}</NativeBaseProvider>)
describe("Profile", () => {
  test('examples of some things', async () => {
    const expectedUsername = 'Ada Lovelace';
    const screen = render(<Example />);
    fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
    fireEvent.press(screen.getByText('Print Username'));
  
    // Using `findBy` query to wait for asynchronous operation to finish
    const usernameOutput = await waitFor(()=>screen.findByTestId('printed-username'),{timeout:3000});
    console.log(usernameOutput.children)
    expect(usernameOutput.children[0]).toEqual(expectedUsername);
    // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
    
  });
  /* it("VerifyPlaceholder", () => {
    const { debug, getByPlaceholderText } = render(<Profile />);
    const inputName = getByPlaceholderText("Nome");
    expect(inputName.props.placeholder).toBeTruthy();
  });
 */
  /* it("checks if user da ta has been loaded", () => {
    const { getByTestId } = render(<Profile />);
    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");
    expect(inputName.props.value).toEqual("Rodrigo");
    expect(inputSurname.props.value).toEqual("Gonçalves");
  }); */

  /* it("should exist title correctly", () => {
    const { getByTestId } = render(<Profile />);
    const textTitle = getByTestId("text-title");
    expect(textTitle.props.children).toContain("Perfil");
  }); */
});

describe("Teste 2", () => {
  /* it("VerifyPlaceholder", () => {
    const { debug, getByPlaceholderText } = render(<Profile />);
    const inputName = getByPlaceholderText("Nome");
    expect(inputName.props.placeholder).toBeTruthy();
  }); */

  /* it("checks if user da ta has been loaded", () => {
    const { getByTestId } = render(<Profile />);
    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");
    expect(inputName.props.value).toEqual("Rodrigo");
    expect(inputSurname.props.value).toEqual("Gonçalves");
  }); */

 /*  it("Deu erro mais uma vez, desiste cara", () => {
    const { getByTestId } = render(<Profile />);
    const textTitle = getByTestId("text-title");
    expect(textTitle.props.children).toContain("Perfil");
  });
  it("calls the onPress function when the button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Profile onPress={onPressMock()} />);
    fireEvent.press(getByTestId("button-surname"));
    expect(onPressMock).toHaveBeenCalled();
  });
  it("verifica vários componentes", () => {
    const ids = ["input-name", "input-surname"];
    const { getByTestId } = render(<Profile />);
    ids.forEach((id) => {
      const inputName = getByTestId(id);
      expect(inputName.props.value).toEqual("Rodrigo");
    });
  });
  test('verifica se a borda do input é vermelha', () => {
    const { getByTestId } = render(<Profile />);
    const inputName = getByTestId('input-name');
    expect(inputName.props.style.borderColor).toBe('red');
  });
  test('Verifica se o botão é renderizado', () => {
    const { getByTestId } = render(<Profile/>,{wrapper: Provider});
    const button = getByTestId('botao-test');
    console.log(button)

  }); */

  /* it("test settings page's logic", async () => {
    const { findByTestId } = render(<AppNavigator />);
  
    //Login and go to settings page
    const userInput = await findByTestId("login-username-input");
    const passwordInput = await findByTestId("login-password-input");
    const loginButton = await findByTestId("login-login-button");
  
    fireEvent.changeText(userInput, "admin");
    fireEvent.changeText(passwordInput, "admin");
    fireEvent.press(loginButton);
  
    const settingsButton = await findByTestId("home-settings-button");
  
    fireEvent.press(settingsButton);
  }); */
});


/* 

import { renderHook } from '@testing-library/react-hooks';

function useMyHook(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  return [value, setValue];
}

test('Verifica se o hook retorna o valor inicial', () => {
  const initialValue = 'Meu valor inicial';
  const { result } = renderHook(() => useMyHook(initialValue));
  
  expect(result.current[0]).toBe(initialValue);
});
*/
test('examples of some things', async () => {
  const expectedUsername = 'Bem vinda Taty';
  const screen = render(<Profile />,{wrapper: Provider});
  fireEvent.changeText(screen.getByTestId('input-name'), "Taty");
  fireEvent.press(screen.getByTestId('botao-test'));

  // Using `findBy` query to wait for asynchronous operation to finish
  const usernameOutput = await waitFor(()=>screen.findByTestId('printed-username'),{timeout:3000});
  console.log(usernameOutput.children)
  expect(usernameOutput.children[0]+usernameOutput.children[1]).toEqual(expectedUsername);
  // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
  
});

