import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Image, AlertIOS} from 'react-native';

import firebase from 'react-native-firebase';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: '',
        confirmPass: ''
    };
    this.registerPressed = this.registerPressed.bind(this);
  }

  onChangeText(value){
    console.log(this.state.email)
    this.setState({
        email: value
    })
  }
  
  passOnChangeText(value){
    this.setState({
        password:value
    })
  }

  confirmPassOnChangeText(value){
    this.setState({
        confirmPass:value
    })
  }

  registerPressed(email, pass){
      console.log("attempting register")
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        console.log("Successful Registration")
        AlertIOS.alert(
            'Successful Registration',
            'Login on the next page',
            [
              {
                text: 'OK',
                onPress: () => {this.props.navigation.goBack()},
              },
            ],
        );
        
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        AlertIOS.alert(
            'Incorrect Registration',
            'Please Enter a valid email and password',
            [
              {
                text: 'OK',
                // onPress: (password) => console.log('OK Pressed, password: ' + password),
              },
            ],
        );
      });
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
            placeholder="email"
            value={this.state.email}
            onChangeText={(text) => this.onChangeText(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="password"
            value={this.state.password}
            secureTextEntry={ true }
            onChangeText={(text) => this.passOnChangeText(text)}
        />
        <TextInput
            style={styles.input}
            placeholder = "confirm password"
            value={this.state.confirmPass}
            secureTextEntry={ true }
            onChangeText={(text) => this.confirmPassOnChangeText(text)}
        />
        <Button
            style={styles.register}
            title="Register"
            color="blue"
            onPress={this.registerPressed}
        />
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
  register: {
    // flexDirection: "row",
    // justifyContent: "center",
    marginBottom: 200
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 200,
    resizeMode: Image.resizeMode.contain
  }
});
