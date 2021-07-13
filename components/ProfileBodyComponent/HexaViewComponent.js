import * as Haptics from "expo-haptics";
import React from "react";
import { Platform } from "react-native";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Dimensions, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { getIcon } from "../../const/default_theme";
import Hexagon from "../HexagonComponent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
          key="Skills-wrapper"
          style={{
            marginTop: windowHeight / 20,
            marginLeft: windowWidth / 9.5,
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
                    props.navigation.navigate("Feature", {
                      props: {
                        theme: props.theme,
                        user: props.user,
                        selected: { data: "Skills" },
                        color: props.theme.data.skill_color,
                      },
                      navigation: props.navigation,
                    });
                  }
                );
              } else {
                props.navigation.navigate("Feature", {
                  props: {
                    theme: props.theme,
                    user: props.user,
                    selected: { data: "Skills" },
                    color: props.theme.data.skill_color,
                  },
                  navigation: props.navigation,
                });
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.skill_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -20,
                left: 33,
              }}
            >
              {/* {console.log(getIcon("Skills"))} */}
              <Icon
                raised
                name={getIcon({ name: "Skills" })}
                type="ionicon"
                size={33}
                color={props.theme.data.skill_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 52,
                left: 52,
              }}
            >
              <Text
                style={{
                  color: props.theme.data.profile_text_secondary_color,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Skills
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          key="Projects-wrapper"
          style={{
            marginTop: windowHeight / 20,
            marginLeft: 20,
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
                    props.navigation.navigate("Feature", {
                      props: {
                        theme: props.theme,
                        user: props.user,
                        selected: { data: "Projects" },
                        color: props.theme.data.project_color,
                      },
                      navigation: props.navigation,
                    });
                  }
                );
              } else {
                props.navigation.navigate("Feature", {
                  props: {
                    theme: props.theme,
                    user: props.user,
                    selected: { data: "Projects" },
                    color: props.theme.data.project_color,
                  },
                  navigation: props.navigation,
                });
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.project_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -20,
                left: 33,
              }}
            >
              <Icon
                raised
                name={getIcon({ name: "Projects" })}
                type="ionicon"
                size={33}
                color={props.theme.data.project_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 52,
                left: 42,
              }}
            >
              <Text
                style={{
                  color: props.theme.data.profile_text_secondary_color,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Projects
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          key="Work-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 130,
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
                    props.navigation.navigate("Feature", {
                      props: {
                        theme: props.theme,
                        user: props.user,
                        selected: { data: "Work Experience" },
                        color: props.theme.data.work_color,
                      },
                      navigation: props.navigation,
                    });
                  }
                );
              } else {
                props.navigation.navigate("Feature", {
                  props: {
                    theme: props.theme,
                    user: props.user,
                    selected: { data: "Work Experience" },
                    color: props.theme.data.work_color,
                  },
                  navigation: props.navigation,
                });
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.work_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -20,
                left: 33,
              }}
            >
              <Icon
                raised
                name={getIcon({ name: "Work Experience" })}
                type="ionicon"
                size={33}
                color={props.theme.data.work_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 52,
                left: 32,
              }}
            >
              <Text
                style={{
                  color: props.theme.data.profile_text_secondary_color,
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Experience
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          key="hobbies-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: windowWidth / 9.5,
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
                    props.navigation.navigate("Feature", {
                      props: {
                        theme: props.theme,
                        user: props.user,
                        selected: { data: "Hobbies" },
                        color: props.theme.data.hobby_color,
                      },
                      navigation: props.navigation,
                    });
                  }
                );
              } else {
                props.navigation.navigate("Feature", {
                  props: {
                    theme: props.theme,
                    user: props.user,
                    selected: { data: "Hobbies" },
                    color: props.theme.data.hobby_color,
                  },
                  navigation: props.navigation,
                });
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.hobby_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -20,
                left: 33,
              }}
            >
              <Icon
                raised
                name={getIcon({ name: "Hobbies" })}
                type="ionicon"
                size={33}
                color={props.theme.data.hobby_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 52,
                left: 42,
              }}
            >
              <Text
                style={{
                  color: props.theme.data.profile_text_secondary_color,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Hobbies
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          key="Contact-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
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
                    Linking.openURL(`tel:${props.user.data.phone}`);
                  }
                );
              } else {
                Linking.openURL(`tel:${props.user.data.phone}`);
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.contact_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -12,
                left: 23,
              }}
            >
              <Icon
                raised
                name="call"
                type="ionicon"
                size={43}
                color={props.theme.data.contact_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 48,
              }}
            ></View>
          </TouchableOpacity>
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
                    Linking.openURL(
                      "https://play.google.com/store/apps/developer?id=KJ+Productions"
                    );
                  }
                );
              } else {
                Linking.openURL(
                  "https://play.google.com/store/apps/developer?id=KJ+Productions"
                );
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.contact_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -12,
                left: 29,
              }}
            >
              <Icon
                raised
                name="logo-google-playstore"
                type="ionicon"
                size={43}
                color={props.theme.data.contact_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 48,
              }}
            ></View>
          </TouchableOpacity>
        </View>
        <View
          key="Work-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
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
                    Linking.openURL(
                      "https://www.linkedin.com/in/kevin-joseph-paul-44638b182/"
                    );
                  }
                );
              } else {
                Linking.openURL(
                  "https://www.linkedin.com/in/kevin-joseph-paul-44638b182/"
                );
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.contact_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -12,
                left: 23,
              }}
            >
              <Icon
                raised
                name="logo-linkedin"
                type="ionicon"
                size={43}
                color={props.theme.data.contact_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 48,
              }}
            ></View>
          </TouchableOpacity>
        </View>
        <View
          key="dummy-left-wrapper"
          style={{
            marginTop: windowHeight / 15,
            marginLeft: 20,
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
                    Linking.openURL(`mailto:${props.user.data.mail}`);
                  }
                );
              } else {
                Linking.openURL(`mailto:${props.user.data.mail}`);
              }
            }}
          >
            <Hexagon
              props={props}
              text="Skills"
              internalColor={props.theme.data.contact_color}
              //   internalColor="rgb( 102, 166, 199 )"
            />
            <View
              style={{
                position: "absolute",
                top: -15,
                left: 23,
              }}
            >
              <Icon
                raised
                name="mail"
                type="ionicon"
                size={43}
                color={props.theme.data.contact_color}
                reverse={true}
                raised={false}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 50,
                left: 48,
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HexaView;
