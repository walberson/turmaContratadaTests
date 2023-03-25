import { View, Text, Stack, Heading, Button } from "native-base";
import { useEffect, useState } from "react";
import { useCounter } from "../../hooks/useCounter";

export function Counter() {
  const [counter, incrementCounter] = useCounter();

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
        <Heading>Contador: {counter}</Heading>
        <Button onPress={()=>incrementCounter()}>Incrementar</Button>
      </Stack>
    </View>
  );
}
