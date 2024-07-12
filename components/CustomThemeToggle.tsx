import { View } from "react-native";
import { MonitorCheck } from "~/lib/icons/System";
import { ThemeToggle } from "~/components/ThemeToggle";
import * as React from "react";
import { useColorScheme } from "~/lib/useColorScheme";
import { useColorScheme as useSystemColorScheme } from "react-native";

export const CustomThemeToggle = () => {
  const { setColorScheme } = useColorScheme();
  const { colorScheme } = useSystemColorScheme();
  const handleTheme = () => {
    setColorScheme(colorScheme);
    alert("Theme synced with system");
    setColorScheme("system");
  };
  return (
    <View className={"flex-row justify-center gap-2"}>
      <MonitorCheck
        className="text-foreground active:opacity-30"
        size={24}
        strokeWidth={1.25}
        onPress={() => handleTheme()}
      />
      <ThemeToggle />
    </View>
  );
};
