import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Menu } from "~/lib/icons/Menu";
import { Button } from "~/components/ui/button";
import * as React from "react";
import { CustomThemeToggle } from "~/components/CustomThemeToggle";

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Outfit" },
          drawerStyle: { width: "50%" },
          headerRight: () => <CustomThemeToggle />,
          headerLeft: () => (
            <Button
              onPress={() => navigation.toggleDrawer()}
              className="active:opacity-30 bg-transparent"
            >
              <Menu
                className="text-foreground"
                style={{ width: 25, height: 25 }}
              />
            </Button>
          ),
          headerRightContainerStyle: {
            paddingRight: 20,
          },
        })}
      >
        <Drawer.Screen
          name={"index"}
          options={{
            title: "Home",
          }}
        />
        <Drawer.Screen
          name={"profile"}
          options={{
            title: "Profile",
          }}
        />
        <Drawer.Screen
          name={"(tabs)"}
          options={{
            title: "Configuration",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
