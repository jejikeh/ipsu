import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextArea from './components/TextArea/TextArea.component';
import Error from './components/error/error.component';

import { useFonts } from 'expo-font';



export default function App() {
    let [fontsLoaded] = useFonts({
      'QanelasBlack' : require("./assets/fonts/QanelasBlack.otf"),
    });
    if(fontsLoaded){

    }
    return ( 
      <View style = {styles.container}>
        <Text style = { { fontFamily : 'QanelasBlack' }}>Добро пожаловать</Text>
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
});


