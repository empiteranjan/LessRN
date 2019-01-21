import { StyleSheet, Platform } from "react-native";
import { WHITE, GREEN, BLACK } from "./Colors";
import {
  scale,
  moderateScale,
  verticalScale
} from "../components/helpers/Scale";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 30 : 0,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },

  contentCenter: {
    justifyContent: "center",
    alignItems: "center"
  },

  //FLEX
  flex1: {
    flex: 1
  },

  flexDirectionRow: {
    flexDirection: "row"
  },

  alignSelfStart: {
    alignSelf: "flex-start"
  },

  alignSelfEnd: {
    alignSelf: "flex-end"
  },

  alignSelfCenter: {
    alignSelf: "center"
  },

  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },

  //POSITION
  positionAbsolute: {
    position: "absolute"
  },

  //FONTS

  gothamBook: {
    fontFamily: "Gotham",
    fontWeight: "normal"
  },

  gothamMedium: {
    fontFamily: "Gotham",
    fontWeight: "400"
  },

  gothamBold: {
    fontFamily: "Gotham",
    fontWeight: "bold"
  },

  gothamLight: {
    fontFamily: "Gotham",
    fontWeight: "300"
  },

  //FONT SIZES

  fontSize25: {
    fontSize: moderateScale(25)
  },

  fontSize22: {
    fontSize: moderateScale(22)
  },

  fontSize10: {
    fontSize: moderateScale(10)
  },

  fontSize20: {
    fontSize: moderateScale(20)
  },

  fontSize12: {
    fontSize: moderateScale(12)
  },

  fontSize16: {
    fontSize: moderateScale(16)
  },

  fontSize14: {
    fontSize: moderateScale(14)
  },

  //TEXT ALIGN
  textAlignRight: {
    textAlign: "right"
  },

  textAlignCenter: {
    textAlign: "center"
  },

  //COLORS
  baseColor: {
    backgroundColor: WHITE
  },

  colorWhite: {
    color: WHITE
  },

  colorGreen: {
    color: GREEN
  },

  //Text Properties
  textAlignCenter: {
    textAlign: "center"
  },

  //CUSTOM STYLES
  shadowBox: {
    ...Platform.select({
      ios: {
        shadowColor: BLACK,
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 1 }
      },
      android: {
        elevation: 1
      }
    }),
    backgroundColor: WHITE,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
