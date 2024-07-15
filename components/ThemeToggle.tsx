import React from "react";
import { Pressable, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import { MoonStar } from "~/lib/icons/MoonStar";
import { Sun } from "~/lib/icons/Sun";
import { MonitorCheck } from "~/lib/icons/System";
import { useColorScheme } from "~/lib/useColorScheme";
import { cn } from "~/lib/utils";

interface ThemeToggleProps {
  onSyncWithSystem: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  onSyncWithSystem,
}) => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  const handleToggleTheme = async () => {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
    setAndroidNavigationBar(newTheme);
    await AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <View className={"flex-row justify-center gap-2"}>
      <Pressable
        onPress={onSyncWithSystem}
        className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
      >
        {({ pressed }) => (
          <View
            className={cn(
              "aspect-square pt-0.5 justify-center items-start web:px-5",
              pressed && "opacity-70",
            )}
          >
            <MonitorCheck
              className="text-foreground"
              size={24}
              strokeWidth={1.25}
            />
          </View>
        )}
      </Pressable>

      <Pressable
        onPress={handleToggleTheme}
        className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
      >
        {({ pressed }) => (
          <View
            className={cn(
              "aspect-square pt-0.5 justify-center items-start web:px-5",
              pressed && "opacity-70",
            )}
          >
            {isDarkColorScheme ? (
              <MoonStar
                className="text-foreground"
                size={24}
                strokeWidth={1.25}
              />
            ) : (
              <Sun className="text-foreground" size={24} strokeWidth={1.25} />
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
};
