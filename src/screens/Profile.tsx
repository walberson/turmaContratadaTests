import {
  Button,
  Center,
  Heading,
  Input,
  Spinner,
  Stack,
  Switch,
} from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
import { Name } from "../../components/Name";

export function Profile() {
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  return (
    <View>
      <Stack
        h="full"
        px="10"
        direction="column"
        alignItems="center"
        justifyContent="center"
        space="6"
      >
        {show && <Heading testID="printed-username">Bem-vinda {user}</Heading>}
        <Input
          value={user}
          onChangeText={setUser}
          testID="input-name"
          borderRadius="3xl"
          placeholder="Digite seu nome"
        />
        <Input
          testID="input-password"
          borderRadius="3xl"
          placeholder="Digite sua senha"
        />

        <Button
          testID="botao-test"
          onPress={() => {
            setTimeout(()=>{
              setShow(true);
            },2000)
          }}
          borderRadius="3xl"
          p="2"
          px="8"
        >
          Logar
        </Button>

      </Stack>
    </View>
  );
}
