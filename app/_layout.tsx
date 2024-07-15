import "~/global.css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform } from "react-native";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { PortalHost } from "@rn-primitives/portal";
import { ThemeToggle } from "~/components/ThemeToggle";

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export { ErrorBoundary } from "expo-router";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const [manualTheme, setManualTheme] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadTheme = async () => {
      try {
        const theme = await AsyncStorage.getItem("theme");
        if (Platform.OS === "web") {
          document.documentElement.classList.add("bg-background");
        }
        if (!theme) {
          await AsyncStorage.setItem("theme", colorScheme);
          setIsColorSchemeLoaded(true);
          return;
        }
        const colorTheme =
          theme === "dark" ? "dark" : theme === "light" ? "light" : "system";
        if (colorTheme !== colorScheme && !manualTheme) {
          setColorScheme(colorTheme);
        }
        setIsColorSchemeLoaded(true);
      } catch (error) {
        console.error("Failed to load theme:", error);
      } finally {
        SplashScreen.hideAsync();
      }
    };
    loadTheme();
  }, [colorScheme, manualTheme, setColorScheme]);

  const handleSyncWithSystem = async () => {
    setManualTheme("system");
    setColorScheme("system");
    await AsyncStorage.setItem("theme", "system");
    alert("Theme synced with system");
  };

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerTitleStyle: { fontFamily: "Outfit" },
          headerRight: () => (
            <ThemeToggle onSyncWithSystem={handleSyncWithSystem} />
          ),
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Initial screen",
          }}
        />
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
};

export default RootLayout;
