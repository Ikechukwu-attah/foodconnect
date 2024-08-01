import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-background-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center justify-center w-full h-full gap-8 px-4">
          <Image
            className="w-[130px] h-[84px]"
            source={require("../assets/images/foodlogo.png")}
            resizeMode="contain"
          />

          <Image
            className="max-w-[300px] w-full h-[200px]"
            source={require("../assets/images/eating.jpg")}
            resizeMode="contain"
          />

          <View className="relative ">
            <Text className="text-3xl font-bold text-center text-white ">
              Discover Endless Food bank with {""}
              <Text className="text-primary">FoodConnect</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
