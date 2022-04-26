import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {LoginImage} from '../../helpers/images';
import Colors from '../../helpers/Colors';
import Font from '../../helpers/Font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Input from '../../props/input';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);

  const viewIt = () => {
    setShow(!show);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        StatusBarStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <View>
              <Image style={styles.logo} source={LoginImage} />
            </View>

            <View style={styles.inputView}>
              <Text style={styles.SignIn}>Sign In</Text>
              <Input
                icon={<FontAwesome5 name="user-edit" size={24} color="black" />}
                placeholder="Username"
              />
              <Input
                icon={
                  <MaterialCommunityIcons
                    name="lock-check"
                    size={24}
                    color="black"
                  />
                }
                iconTwoPress={viewIt}
                icon2={
                  show ? (
                    <Entypo name="eye-with-line" size={24} color="black" />
                  ) : (
                    <AntDesign name="eye" size={24} color="black" />
                  )
                }
                showIt={show}
                placeholder="Password"
              />
              <View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={styles.buttonSection}>
                    <TouchableOpacity
                      onPress={() => handleLogin()}
                      style={styles.loginButton}>
                      <Text style={styles.loginButtonText}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={styles.membershipSection}>
                      <View>
                        <Text style={styles.membershipText}>Not a Member</Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Register')}>
                          <Text style={styles.registerText}>Sign Up</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    width: wp('100%'),
  },
  inputBgColor: {
    backgroundColor: '#E7E4E4FF',
  },
  logo: {
    width: wp('98%'),
    height: hp('50%'),
  },

  forgotPassword: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 15,
    color: '#9E860F',
    textAlign: 'right',
    right: wp('7%'),
  },
  buttonSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#A48800',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    width: wp('70%'),
  },
  title: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: 25,
    color: Colors.black,
  },
  loginButtonText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: hp('3%'),
    color: Colors.white,
  },
  membershipSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  membershipText: {
    fontFamily: Font.PoppinsRegular,
    fontSize: hp('2%'),
    color: Colors.primary,
  },
  registerText: {
    fontFamily: Font.PoppinsSemiBold,
    fontSize: hp('3%'),
    color: Colors.primary,
    fontWeight: 'bold',
    left: 6,
  },
  inputView: {
    bottom: hp('16%'),
  },
  SignIn: {
    fontSize: hp('3.6%'),
    textAlign: 'center',
    padding: 12,
    color: '#000',
    fontWeight: '700',
  },
});
