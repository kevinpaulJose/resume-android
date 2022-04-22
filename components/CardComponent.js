import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { ImageBackground } from "react-native";
import { View, Text, Button, Dimensions, Image } from "react-native";
import { Icon } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { BlurView } from "expo-blur";
import { Linking } from "react-native";

const CardComponent = ({ props }) => {
  return (
    <View
      style={{
        backgroundColor: props.bgColor,
        width: windowWidth - 60,
        // height: windowHeight / 6,
        paddingBottom: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 25,
          top: 25,
        }}
      >
        {props.icon !== "noicon" ? (
          <Icon
            name={props.icon}
            type="ionicon"
            size={40}
            color={props.iconColor}
            raised={false}
          />
        ) : (
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 40,
                marginLeft: 10,
                color: props.iconColor,
              }}
            >
              {props.selected.charAt(0)}
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          marginLeft: windowWidth / 3.5,
          marginTop: 25,
        }}
      >
        <Text
          style={{
            color: props.textColor,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {props.selected}
        </Text>
      </View>
      {props.proficiency === "" ? null : (
        <View
          style={{
            marginLeft: windowWidth / 3.5,
          }}
        >
          <Text
            style={{
              color: props.textColor,
              fontSize: 11,
            }}
          >
            {props.proficiency}
          </Text>
        </View>
      )}

      <View
        style={{
          paddingLeft: 15,
          paddingRight: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: props.textColor,
            fontSize: 16,
            textAlign: "left",
          }}
        >
          {props.desc}
        </Text>
      </View>

      {props.link !== "" ? (
        <View>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: props.textColor,
                fontSize: 18,
                textAlign: "left",
              }}
            >
              Links:
            </Text>
          </View>
          {props.link.split(";").map((link) =>
            link === "" ? null : (
              <View
                style={{
                  marginLeft: 40,
                  paddingRight: 20,
                  marginTop: 1,
                }}
              >
                <Text
                  style={{
                    color: "#bfd8ff",
                    fontSize: 16,
                    textAlign: "left",
                    textDecorationLine: "underline",
                  }}
                  onPress={() => {
                    Linking.openURL(link);
                  }}
                >
                  - {link}
                </Text>
              </View>
            )
          )}
        </View>
      ) : null}

      {props.certificates !== "" ? (
        <View>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: props.textColor,
                fontSize: 18,
                textAlign: "left",
              }}
            >
              Certificates:
            </Text>
          </View>
          {props.certificates.split(";").map((link) =>
            link === "" ? null : (
              <View
                style={{
                  marginLeft: 40,
                  paddingRight: 20,
                  marginTop: 1,
                }}
              >
                <Text
                  style={{
                    color: "#bfd8ff",
                    fontSize: 16,
                    textAlign: "left",
                    textDecorationLine: "underline",
                  }}
                  onPress={() => {
                    Linking.openURL(link);
                  }}
                >
                  - {link}
                </Text>
              </View>
            )
          )}
        </View>
      ) : null}
    </View>
  );
};

export default CardComponent;
