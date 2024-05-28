import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "HelveticaNeueBlack" : require("../assets/fonts/HelveticaNeueBlack.otf"),
    "HelveticaNeueBold" : require("../assets/fonts/HelveticaNeueBold.otf"),
    "HelveticaNeueHeavy" : require("../assets/fonts/HelveticaNeueHeavy.otf"),
    "HelveticaNeueLight": require("../assets/fonts/HelveticaNeueLight.otf"),
    "HelveticaNeueMedium" : require("../assets/fonts/HelveticaNeueMedium.otf"),
    "HelveticaNeueRoman" : require("../assets/fonts/HelveticaNeueRoman.otf"),
    "HelveticaNeueThin": require("../assets/fonts/HelveticaNeueThin.otf"),
  });
  /**
   * Ensuring that the SplashScreen is hidden only after the fonts are loaded
   */
  useEffect(() => {
    if (error) {
      console.error(error);
    }
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
      <Stack.Screen name="(auth)" options={{ headerShown: false}}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
      <Stack.Screen name="(cards)" options={{ headerShown: false}}/>
    </Stack>
  );
}
