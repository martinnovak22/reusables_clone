import { Tabs } from "expo-router";
import { Cog } from "~/lib/icons/Cog";
import { Wrench } from "~/lib/icons/Wrench";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Configuration",
          tabBarIcon: ({ color }) => <Wrench size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Cog size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
