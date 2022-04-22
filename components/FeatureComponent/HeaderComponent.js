import React from "react";
import { Platform } from "react-native";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { getIcon } from "../../const/default_theme";
import { fetchTheme, fetchUser } from "../../redux/ActionCreators";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default Header = ({ props, navigation }) => {
  //   console.log(props);
  return <ProfileBackground props={props} navigation={navigation} />;
};

const ProfileBackground = ({ props, navigation }) => {
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight / 3.4 + 10,
        backgroundColor: props.theme.data.profile_background_color,
      }}
    >
      <View
        style={{
          width: windowWidth,
          height: windowHeight / 5,
          backgroundColor: props.theme.data.profile_dark_color,
        }}
      >
        {Platform.OS === "android" ? (
          <View
            style={{
              position: "absolute",
              top: 45,
              left: 10,
            }}
          >
            <Icon
              name="arrow-back-outline"
              type="ionicon"
              size={30}
              color="rgb(100,100,100)"
              // reverse={true}
              raised={false}
              onPress={() => navigation.pop()}
            />
          </View>
        ) : (
          <View></View>
        )}

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
        top: windowHeight / 7,
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
          {props.selected.data}
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
      <View
        style={{
          borderRadius: 100,
          backgroundColor: props.color,
          width: 110,
          height: 110,
          marginTop: 100,
          marginLeft: 30,
          position: "absolute",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name={getIcon({ name: props.selected.data })}
            type="ionicon"
            size={40}
            color="rgba(100,100,100,0)"
            reverse={true}
            raised={false}
          />
        </View>
      </View>
    </View>
  );
};
