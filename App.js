import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Button, Text, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {RadioGroup} from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const choix = 3;
  switch(choix){
    case 1 : 
      return  <Page1></Page1>;
    case 2 :
      return  <Page2 /> ;
    case 3 :
      return  <Page3 /> ;
    default :
      break;
    }
}

function Page1() {
  return (
  <SafeAreaProvider>
  <SafeAreaView style={styles.container}>
  <View style={styles.body}>
    
    <TextInput
      style={[styles.input]}
    placeholder='Username'
    placeholderTextColor='#ffffff'
    
    />

    <TextInput
      style={[styles.input]}
    placeholder='Password'
    placeholderTextColor='#ffffff'
    />

    <TouchableHighlight 
      activeOpacity={0.6}
    >
      <View style={styles.button}>
        <Text style={styles.text} >Login</Text>
      </View>
    </TouchableHighlight>

    <Text style={{ fontSize: 14, color: 'blue' , justifyContent: 'center', alignItems: 'center' }}>sign up!</Text>


    <StatusBar style="auto" />
  </View>
  </SafeAreaView>
  </SafeAreaProvider>
  ) 
}

function Page2() {
    return (
  <SafeAreaProvider>
  <SafeAreaView style={styles.container}>
  <View style={styles.body}>
    
    <TextInput
      style={[styles.input]}
      placeholder='Username'
      placeholderTextColor='#ffffff'
    />

    <TextInput
      style={[styles.input]}
      placeholder='Password'
      placeholderTextColor='#ffffff'
    />

    <TextInput
      style={[styles.input]}
      placeholder='Password confirmation'
      placeholderTextColor='#ffffff'
    /> 

    <TouchableHighlight 
      activeOpacity={0.6}
    >
      <View style={styles.button}>
        <Text style={styles.text} >Create my account</Text>
      </View>
    </TouchableHighlight>

    <StatusBar style="auto" />
  </View>
  </SafeAreaView>
  </SafeAreaProvider>
  ) 
}

function Page3() {
  const options = [
      {
          id: '1',
          label: 'Breakfast',
          value: '1',
          color: 'white'
      },
      {
          id: '2',
          label: 'Lunch',
          value: '2',
          color: 'white'
      },
      {
          id: '3',
          label: 'Dinner',
          value: '3',
          color: 'white'
      }
  ];

  const heures = Array.from({ length: 24 }, (_, index) => index);
  const min = Array.from({ length: 60 }, (_, index) => index);
 
  return (
    
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
    
    <View style={[styles.radio]}>
      <RadioGroup radioButtons={ options } labelStyle={{color : 'white'}} layout='row'></RadioGroup>
    </View>
    

    <TextInput
      style={[styles.input]}
      placeholder='Name'
      placeholderTextColor='#ffffff'
    />

    <View style={{ flexDirection: "row", alignItems: "center" ,width : "95%"}}>

      <View style={{flex:1 ,flexDirection: "row", alignItems: "center" }}>  
        <Text style={{ fontSize: 14, margin: 10, color: "white"}}>Duration</Text>

        <Picker style={{flex:1, color: "white"}} dropdownIconColor={"white"} >
         {heures.map((heure) => ( <Picker.Item key={heure} label={heure.toString() + " h"} value={heure} />))}
        </Picker> 
      </View>

      <View style={{flex:1 ,flexDirection: "row", alignItems: "center" }}>
        <Text style={{margin: 10, color: "white"}}> : </Text>
        <Picker  style={{ flex:1, color: "white"}} dropdownIconColor={"white"}>
          {min.map((min) => ( <Picker.Item key={min} label={min.toString()+ " min"} value={min} />))}
        </Picker>
      </View>

    </View>

    <TextInput
      style={[styles.input, { width: '95%', height: 500, verticalAlign: 'top' }]}
      placeholder='Description'
      placeholderTextColor='#ffffff'
      multiline={ true }
    />

    <TouchableHighlight style={styles.button }
      activeOpacity={0.6}
    >
      
    <Text style={styles.text} >Save</Text>
      
    </TouchableHighlight>

    <StatusBar style="auto" />
  </View>
  </SafeAreaView>
  </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#387E7F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  container: {
    flex: 1,
    backgroundColor: '#387E7F',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    margin: 10,
    color: 'white',
    height: '6%', 
    width: '95%'
  },
  button:{
    backgroundColor: '#F2A93B',
    color: 'white',
    margin: 20,
    padding : 10,
    borderRadius: 3,
    borderWidth: 0,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  radio: {
   marginBottom : 20 ,
   marginTop : 10
  }
});
