import React from 'react';
import { View, ActivityIndicator, Dimensions, Modal } from 'react-native';
import { BLACK } from '../../styles/Colors';

/*
getting window width and height
 */
//var { height, width } = Dimensions.get("window");

const Spinner = ({ size, color, wrapperStyle }) => (
      <Modal transparent>
        <View style={[styles.spinnerStyle, wrapperStyle]}>
          <ActivityIndicator size={size || 'large'} color={color} />
        </View>
      </Modal>
);

const styles = {
  spinnerStyle: {
    //position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK,
    opacity: 0.7
  }
};

export { Spinner };
