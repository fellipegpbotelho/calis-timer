import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard
} from "react-native";

import Select from "../components/Select";
import Title from "../components/Title";

class EMOMScreen extends Component {
  state = {
    keyboardIsVisible: false,
    alerts: "0",
    countdown: "0",
    time: "15"
  };

  componentDidMount() {
    this.kbShow = Keyboard.addListener("keyboardDidShow", () => {
      this.setState({ keyboardIsVisible: true });
    });
    this.kbHide = Keyboard.addListener("keyboardDidHide", () => {
      this.setState({ keyboardIsVisible: false });
    });
  }

  componentWillUnmount() {
    this.kbShow.remove();
    this.kbHide.remove();
  }

  render() {
    const { alerts, countdown, time } = this.state;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Title
            title="EMOM"
            subtitle="Every Minute on the Minute."
            style={{ paddingTop: this.state.keyboardIsVisible ? 0 : 20 }}
          />
          <Image
            style={{ alignSelf: "center", marginBottom: 15 }}
            source={require("../../assets/settings-cog.png")}
          />
          <Select
            label="Alertas:"
            current={alerts}
            options={[
              { id: "0", label: "desligado" },
              { id: "15", label: "15s" },
              { id: "30", label: "30s" },
              { id: "45", label: "45s" }
            ]}
            onSelect={option => this.setState({ alerts: option })}
          />
          <Select
            label="Contagem regressiva:"
            current={countdown}
            options={[{ id: "1", label: "sim" }, { id: "0", label: "não" }]}
            onSelect={option => this.setState({ countdown: option })}
          />
          <Text style={styles.label}>Quantos minutos:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={time}
            onChangeText={text => this.setState({ time: text })}
          />
          <Text style={styles.label}>minutos</Text>
          <Image
            style={{ alignSelf: "center" }}
            source={require("../../assets/btn-play.png")}
          />
          <Text>Testar</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

EMOMScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6304A"
  },
  label: {
    textAlign: "center",
    color: "white",
    fontFamily: "Ubuntu-Regular",
    fontSize: 24
  },
  input: {
    textAlign: "center",
    color: "black",
    fontFamily: "Ubuntu-Regular",
    fontSize: 48
  }
});

export default EMOMScreen;
