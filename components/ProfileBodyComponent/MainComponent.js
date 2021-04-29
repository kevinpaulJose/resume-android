import React from "react";
import { View, Dimensions, Text } from "react-native";
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
const CardBody = ({ props }) => {
  return (
    <View>
      {props.value.map((prop, key) => {
        return (
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
        );
      })}
    </View>
  );
};
const RenderCard = ({ props }) => {
  return (
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
      }}
    />
  );
};

class ProfileBody extends React.Component {
  componentDidMount() {
    const metadata = this.props.user.data.metadata;
    const skills = metadata.filter(function (data) {
      if (data.type == "skill") return data;
    });
  }
  render() {
    // console.log(
    //   "USER METADATA ________" + JSON.stringify(this.props.user.data.metadata)
    // );
    return (
      <View>
        <RenderCard props={this.props} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBody);
