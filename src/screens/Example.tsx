import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';

export function Example() {
  const [name, setUser] = React.useState('');
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <TextInput value={name} onChangeText={setUser} testID="input" />
      <Button
        title="Print Username"
        onPress={() => {
          // let's pretend this is making a server request,
          // so it's async (you'd want to mock this imaginary request in your unit tests)
          setTimeout(() => {
            setShow(true);
          }, 1000);
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  );
}

