import React from "react";
import { View, Dimensions, Text, StyleSheet, ScrollView } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Hexagon = ({ props, text }) => {
  return (
    <View>
      <View key="External">
        <View
          style={{
            width: 150,
            height: 82.5,
            backgroundColor: props.theme.data.profile_dark_color,
          }}
        >
          <View
            style={{
              width: 150,
              height: 82.5,
              backgroundColor: props.theme.data.profile_dark_color,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: -37.5,
              left: 0,
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderLeftWidth: 75,
              borderLeftColor: "transparent",
              borderRightWidth: 75,
              borderRightColor: "transparent",
              borderBottomWidth: 37.5,
              borderBottomColor: props.theme.data.profile_dark_color,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -37.5,
              left: 0,
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderLeftWidth: 75,
              borderLeftColor: "transparent",
              borderRightWidth: 75,
              borderRightColor: "transparent",
              borderTopWidth: 38,
              borderTopColor: props.theme.data.profile_dark_color,
            }}
          />
        </View>
      </View>

      <View
        key="Internal"
        style={{
          position: "absolute",
          left: 7,
          top: 5,
        }}
      >
        <View
          style={{
            width: 136,
            height: 70,
            backgroundColor: props.theme.data.profile_background_color,
          }}
        >
          <View
            style={{
              width: 136,
              height: 55,
              backgroundColor: props.theme.data.profile_background_color,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: -34,
              left: 0,
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderLeftWidth: 67,
              borderLeftColor: "transparent",
              borderRightWidth: 67,
              borderRightColor: "transparent",
              borderBottomWidth: 34,
              borderBottomColor: props.theme.data.profile_background_color,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: -37,
              left: 0,
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderLeftWidth: 69,
              borderLeftColor: "transparent",
              borderRightWidth: 69,
              borderRightColor: "transparent",
              borderTopWidth: 37,
              borderTopColor: props.theme.data.profile_background_color,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const HexaView = ({ props, navigation }) => {
  return (
    <View
      style={{
        height: windowHeight,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          key="dummy-left-wrapper"
          style={{
            position: "absolute",
            top: windowHeight / 20,
            left: -125,
          }}
        >
          <Hexagon props={props} text="" />
        </View>
        <View
          key="Skills-wrapper"
          style={{
            marginTop: windowHeight / 20,
            marginLeft: windowWidth / 9.5,
          }}
        >
          <Hexagon props={props} text="Skills" />
        </View>
        <View
          key="Projects-wrapper"
          style={{
            marginTop: windowHeight / 20,
            marginLeft: 20,
          }}
        >
          <Hexagon text="Projects" props={props} />
        </View>
        <View
          key="dummy-right-wrapper"
          style={{
            position: "absolute",
            top: windowHeight / 20,
            right: -125,
          }}
        >
          <Hexagon props={props} text="" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          key="dummy-right-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: -40,
          }}
        >
          <Hexagon text="" props={props} />
        </View>
        <View
          key="Work-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
          }}
        >
          <Hexagon text="Work Experience" props={props} />
        </View>
        <View
          key="dummy-left-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
          }}
        >
          <Hexagon text="" props={props} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          key="dummy-left1-wrapper"
          style={{
            position: "absolute",
            top: windowHeight / 15,
            left: -125,
          }}
        >
          <Hexagon props={props} text="" />
        </View>
        <View
          key="hobbies-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: windowWidth / 9.5,
          }}
        >
          <Hexagon props={props} text="Hobbies" />
        </View>
        <View
          key="Contact-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
          }}
        >
          <Hexagon text="Contact me" props={props} />
        </View>
        <View
          key="dummy-right1-wrapper"
          style={{
            position: "absolute",
            top: windowHeight / 15,
            right: -125,
          }}
        >
          <Hexagon props={props} text="" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          key="dummy-right-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: -40,
          }}
        >
          <Hexagon text="" props={props} />
        </View>
        <View
          key="Work-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
          }}
        >
          <Hexagon text="Work Experience" props={props} />
        </View>
        <View
          key="dummy-left-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
          }}
        >
          <Hexagon text="" props={props} />
        </View>
      </View>
    </View>
  );
};

export default HexaView;
