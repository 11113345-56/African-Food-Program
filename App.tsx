// App.tsx
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import SplashScreen from "./screens/SplashScreen";
import AuthScreen from "./screens/AuthScreen";
import FarmerDashboard from "./screens/FarmerDashboard";
import UploadHarvest from "./screens/UploadHarvest";
import Notifications from "./screens/Notifications";
import Cashier from "./screens/Cashier";

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  FarmerDashboard: undefined;
  UploadHarvest: undefined;
  Notifications: undefined;
  Cashier: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
        <Stack.Screen name="UploadHarvest" component={UploadHarvest} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Cashier" component={Cashier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
