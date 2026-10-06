import {
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}