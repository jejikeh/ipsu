import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextArea from './components/TextArea/TextArea.component';
import Error from './components/error/error.component';
import test from "./assets/2.webp";
import { useFonts } from 'expo-font';



export default function App() {
  let [fontsLoaded] = useFonts({
    'QanelasBlack' : require("./assets/fonts/QanelasBlack.otf"),
  });

  if (!fontsLoaded) {
    return <Error/>;
  } else {
  return (
    <View style={styles.container}>
      

      <Image source = {test} style = {{ position: "absolute",
                                        width: 375,
                                        height: 490,
                                        left: 0,
                                        top: 0}} />
      {/*  прикол в том что в браузере пикча есть, а на телефоне нет :( */}
        <View style = {{ position : "absolute",width : 375,padding : 100, height : 322, borderRadius: 50,left : 0,
                            backgroundColor : "white", transform: [{scaleX : 1}] }}>
                              <Text style = {{ fontFamily : 'QanelasBlack', fontSize : 24, lineHeight : 41,
                            fontStyle : "normal", fontWeight : "bold", textAlign : "center", textTransform : "uppercase"}}>Добро пожаловать</Text>
                            
                            <View  style = {{ position: "absolute",
                          width: 423,
                          height: 322,
                          left: -26,
                          top: 490,

                          background: "#FFFFFF"}}>
                          
                            
        </View>

                            </View>
      </View>
      
    
    
  );
      }
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


