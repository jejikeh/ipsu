import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextArea from './components/TextArea/TextArea.component';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


export default function App() {
  return (
    <View style={styles.container}>

      <View style = {styles.contentWrapper}>
      <Text style = {styles.textHeader}>Добро пожаловать</Text>
      <Text style = {styles.lightbottomText}>
        Шарага в рб
      </Text>
      <Text style = {styles.bottomText}>
        Пес, добро пожаловать. Место
        где раскрывают способности
      </Text>
      <View styles = {styles.inputbox}>
       
         </View>
      <TextArea/>
      
      </View>
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems : "center",
    alignContent : "center",
    alignSelf: "center",
    backgroundColor: '#FFF',
    
  },
  contentWrapper : { 
    alignContent : "center",
    justifyContent : "center",
    alignSelf : "center"
  },
  inputbox : {
    alignItems: "center",
    justifyContent : "center",
    alignContent : "center",
  },
  lightbottomText: {
    fontFamily: "Roboto",
    paddingTop: 20,
    fontStyle : "normal",
    fontWeight : "500",
    fontSize : 17,
    lineHeight : 22,
    paddingLeft: 10,
    letterSpacing: -0.41,
    fontFamily : Inter_900Black,

    color : "#232740"
  },
  textHeader : {
    fontFamily: "Roboto",
    fontStyle : "normal",
    fontWeight : "bold",
    fontSize : 34,
    lineHeight : 41,
    color : "#282828",
    fontFamily : Inter_900Black,
    paddingLeft:20
  },
  bottomText : {
    fontFamily: "Roboto",
    paddingTop: 20,
    paddingLeft: 5,
    fontFamily : Inter_900Black,

    fontStyle : "normal",
    fontWeight : "normal",
    fontSize : 20,
    lineHeight : 25,
    letterSpacing: 0.38,
    color : "#282828"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')} />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
};

export default DisplayAnImage;