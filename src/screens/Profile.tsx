import React from "react";
import { View, Text, TextInput, Button } from "react-native";


export function Profile () {
    return (
        <View >
        <Text>Turma DevinEDP</Text>
        <TextInput testID="input-id-name" placeholder="name" value='Walberson' />
        <TextInput placeholder="password" />
        <Button title='salvar'/>
        </View>
    );
}