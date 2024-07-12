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

// <CardHeader className="items-center">
//   <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
//     <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
//     <AvatarFallback>
//       <Text>RS</Text>
//     </AvatarFallback>
//   </Avatar>
//   <View className="p-3" />
//   <CardTitle className="pb-2 text-center">Rick Sanchez</CardTitle>
//   <View className="flex-row">
//     <CardDescription className="text-base font-semibold">
//       Scientist
//     </CardDescription>
//     <Tooltip delayDuration={150}>
//       <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
//         <Info
//             size={14}
//             strokeWidth={2.5}
//             className="w-4 h-4 text-foreground/70"
//         />
//       </TooltipTrigger>
//       <TooltipContent className="py-2 px-4 shadow">
//         <Text className="native:text-lg">Freelance</Text>
//       </TooltipContent>
//     </Tooltip>
//   </View>
// </CardHeader>
// <CardContent>
//   <View className="flex-row justify-around gap-3">
//     <View className="items-center">
//       <Text className="text-sm text-muted-foreground">Dimension</Text>
//       <Text className="text-xl font-semibold">C-137</Text>
//     </View>
//     <View className="items-center">
//       <Text className="text-sm text-muted-foreground">Age</Text>
//       <Text className="text-xl font-semibold">70</Text>
//     </View>
//     <View className="items-center">
//       <Text className="text-sm text-muted-foreground">Species</Text>
//       <Text className="text-xl font-semibold">Human</Text>
//     </View>
//   </View>
// </CardContent>
// <CardFooter className="flex-col gap-3 pb-0">
//   <View className="flex-row items-center overflow-hidden">
//     <Text className="text-sm text-muted-foreground">Productivity:</Text>
//     <LayoutAnimationConfig skipEntering>
//       <Animated.View
//           key={progress}
//           entering={FadeInUp}
//           exiting={FadeOutDown}
//           className="w-11 items-center"
//       >
//         <Text className="text-sm font-bold text-sky-600">
//           {progress}%
//         </Text>
//       </Animated.View>
//     </LayoutAnimationConfig>
//   </View>
//   <Progress
//       value={progress}
//       className="h-2"
//       indicatorClassName="bg-sky-600"
//   />
//   <Button
//       variant="outline"
//       className="shadow shadow-foreground/5"
//       onPress={updateProgressValue}
//   >
//     <Text>Update</Text>
//   </Button>
//   <Button onPress={() => router.navigate("(app)")}>
//     <Text>To app</Text>
//   </Button>
// </CardFooter>
