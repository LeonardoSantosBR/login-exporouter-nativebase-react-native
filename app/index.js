import SigninScreen from "./screens/login/signin/signin";
import { View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SigninScreen />
    </View>
  );
}
