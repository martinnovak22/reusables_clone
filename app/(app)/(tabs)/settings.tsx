import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Card } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { useState } from "react";

export default function IndexScreen() {
  const [checked, setChecked] = useState(false);
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text className={"font-Outfit text-3xl"}>This is settings page</Text>
      <Card className={"w-full max-w-sm rounded-2xl p-6 gap-4"}>
        <View className={"flex-row justify-between items-center"}>
          <Text className={"font-Outfit"} nativeID={"checkbox"}>
            {checked ? "Checked" : "Check me"}
          </Text>
          <Checkbox
            aria-labelledby={"checkbox"}
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
          />
        </View>
      </Card>
    </View>
  );
}
