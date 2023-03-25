import { Profile } from "./src/screens/Profile";
import { NativeBaseProvider } from "native-base";
import { Counter } from "./src/screens/Counter";
export default function App() {
  return (
    <NativeBaseProvider>
      <Counter />
    </NativeBaseProvider>
  );
}
