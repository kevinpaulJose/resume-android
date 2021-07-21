import React from "react";
import { Text, TextInput, View, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import { fetchTheme, fetchUser } from "../redux/ActionCreators";
import Profile from "./ProfileHeaderComponent/MainComponent";
import ProfileBody from "./ProfileBodyComponent/MainComponent";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FeatureScreen from "./FeatureComponent/MainComponent";
import LoadingScreen from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTheme: () => dispatch(fetchTheme()),
  fetchUser: () => dispatch(fetchUser()),
});

const Stack = createStackNavigator();
class Main extends React.Component {
  componentDidMount() {
    this.props.fetchTheme();
    this.props.fetchUser();
    // console.log("THEME -> " + JSON.stringify(this.props.theme));
    // console.log("USER -> " + JSON.stringify(this.props.user));
  }

  render() {
    if (this.props.theme.isLoading || this.props.user.isLoading) {
      // if (true) {
      return <LoadingScreen />;
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Feature" component={FeatureScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const MainScreen = ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Profile navigation={navigation} />
      <ProfileBody navigation={navigation} />
    </View>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
