import React from "react";
import {TouchableOpacity, Image} from "react-native";

const ImageButton = ({onPress, buttonStyle, ref, disabled, image, imageStyle}) => {
    const {containerStyle} = styles;
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[containerStyle, buttonStyle]}
            key={ref}
        >
            <Image style={imageStyle} source={image} />
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export {ImageButton};
