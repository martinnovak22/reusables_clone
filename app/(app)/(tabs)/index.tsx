import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Card } from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function IndexScreen() {
  const [selected, setSelected] = useState({
    label: "Apple",
    value: "apple",
    emoji: "🍎",
  });
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: 30,
    left: 12,
    right: 12,
  };

  const handleValueChange = (newValue) => {
    const selectedItem = options.find((item) => item.value === newValue.value);
    if (selectedItem) {
      setSelected(selectedItem);
    }
  };
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text className={"font-Outfit text-3xl"}>This is configuration page</Text>
      <Card className={"w-full max-w-sm rounded-2xl p-6 gap-4"}>
        <Text>Selected: {selected.emoji}</Text>
        <Select value={selected} onValueChange={handleValueChange}>
          <SelectTrigger className="w-full">
            <SelectValue
              className="text-foreground text-sm native:text-lg"
              placeholder="Select a fruit"
            />
          </SelectTrigger>
          <SelectContent insets={contentInsets}>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Card>
    </View>
  );
}

const options = [
  { label: "Apple", value: "apple", emoji: "🍎" },
  { label: "Banana", value: "banana", emoji: "🍌" },
  { label: "Blueberry", value: "blueberry", emoji: "🫐" },
  { label: "Grapes", value: "grapes", emoji: "🍇" },
  { label: "Pineapple", value: "pineapple", emoji: "🍍" },
  { label: "Orange", value: "orange", emoji: "🍊" },
  { label: "Kiwi", value: "kiwi", emoji: "🥝" },
];
