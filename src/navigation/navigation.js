import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/loginScreen';
import SignUpScreen from '../screens/signUpScreen/signUpScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const Navigation = () => {
  return <AuthNavigation />;
};

export default Navigation;

const styles = StyleSheet.create({});
