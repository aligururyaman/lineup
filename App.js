import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/Screen/Home/Home";
import { useEffect, useState } from "react";
import fonts from "./app/Constants/fonts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pitch from "./app/Screen/Pitch/Pitch";
import Loading from "./app/Screen/Loading/Loading";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    fonts();
    setFontsLoaded(true);
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {fontsLoaded ? (
      <Stack.Navigator initialRouteNanpmme="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Pitch" component={Pitch} options={{ headerShown: false }} />
      </Stack.Navigator>
      ) : (
        <Loading />
      )}
    </NavigationContainer>
  );
}

