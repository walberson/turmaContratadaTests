import { View, Text, TextInput } from "react-native";
import React from "react";
import { Heading, Input,Button } from "native-base";
export function Profile() {
  return (
    <View>
      
      <Text testID="text-title">Perfil</Text>
      <TextInput testID="input-name" style={{borderColor:'red'}} placeholder="Nome" autoCorrect={false} value='Rodrigo' />
      <TextInput testID="input-surname" placeholder="Sobrenome" value='Rodrigo' />
      {/* <Button testID="button-surname" title="Salvar" /> */}
      <Input>Olá</Input>
      <Button testID="botao-test" >My Text</Button>
      <Heading>Olá Mundo</Heading>
    </View>
  );
}