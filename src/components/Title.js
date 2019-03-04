import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  title: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 48,
    color: "white",
    textAlign: "center"
  },
  subtitle: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 14,
    color: "white",
    textAlign: "center"
  }
});

export default Title;
