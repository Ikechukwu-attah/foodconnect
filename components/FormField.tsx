import { View, Text } from "react-native";
import React from "react";

interface FormProps {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: string;
}
const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
}: FormProps) => {
  return (
    <View className="space-y-2">
      <Text className="text-base ">Formfield</Text>
    </View>
  );
};

export default FormField;
