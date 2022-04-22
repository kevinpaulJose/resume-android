import React from "react";
import { ScrollView } from "react-native";
import { Platform } from "react-native";
import { View, Text, Dimensions } from "react-native";
import CardComponent from "../CardComponent";
import Hexagon from "../HexagonComponent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const getThisData = ({ props }) => {
  const skills = props.user.data.metadata.filter(function (data) {
    if (data.type == "Skills") return data;
  });
  const hobbies = props.user.data.metadata.filter(function (data) {
    if (data.type == "Hobbies") return data;
  });
  const work_exp = props.user.data.metadata.filter(function (data) {
    if (data.type == "Work Experience") return data;
  });
  const projects = props.user.data.metadata.filter(function (data) {
    if (data.type == "Projects") return data;
  });
  switch (props.selected.data) {
    case "Skills":
      return skills;
    case "Hobbies":
      return hobbies;
    case "Work Experience":
      return work_exp;
    case "Projects":
      return projects;
  }
};

const descGenerator = ({ desc }) => {
  let temp = desc.split(";");
  let retData = {
    proficiency: temp[0],
    linkAvailable: temp[1] === "yes" ? true : false,
    certificatesAvailable: temp[2] === "yes" ? true : false,
    desc: temp[3],
  };
  return retData;
};
export default Body = ({ props }) => {
  let thisData = getThisData({ props: props });
  // console.log(getThisData({ props: props }));
  return (
    <View
      style={{
        backgroundColor: props.theme.data.profile_background_color,
        width: windowWidth,
        height: windowHeight,
        // paddingBottom: Platform.OS === "android" ? 20 : 100,
        // marginTop: 10,
      }}
    >
      <ScrollView
        style={{
          marginBottom: 200,
        }}
      >
        {thisData.map((data) => (
          <View
            style={{
              marginLeft: 30,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <CardComponent
              props={{
                bgColor: props.color,
                shadowColor: props.theme.data.profile_dark_color,
                selected: data.name,
                iconColor: props.theme.data.profile_text_secondary_color,
                selectedParent: data.type,
                textColor: props.theme.data.profile_text_color,
                proficiency: descGenerator({
                  desc: data.proficiency,
                }).proficiency,
                desc: descGenerator({
                  desc: data.proficiency,
                }).desc,
                link: descGenerator({
                  desc: data.proficiency,
                }).linkAvailable
                  ? data.link
                  : "",
                certificates: descGenerator({
                  desc: data.proficiency,
                }).certificatesAvailable
                  ? data.certificate
                  : "",
                icon: data.icon,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
