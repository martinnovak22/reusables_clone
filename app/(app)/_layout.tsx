import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Menu } from "~/lib/icons/Menu";
import { Button } from "~/components/ui/button";
import * as React from "react";

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Outfit" },
          drawerStyle: { width: "50%" },
          headerLeft: () => (
            <Button
              onPress={() => navigation.toggleDrawer()}
              className="active:opacity-30 bg-transparent"
            >
              <Menu className="text-foreground" size={24} />
            </Button>
          ),
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
