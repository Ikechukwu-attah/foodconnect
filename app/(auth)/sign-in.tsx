import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import FormField from "@/components/FormField";

const SignIn = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="h-full bg-background-dark">
      <ScrollView>
        <View className="items-center justify-center w-full h-full px-4 ">
          <Image
            className="w-[115px] h-[84px] mt-10"
            source={require("../../assets/images/foodlogo.png")}
            resizeMode="contain"
          />
          <Text className="mt-10 text-2xl font-semibold text-white ">
            Login to FoodConnect
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
