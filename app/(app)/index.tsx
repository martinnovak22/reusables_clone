import { View } from "react-native";
import { Text } from "components/ui/text";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { router } from "expo-router";

export default function IndexScreen() {
  const [number, setNumber] = useState(0);
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Text className={"font-Outfit text-3xl"}>This is home page</Text>
      <Card className={"w-full max-w-sm rounded-2xl p-6 gap-4"}>
        <Text className={"font-Outfit text-2xl text-center"}>{number}</Text>
        <Button onPress={() => setNumber(number + 1)}>
          <Text>Click me</Text>
        </Button>
        <Button onPress={() => setNumber(0)}>
          <Text>Reset</Text>
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <Text>Go profile</Text>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will navigate you to profile screen.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                <Text>Cancel</Text>
              </AlertDialogCancel>
              <AlertDialogAction
                onPress={() => router.navigate("(app)/profile")}
              >
                <Text>Continue</Text>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Card>
    </View>
  );
}
