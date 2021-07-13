import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { ImageBackground } from "react-native";
import { View, Text, Button, Dimensions, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoadingScreen = () => {
  return (
    // <ImageBackground
    //   source={require("../assets/splash.jpg")}
    //   style={{ flex: 1, width: null, height: null }}
    //   blurRadius={2}
    // >
    <SafeAreaView>
      <View
        style={{
          width: windowWidth,
          height:
            windowHeight +
            (Platform.OS === "android" ? StatusBar.currentHeight : 0),
          backgroundColor: "#1e1f21",
        }}
      >
        {/* <View> */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/splash.gif")}
            style={{ width: windowWidth / 3, height: windowHeight / 4 }}
          />
        </View>
      </View>
    </SafeAreaView>

    // </View>

    // </ImageBackground>
  );
};

export default LoadingScreen;
