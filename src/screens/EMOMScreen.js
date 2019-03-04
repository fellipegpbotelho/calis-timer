import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Select from "../components/Select";
import Title from "../components/Title";

const EMOMScreen = () => {
  return (
    <View style={styles.container}>
      <Title title="EMOM" subtitle="Every Minute on the Minute." />
      <Select
        label="Alertas:"
        current={"0"}
        options={[
          { id: "0", label: "desligado" },
          { id: "15", label: "15s" },
          { id: "30", label: "30s" },
          { id: "45", label: "45s" }
        ]}
        onSelect={option => console.log("O selecionado foi ", option)}
      />
      <Select
        label="Contagem regressiva:"
        current={"0"}
        options={[{ id: "1", label: "sim" }, { id: "0", label: "não" }]}
        onSelect={option => console.log("O selecionado foi ", option)}
      />
    </View>
  );
};

EMOMScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6304A",
    paddingTop: 100
  }
});

export default EMOMScreen;
