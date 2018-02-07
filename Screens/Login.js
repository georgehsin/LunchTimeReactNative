import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, AlertIOS, Image } from 'react-native';

import firebase from 'react-native-firebase';
import Register from "./Register.js"
import Home from "./Home.js"

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    };
    this.loginPressed = this.loginPressed.bind(this)
  }

  emailOnChange(value){
    this.setState({
      email: value
    })
  }

  passwordOnChange(value){
    this.setState({
      password: value
    })
  }

  loginPressed(){
    console.log("Login Button Pressed")
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        console.log("successful login")
        this.props.navigation.navigate("Home")
    }).catch(function(error) {
        console.log("login unsuccessful")
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        AlertIOS.alert(
            'Incorrect Info',
            'Your email or password combination is incorrect, please try again',
            [
              {
                text: 'OK',
                // onPress: (password) => console.log('OK Pressed, password: ' + password),
              },
            ],
        );
      });
  }
  
  signUpNavigation(){
    console.log("Should navigate to sign up")
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image 
            style={styles.image}
            source={require('../ios/LunchTimeRN/Images.xcassets/LunchTimeLogo.imageset/untitled.png')} 
        />
        <TextInput
            style={styles.input}
            placeholder = "email"
            value = {this.state.email}
            onChangeText={(text) => this.emailOnChange(text)}
        />
        <TextInput
            style={styles.input}
            placeholder = "password"
            secureTextEntry = { true }
            onChangeText={(text) => this.passwordOnChange(text)}
        />
        <Button
            title="Login"
            color="blue"
            onPress={this.loginPressed}
            onChange
        />
        <View style={styles.signUp}>
          <Button 
            title="new user?"
            //disabled={true}
            color="black"
            onPress={() => this.props.navigation.navigate("Register")}
        />
          <Button
            title="Sign Up"
            color="red"
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    height: 40, 
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 200,
    resizeMode: Image.resizeMode.contain
  }
});
