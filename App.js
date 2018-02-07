import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from "./Screens/Login.js"
import Register from "./Screens/Register.js"
import Home from "./Screens/Home.js"

const RootStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
