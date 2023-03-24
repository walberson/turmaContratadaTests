import { Text } from "native-base";
interface NameProps{
    name: string;
    age: number;
}
export function Name({ name, age }: NameProps) {
  return <Text fontSize='4xl'>{name}</Text>;
}
