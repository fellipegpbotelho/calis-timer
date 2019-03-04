import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CalisTimer</Text>
      <Button
        style={styles.button}
        onPress={() => props.navigation.navigate("EMOM")}
      >
        EMOM
      </Button>
      <Button
        style={styles.button}
        onPress={() => props.navigation.navigate("EMOM")}
      >
        AMRAP
      </Button>
      <Button
        style={styles.button}
        onPress={() => props.navigation.navigate("EMOM")}
      >
        Isometria
      </Button>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6304A"
  },
  logo: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 48,
    textAlign: "center",
    color: "white",
    marginTop: 110,
    marginBottom: 110
  },
  button: {
    padding: 20
  }
});

export default HomeScreen;
