import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-primary rounded-xl min-h-[56px] justify-center items-center w-full mt-10 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } `}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text className={`text-lg font-bold text-white ${textStyles}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
