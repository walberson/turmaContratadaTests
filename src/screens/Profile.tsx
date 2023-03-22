import { Button, Center, Heading, Input, Spinner, Stack, Switch } from "native-base";
import React, { useState } from "react";
import { View } from "react-native";

export function Profile() {

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
        <Heading>Seja bem vindo!</Heading>
        <Input testID="input-name" backgroundColor='blue.400' borderRadius='3xl' placeholder="Digite seu nome" />
        <Input borderRadius='3xl' placeholder="Digite sua senha" />
        <Switch size="lg" />
        <Spinner size="lg" />
        <Button borderRadius='3xl' p='2' px='8'> Logar </Button>
      </Stack>
    </View>
  );
}
