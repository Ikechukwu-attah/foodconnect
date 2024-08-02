import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-background-dark">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="items-center justify-center flex-1 px-4">
          <Image
            className="w-[130px] h-[84px] mt-10"
            source={require("../assets/images/foodlogo.png")}
            resizeMode="contain"
          />

          <Image
            className="w-full h-[200px] mt-6"
            source={require("../assets/images/eating.jpg")}
            resizeMode="cover"
            style={{ borderRadius: 15 }}
          />

          <View className="px-4 mt-8">
            <Text className="text-3xl font-bold leading-tight text-center text-white">
              Discover Endless Food Bank with{" "}
              <Text className="text-primary">FoodConnect</Text>
            </Text>
          </View>

          <Text className="mb-8 text-sm font-normal text-center text-white mt-7">
            Eat to live
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles=""
            textStyles=""
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={"#000000"} barStyle="light-content" />
    </SafeAreaView>
  );
}
