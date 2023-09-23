import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./screens/Login";
import { Disclaimer } from "./screens/Disclaimer";
import { Station } from "./screens/Station";
import { Details } from "./screens/Details";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerMode: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Disclaimer" component={Disclaimer} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Station" component={Station} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
