import { Haptics } from "expo";
import * as React from "react";
import { Linking } from "react-native";
import { Platform } from "react-native";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Icon } from "react-native-elements";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default BottomBar = ({ props }) => {
  return (
    <View
      style={{
        width: windowWidth,
        height: 60,
        backgroundColor: props.theme.data.profile_background_color,
        // backgroundColor: "red",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
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
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).then(() => {
              Linking.openURL(
                "https://play.google.com/store/apps/developer?id=KJ+Productions"
              );
            });
          } else {
            Linking.openURL(
              "https://play.google.com/store/apps/developer?id=KJ+Productions"
            );
          }
        }}
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: props.theme.data.profile_dark_color,
          height: 60,
          borderRightWidth: 2,
          borderRightColor: props.theme.data.profile_background_color,
        }}
      >
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="logo-google-playstore"
            type="ionicon"
            size={33}
            color={props.theme.data.profile_text_color}
            // reverse={true}
            raised={false}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPressOut={() => {
          if (Platform.OS === "ios") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).then(() => {
              Linking.openURL(
                "https://www.linkedin.com/in/kevin-joseph-paul-44638b182/"
              );
            });
          } else {
            Linking.openURL(
              "https://www.linkedin.com/in/kevin-joseph-paul-44638b182/"
            );
          }
        }}
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: props.theme.data.profile_dark_color,
          height: 60,
          borderRightWidth: 2,
          borderRightColor: props.theme.data.profile_background_color,
        }}
      >
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="logo-linkedin"
            type="ionicon"
            size={33}
            color={props.theme.data.profile_text_color}
            // reverse={true}
            raised={false}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={() => {
          if (Platform.OS === "ios") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
        }}
        onPressOut={() => {
          if (Platform.OS === "ios") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).then(() => {
              Linking.openURL(`mailto:${props.user.data.mail}`);
            });
          } else {
            Linking.openURL(`mailto:${props.user.data.mail}`);
          }
        }}
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: props.theme.data.profile_dark_color,
          height: 60,
        }}
      >
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="mail"
            type="ionicon"
            size={33}
            color={props.theme.data.profile_text_color}
            // reverse={true}
            raised={false}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
