import React from "react";
import {Text, TouchableOpacity, Image, Platform} from "react-native";

const Button = ({onPress, children, buttonStyle, textStyle, ref,disabled, image, imageStyle}) => {
    const {containerStyle, titleStyle} = styles;
    const buttonImage = image !== 'undefined' ? (<Image style={imageStyle} source={image} />) : null;
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[containerStyle, buttonStyle]}
            key={ref}
        >
            {buttonImage}
            <Text style={[titleStyle, textStyle]}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    titleStyle: {
        alignSelf: "center",
        color: "#007aff",
        fontSize: 14,
    },

    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#707070',
        paddingTop: Platform.OS === 'ios' ? 4 : 0
    }
};

export {Button};
