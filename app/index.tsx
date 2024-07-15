import * as React from "react";
import { View } from "react-native";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { useFonts } from "expo-font";

export default function Screen() {
  const [fontsLoaded] = useFonts({
    Outfit: require("../assets/fonts/Outfit.ttf"),
  });

  const [login, setLogin] = React.useState({
    name: "",
    password: "",
  });

  if (!fontsLoaded) return null;

  const handleInputChange = (input: string, text: string) => {
    setLogin((prevState) => ({
      ...prevState,
      [input]: text,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login.name || !login.password) {
      alert("Username or password is empty");
      return;
    }
    console.log("Login Data: ", login);
    setLogin({ name: "", password: "" });
    router.navigate("(app)");
  };

  return (
    <View className="flex-1 justify-center items-center gap-5 bg-secondary/30 ">
      <Card className="w-full max-w-sm rounded-2xl p-6 gap-4">
        <View>
          <Label
            nativeID={"name"}
            className={"native:text-xl mb-2 font-Outfit"}
          >
            Username
          </Label>
          <Input
            placeholder="Username..."
            value={login.name}
            onChangeText={(text) => handleInputChange("name", text)}
            placeholderTextColor={"#9CA3AF"}
            aria-labelledby={"name"}
            aria-errormessage="inputError"
            className={"font-Outfit"}
          />
        </View>
        <View>
          <Label
            nativeID={"password"}
            className={"native:text-xl mb-2 font-Outfit"}
          >
            Password
          </Label>
          <Input
            placeholder="********"
            value={login.password}
            onChangeText={(text) => handleInputChange("password", text)}
            placeholderTextColor={"#9CA3AF"}
            secureTextEntry={true}
            aria-labelledby={"password"}
            aria-errormessage="inputError"
          />
        </View>
        <Button onPress={handleSubmit}>
          <Text className={"font-Outfit"}>Login</Text>
        </Button>
      </Card>
    </View>
  );
}
