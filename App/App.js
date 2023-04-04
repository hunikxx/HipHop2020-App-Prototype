import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image,ImageBackground,Text } from 'react-native';
import Button from './components/Button';
const image = require('./assets/images/nightsky.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image style={{ marginTop:50, width:300, height:300, alignSelf:"center"}} source=
        {require('./assets/images/hiphop2020.png')}/>
        <Text style={styles.titleText}>Four Four Beat Labs</Text>
        <Text style={styles.baseText}>Redesigning the classroom experience</Text>
      </ImageBackground>
      </View>
      <View style={styles.footerContainer}>
        <Button titleStyle={{
        }}theme="primary" style={styles.baseText} label= " Let's start" />
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
});