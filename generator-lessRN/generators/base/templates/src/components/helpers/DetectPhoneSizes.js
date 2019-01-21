import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

const isHeightMoreThan800 = height > 800 ? true : false;

export { isHeightMoreThan800 };

const isiPhoneX = Platform.OS == "ios" && height > 800 ? true : false;

export { isiPhoneX };
