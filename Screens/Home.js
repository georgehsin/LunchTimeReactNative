import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Image} from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../ios/LunchTimeRN/Images.xcassets/LunchTimeLogo.imageset/untitled.png')} 
            />
            <Text style={styles.text}> Successfully Logged in </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 100,
    resizeMode: Image.resizeMode.contain
  },
  text: {
    fontSize: 30
  }
});
