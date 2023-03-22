import { Profile } from "./src/screens/Profile";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <Profile />
    </NativeBaseProvider>
  );
}
