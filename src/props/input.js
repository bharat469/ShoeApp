import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Input = props => {
  return (
    <View style={styles.inputView}>
      <View style={styles.iconstyle}>{props.icon}</View>
      <TextInput
        placeholder={props.placeholder}
        style={styles.inputStyle}
        secureTextEntry={props.showIt}
      />
      <TouchableOpacity onPress={props.iconTwoPress}>
        {props.icon2}
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    width: wp('90%'),
    left: wp('1%'),
    margin: 12,
    borderRadius: 12,
  },
  iconstyle: {
    marginLeft: wp('6%'),
  },
  inputStyle: {
    width: wp('65%'),
    margin: 4,
  },
});
