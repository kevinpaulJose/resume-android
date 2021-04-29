import React from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchTheme, fetchUser } from "../redux/ActionCreators";
import Profile from "./ProfileHeaderComponent/MainComponent";
import ProfileBody from "./ProfileBodyComponent/MainComponent";
import * as SecureStore from "expo-secure-store";

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

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchTheme();
    this.props.fetchUser();
    // console.log("THEME -> " + JSON.stringify(this.props.theme));
    // console.log("USER -> " + JSON.stringify(this.props.user));
  }

  render() {
    if (this.props.theme.isLoading || this.props.user.isLoading) {
      return (
        <View>
          <Text>Loading </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Profile />
          <ProfileBody />
        </View>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
