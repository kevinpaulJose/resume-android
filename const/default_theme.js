export const default_theme = {
  profile_background_color: "#C2FFF9",
};

export const getIcon = ({ name }) => {
  switch (name) {
    case "Skills":
      return "medal";
    case "Projects":
      return "code";
    case "Work Experience":
      return "briefcase";
    case "Hobbies":
      return "headset";
  }
};

export const getIconChild = ({ name }) => {
  switch (name) {
    case "SQL":
      return "document";
    case "JavaScript":
      return "logo-javascript";
    case "ReactJS":
      return "logo-react";
    case "React Native":
      return "logo-react";
    case "Firebase":
      return "logo-firebase";
    case "Azure DevOps":
      return "logo-soundcloud";
    default:
      return name.charAt(0);
  }
};
