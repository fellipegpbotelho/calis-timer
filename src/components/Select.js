import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Select extends Component {
  state = {
    current: ""
  };

  componentDidMount() {
    this.setState({
      current: this.props.current
    });
  }

  handlePress = option => () => {
    this.setState({
      current: option
    });
    if (this.props.onSelect) {
      this.props.onSelect(option);
    }
  };

  render() {
    const { options, label } = this.props;
    const { current } = this.state;
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          {options.map(option => {
            let id = "";
            let label = "";
            if (typeof option === "string") {
              id = option;
              label = option;
            }
            if (typeof option === "object") {
              id = option["id"];
              label = option["label"];
            }
            return (
              <TouchableOpacity
                key={id}
                style={[
                  styles.option,
                  id === current ? styles.optionSelected : null
                ]}
                onPress={this.handlePress(id)}
              >
                <Text style={styles.optionLabel}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    textAlign: "center",
    color: "white",
    fontFamily: "Ubuntu-Regular",
    fontSize: 24
  },
  option: {
    padding: 8
  },
  optionSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  optionLabel: {
    color: "white",
    fontFamily: "Ubuntu-Regular",
    fontSize: 24
  }
});

export default Select;
