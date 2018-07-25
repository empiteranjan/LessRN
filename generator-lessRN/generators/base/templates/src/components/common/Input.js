import React from "react";
import { View, TextInput } from "react-native";
import { scale, moderateScale, verticalScale } from '../helpers/Scale'

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  wrapperStyle,
  textInputStyle,
  editable,
  maxLength,
  placeholderTextColor,
  focus,
  numberOfLines,
  multiline
}) => {
  const { inputStyles, containerStyles } = styles;
  return (
    <View style={[containerStyles, wrapperStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={[inputStyles, textInputStyle]}
        autoCapitalize={autoCapitalize}
        editable={editable}
        underlineColorAndroid="transparent"
        autoFocus={focus}
        numberOfLines={numberOfLines}
        multiline={multiline}
      />
    </View>
  );
};

const styles = {
  inputStyles: {
    color: "#000",
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: "HelveticaNeue",
    fontSize: 16,
    paddingTop:0,
    paddingBottom:0,
    height: scale(35),
    flex: 1
  },

  containerStyles: {
    height: scale(35),
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
