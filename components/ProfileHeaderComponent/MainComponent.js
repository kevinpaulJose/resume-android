import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { connect } from "react-redux";
import { fetchTheme, fetchUser } from "../../redux/ActionCreators";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { BottomSheet } from "react-native-btr";
import { Platform } from "react-native";
import * as Haptics from "expo-haptics";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Share } from "react-native";

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
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    return (
      <>
        <ProfileBackground
          toggleSlider={this.toggleSlider}
          props={this.props}
        />
        <BottomSlider
          toggleSlider={this.toggleSlider}
          isOpen={this.state.isOpen}
          props={this.props}
        />
      </>
    );
  }
  toggleSlider = () => {
    this.state.isOpen
      ? this.setState({ isOpen: false })
      : this.setState({ isOpen: true });
    // console.log(this.state.isOpen);
  };
}

const ProfileBackground = ({ toggleSlider, props }) => {
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
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={() => {
            if (Platform.OS === "ios") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
          }}
          onPressOut={() => {
            if (Platform.OS === "ios") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).then(
                () => {
                  toggleSlider();
                }
              );
            } else {
              toggleSlider();
            }
          }}
          style={{
            position: "absolute",
            right: 15,
            top: Platform.OS == "ios" ? 50 : 30,
            zIndex: 100,
          }}
        >
          <Icon
            name="qr-code"
            type="ionicon"
            size={30}
            color={props.theme.data.profile_text_secondary_color_lighter}
            raised={false}
          />
        </TouchableOpacity>
        <AvatarImage props={props} />
        <ProfileText props={props} />
      </View>
    </View>
  );
};

const BottomSlider = ({ toggleSlider, isOpen, props }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Checkout this App | " + props.user.data.qr_content,
        url: props.user.data.qr_content,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <BottomSheet
      onBackButtonPress={() => toggleSlider()}
      onBackdropPress={() => toggleSlider()}
      visible={isOpen}
    >
      <View
        style={{
          width: windowWidth,
          height: windowHeight / 1.5,
          // backgroundColor: "red",
          backgroundColor: props.theme.data.profile_dark_color,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <TouchableOpacity
          onPressIn={() => {
            if (Platform.OS === "ios") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
          }}
          onPressOut={() => {
            if (Platform.OS === "ios") {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).then(
                () => {
                  toggleSlider();
                }
              );
            } else {
              toggleSlider();
            }
          }}
          activeOpacity={1}
          style={{
            position: "absolute",
            left: 15,
            top: 15,
          }}
        >
          <Icon
            name="close"
            type="ionicon"
            size={30}
            color={props.theme.data.profile_text_secondary_color}
            raised={false}
          />
        </TouchableOpacity>
        <View
          style={{
            width: windowWidth / 2,
            height: windowWidth / 2,
            // backgroundColor: "red",
            backgroundColor: props.theme.data.profile_background_color,
            position: "absolute",
            left: windowWidth / 4,
            top: windowWidth / 4,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: windowWidth / 2 - 20,
            height: windowWidth / 2 - 20,
            backgroundColor: "green",
            position: "absolute",
            left: windowWidth / 4 + 10,
            top: windowWidth / 4 + 10,
          }}
        >
          <Image
            source={{ uri: props.user.data.qr_image }}
            style={{
              width: windowWidth / 2 - 20,
              height: windowWidth / 2 - 20,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: windowWidth / 2 + windowWidth / 4 + 20,
            left: windowWidth / 4 + (windowWidth / 4 + 20) / 2,
          }}
        >
          <Icon
            name="share-outline"
            type="ionicon"
            size={30}
            color={props.theme.data.profile_background_color}
            raised={true}
            reverse={true}
            onPress={onShare}
          />
        </View>
      </View>
    </BottomSheet>
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
