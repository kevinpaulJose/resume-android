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
    <View>
      <View style={{ height: 500 }}>
        <HexaView
          props={{
            theme: props.theme,
            user: props.user,
            navigation: navigation,
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <BottomBar props={props} />
        </View>
      </View>
    </View>
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
          // marginTop: 20,
        }}
      >
        <RenderCard props={this.props} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBody);
