import React from "react";
import { View, Text, Button } from "react-native";
import Body from "./BodyComponent";
import Header from "./HeaderComponent";

const FeatureScreen = ({ route, navigation }) => {
  return (
    <View>
      <Header props={route.params.props} navigation={navigation} />
      <Body props={route.params.props} navigation={navigation} />
    </View>
  );
};

export default FeatureScreen;
