import { ImageStyle, Pressable, StyleProp, View } from "react-native";
import { Text } from "components/ui/text";
import { Card } from "~/components/ui/card";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Power } from "~/lib/icons/Power";
import { cn } from "~/lib/utils";
import * as React from "react";

export default function IndexScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30 ">
      <Button
        onPress={() => router.navigate("(app)")}
        className="absolute top-0 left-0 pl-3 active:opacity-30 bg-transparent"
      >
        <ArrowLeft
          className="text-foreground"
          style={{ width: 25, height: 25 }}
        />
      </Button>

      <Card className={"w-full max-w-sm rounded-2xl p-6 gap-1"}>
        <Avatar
          alt="Zach Nugent's Avatar"
          className={"absolute self-center -top-16 w-20 h-20"}
        >
          <AvatarImage
            style={{ width: "100%", height: "100%" } as StyleProp<ImageStyle>}
            source={require("../../assets/images/github.jpeg")}
          />
          <AvatarFallback>
            <Text>A</Text>
          </AvatarFallback>
        </Avatar>

        <View className={"flex-row items-center gap-2"}>
          <Text className={"font-Outfit"}>Name:</Text>
          <Text className={"font-Outfit"}>Martin Novák</Text>
        </View>
        <View className={"flex-row items-center gap-2"}>
          <Text className={"font-Outfit"}>Age:</Text>
          <Text className={"font-Outfit"}>23</Text>
        </View>
        <View className={"flex-row items-center gap-2"}>
          <Text className={"font-Outfit"}>Work:</Text>
          <Text className={"font-Outfit"}>IT, coding in Argo22</Text>
        </View>
      </Card>

      <Pressable
        onPress={() => router.navigate("/")}
        className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
      >
        {({ pressed }) => (
          <View
            className={cn(
              "aspect-square justify-center bg-secondary/30 p-3 rounded-2xl",
              pressed && "opacity-70",
            )}
          >
            <Power
              className="text-foreground"
              style={{ width: 25, height: 25 }}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
}
