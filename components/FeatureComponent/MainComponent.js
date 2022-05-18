import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import Body from "./BodyComponent";
import Header from "./HeaderComponent";

const FeatureScreen = ({ route, navigation }) => {
  return (
    <ScrollView>
      <Header props={route.params.props} navigation={navigation} />
      <Body props={route.params.props} navigation={navigation} />
    </ScrollView>
  );
};

export default FeatureScreen;
