import React from "react";
import { View, Text, Button } from "react-native";

const FeatureScreen = ({ route, navigation }) => {
  const selectedValue = route.params.props.selected.data;
  const skills = route.params.props.user.data.metadata.filter(function (data) {
    if (data.type == "Skills") return data;
  });
  const hobbies = route.params.props.user.data.metadata.filter(function (data) {
    if (data.type == "Hobbies") return data;
  });
  const work_exp = route.params.props.user.data.metadata.filter(function (
    data
  ) {
    if (data.type == "Work Experience") return data;
  });
  const projects = route.params.props.user.data.metadata.filter(function (
    data
  ) {
    if (data.type == "Projects") return data;
  });
  console.log(selectedValue);
  return (
    <View style={{ backgroundColor: "red", padding: 10 }}>
      <Text>{route.params.props.selected.data}</Text>
    </View>
  );
};

export default FeatureScreen;
