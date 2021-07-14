import React from "react";
import { View } from "react-native";

export default Hexagon = ({ props, text, internalColor }) => {
  return (
    <View>
      <View key="External">
        <View
          style={{
            width: 150,
            height: 82.5,
            backgroundColor: props.theme.data.profile_background_color,
          }}
        >
          <View
            style={{
              width: 150,
              height: 82.5,
              backgroundColor: props.theme.data.profile_background_color,
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
              borderBottomColor: props.theme.data.profile_background_color,
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
            width: 137,
            height: 70,
            backgroundColor: internalColor,
          }}
        >
          <View
            style={{
              width: 136,
              height: 55,
              backgroundColor: internalColor,
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
              borderRightWidth: 70,
              borderRightColor: "transparent",
              borderBottomWidth: 34,
              borderBottomColor: internalColor,
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
              borderTopWidth: 38,
              borderTopColor: internalColor,
            }}
          />
        </View>
      </View>
    </View>
  );
};
