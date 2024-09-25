import { useEffect } from "react";
import { registerRootComponent } from "expo";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "../contexts/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Thin: require("../assets/fonts/Lato-Thin.ttf"),
    Light: require("../assets/fonts/Lato-Light.ttf"),
    Regular: require("../assets/fonts/Lato-Regular.ttf"),
    Bold: require("../assets/fonts/Lato-Bold.ttf"),
    Black: require("../assets/fonts/Lato-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <StatusBar style="light" />
      <Slot screenOptions={{ headerShown: false }} initialRouteName="(app)" />
    </AuthProvider>
  );
}

registerRootComponent(App);