import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { connect } from "react-redux";
import { fetchTheme, fetchUser } from "../../redux/ActionCreators";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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

class Profile extends React.Component {
  render() {
    return <ProfileBackground props={this.props} />;
  }
}

const ProfileBackground = ({ props }) => {
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight / 3.7,
        backgroundColor: props.theme.data.profile_background_color,
        // backgroundColor: "red",
      }}
    >
      <View
        style={{
          width: windowWidth,
          height: windowHeight / 5,
          backgroundColor: props.theme.data.profile_dark_color,
        }}
      >
        <AvatarImage props={props} />
        <ProfileText props={props} />
      </View>
    </View>
  );
};

const ProfileText = ({ props }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: windowHeight / 8,
        left: windowWidth / 2.3,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 0.06 * windowWidth,
            color: props.theme.data.profile_text_color,
            fontWeight: "bold",
          }}
        >
          {props.user.data.name}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: props.theme.data.profile_text_secondary_color,
            fontSize: 0.03 * windowWidth,
          }}
        >
          {props.user.data.designation}
        </Text>
      </View>
    </View>
  );
};

const AvatarImage = ({ props }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: props.theme.data.profile_dark_color,
          borderRadius: 100,
          // backgroundColor: "black",
          width: 130,
          height: 130,
          marginTop: 90,
          marginLeft: 20,
        }}
      ></View>
      <Avatar
        containerStyle={{
          borderRadius: 100,
          backgroundColor: "red",
          width: 110,
          height: 110,
          marginTop: 100,
          marginLeft: 30,
          position: "absolute",
        }}
        size="xlarge"
        rounded
        source={{
          uri: props.user.data.profile_image,
        }}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
