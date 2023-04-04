import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image,ImageBackground,Text } from 'react-native';
import Button from './components/Button';
const image = require('./assets/images/nightsky.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image style={{ marginTop:100, width:400, height:400, alignSelf:"center"}} source=
        {require('./assets/images/hiphop2020.png')}/>
        <Text style={styles.text}>Four Four Beat Labs</Text>
      </ImageBackground>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label= " Get Started" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
  image: {
    width: 400,
    height: 900,
    borderRadius: 18,
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
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
});