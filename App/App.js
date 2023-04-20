//import ContentsPage from './src/ContentsPage';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, Dimensions, Button, StyleSheet, View, Image,ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

const image = require('./assets/images/nightsky.jpeg');
const Stack = createStackNavigator();
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContentsPage"
        component={ContentsPage}
        options={{ title: 'Contents' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
}

function HomeScreen({ navigation }) { // Define HomeScreen component
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.backgroundImage}>
        <Image style={{ marginTop:50, width:300, height:300, alignSelf:"center"}} source=
        {require('./assets/images/hiphop2020.png')}/>
        </ImageBackground>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonText}
            title= "Let's Start" 
            color = "white"
            fontWeight = 'bold'
            theme = "primary"
            onPress={() => navigation.navigate('ContentsPage')}
            >
            </Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function ContentsPage ({ navigation }) { 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.backgroundImage}>
        <Image style={{ marginTop:50, width:80, height:80, alignSelf:"center"}} source=
        {require('./assets/images/logo1.png')}/> 
        <Button title= "Pedagogical Innovation" color='white' onPress={handleButtonInnovation}></Button>
        <Image style={{ marginTop:80, width:80, height:80, alignSelf:"center"}} source=
        {require('./assets/images/logo2.png')}/> 
        
        <Button title= "Cultural Preservation" color='white' onPress={handleButtonClickPreservation}></Button>
        <Image style={{ marginTop:90, width:80, height:80, alignSelf:"center"}} source=
        {require('./assets/images/logo3.png')}/>
        <Button title= "Immersive Design" color='white' onPress={handleButtonClickDesign}></Button>              
        </ImageBackground>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

  const handleButtonInnovation= async () => {
    const url = 'https://www.fourfourbeatproject.org/innovating-classroom-spaces/';
    try {
      await InAppBrowser.open(url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClickPreservation = () => {
    const url = 'https://www.fourfourbeatproject.org/innovating-classroom-spaces/'; // Replace with the URL you want to open
    Linking.openURL(url)
      .catch(err => console.error('Failed to open URL:', err));
  };

  const handleButtonClickDesign = () => {
    const url = 'https://www.fourfourbeatproject.org/innovating-classroom-spaces/'; // Replace with the URL you want to open
    Linking.openURL(url)
      .catch(err => console.error('Failed to open URL:', err));
  };

const styles = StyleSheet.create({ 

  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 0,
  },
  backgroundImage: {
    width: viewportWidth,
    height: viewportHeight,
    borderRadius: 18,
    flex: 1,
    resizeMode: "contain",
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    fontFamily: 'Rockwell',
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  baseText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 15,
    fontWeight: 'bold',
    fontFamily: 'Rockwell',
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  
  buttonContainer: {
    backgroundColor: '#696969', 
    paddingVertical: 10,
    paddingHorizontal: 1,
    borderRadius: 80,
    opacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});