import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress, style, styleText }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={[styles.text, styleText]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "Ubuntu-Regular",
    color: "white",
    fontSize: 24,
    textAlign: "center"
  }
});

export default Button;
