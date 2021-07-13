import * as React from "react";
import { View, Dimensions, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { fetchTheme, fetchUser } from "../../redux/ActionCreators";
import HexaView from "./HexaViewComponent";

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

const RenderCard = ({ props, navigation }) => {
  return (
    <ScrollView>
      <HexaView
        props={{
          theme: props.theme,
          user: props.user,
          navigation: navigation,
        }}
      />
    </ScrollView>
  );
};

class ProfileBody extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.theme.data.profile_background_color,
          height: windowHeight,
        }}
      >
        <RenderCard props={this.props} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBody);
