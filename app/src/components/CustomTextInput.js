import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import {TextInput as TextInputPaper} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {lightGrey, darkGrey, white, purple} from '../utils/Colors';

const CustomTextInput = props => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isRightIconTouched, setIsRightIconTouched] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: hp(3),
        paddingHorizontal: wp(3),
        borderColor: isFocused ? purple : 'transparent',
        backgroundColor: isFocused ? white : lightGrey,
        //marginHorizontal: wp(8),
        borderRadius: wp(3),
        borderWidth: 1,
        alignItems: 'center',
        height: hp(6.5),
      }}>
      {props?.left && props.leftName === 'Mail' && (
        <View style={{marginLeft: wp(3)}}>
          <IonIcons
            name="mail-outline"
            color={isFocused ? purple : darkGrey}
            size={25}
          />
        </View>
      )}

      {props?.left && props.leftName === 'Lock' && (
        <View style={{marginLeft: wp(0.1)}}>
          <EvilIcons
            name="lock"
            color={isFocused ? purple : darkGrey}
            size={25}
          />
        </View>
      )}

      <TextInput
        style={{flex: 1, marginLeft: wp(3)}}
        {...props}
        secureTextEntry={props?.password && !isPasswordVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {props?.right && (
        <TouchableOpacity
          style={{marginRight: wp(3)}}
          onPress={() => {
            setIsPasswordVisible(!isPasswordVisible);
            setIsRightIconTouched(true);
          }}
          onPressOut={() => setIsRightIconTouched(false)}>
          <Entypo
            name={isPasswordVisible ? 'eye-with-line' : 'eye'}
            size={23}
            color={isFocused ? purple : darkGrey}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  paperInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 23,
  },
  // Add your other styles here
});
