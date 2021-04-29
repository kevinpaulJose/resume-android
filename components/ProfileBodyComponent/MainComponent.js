import * as React from "react";
import { Button } from "react-native";
import { View, Dimensions, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
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
const CardBody = ({ props }) => {
  return (
    <View>
      {props.value.map((prop, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() =>
              props.navigation.navigate("Feature", {
                props: {
                  theme: props.theme,
                  user: props.user,
                  selected: prop,
                },
                navigation: props.navigation,
              })
            }
          >
            <View
              key={key}
              style={{
                width: windowWidth - 40,
                height: windowHeight / 7,
                backgroundColor: prop.color,
                marginLeft: 20,
                marginBottom: 20,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 30,
                  fontSize: 0.06 * windowWidth,
                  color: props.theme.data.profile_text_color,
                }}
              >
                {prop.data}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const RenderCard = ({ props, navigation }) => {
  return (
    <View>
      <CardBody
        props={{
          value: [
            { data: "Skills", color: props.theme.data.skill_color },
            { data: "Projects", color: props.theme.data.project_color },
            { data: "Work Experience", color: props.theme.data.work_color },
            { data: "Hobbies", color: props.theme.data.hobby_color },
          ],
          theme: props.theme,
          user: props.user,
          navigation: navigation,
        }}
      />
    </View>
  );
};

class ProfileBody extends React.Component {
  componentDidMount() {
    const metadata = this.props.user.data.metadata;
    const skills = metadata.filter(function (data) {
      if (data.type == "skill") return data;
    });
  }
  constructor() {
    super();
  }

  render() {
    // const { navigate } = this.props.navigation;
    // console.log(
    //   "USER METADATA ________" + JSON.stringify(this.props.user.data.metadata)
    // );
    return (
      <View>
        {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Feature")}
        /> */}
        <RenderCard props={this.props} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBody);
