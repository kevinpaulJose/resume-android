import React from "react";
import { View, Text, Button } from "react-native";

const FeatureScreen = ({ route, navigation }) => {
  console.log(route.params);
  const selectedValue = route.params.props.selected.data;
  return (
    <View>
      <Text>{route.params.props.selected.data}</Text>
    </View>
  );
};

export default FeatureScreen;
