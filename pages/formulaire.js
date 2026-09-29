import { StyleSheet, View, TouchableHighlight, ScrollView, Switch, Text, TextInput } from 'react-native';
import {RadioGroup} from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import { styles } from '../styles/Styles.js';
import { useState } from 'react';

export default function Formulaire({navigation , route}) {

  const recette = route.params?.recette;

  const [category, setCategory] = useState(
    recette?.category?.toString() ?? ''
  );

  const [name, setName] = useState(
    recette?.name ?? ''
  );

  const [heure, setHeure] = useState(
    recette?.durationHours ?? 0
  );

  const [minute, setMinute] = useState(
    recette?.durationMinutes ?? 0
  );

  const [description, setDescription] = useState(
    recette?.description ?? ''
  );

  const edition = recette !== undefined;

  function handleSave() {

    if (category === '') {
      alert('Please select a category.');
      return;
    }

    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }

    if (heure === 0 && minute === 0) {
      alert('Duration must be greater than 0.');
      return;
    }

    const nouvelleRecette = {
      category: Number(category),
      name: name.trim(),
      durationHours: Number(heure),
      durationMinutes: Number(minute),
      description: description
    };

    console.log(nouvelleRecette);

    navigation.popTo('Liste', {
      recette: nouvelleRecette
    });
  }

  function handleDelete() {
    navigation.popTo('Liste');
  }

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
  const heures = Array.from({ length: 13 }, (_, index) => index);
  const min = Array.from({ length: 60 }, (_, index) => index);

  return (
    <PageContainer>

      <View style={[styles.radio]}>
        <RadioGroup radioButtons={ options } labelStyle={{color : 'white'}} layout='row' selectedId={category} onPress={setCategory}></RadioGroup>
      </View>
      

      <Input
        title = "Name"
        value={name}
        onChangeText={setName}
      />

      <View style={{ flexDirection: "row", alignItems: "center" ,width : "95%"}}>

        <View style={{flex:1 ,flexDirection: "row", alignItems: "center" }}>  
          <Text style={{ fontSize: 14, margin: 10, color: "white"}}>Duration</Text>

          <Picker style={{flex:1, color: "white"}} dropdownIconColor={"white"} selectedValue={heure}
            onValueChange={setHeure} >
          {heures.map((heure) => ( <Picker.Item key={heure} label={heure.toString() + " h"} value={heure} />))}
          </Picker> 
        </View>

        <View style={{flex:1 ,flexDirection: "row", alignItems: "center" }}>
          <Text style={{margin: 10, color: "white"}}> : </Text>
          <Picker  style={{ flex:1, color: "white"}} dropdownIconColor={"white"}  selectedValue={minute}
            onValueChange={setMinute}>
            {min.map((min) => ( <Picker.Item key={min} label={min.toString()+ " min"} value={min} />))}
          </Picker>
        </View>

      </View>

      <TextInput
        style={[styles.input, { width: '95%', height: 500, verticalAlign: 'top' }]}
        placeholder='Description'
        placeholderTextColor='#ffffff'
        multiline={ true }
        value={description}
        onChangeText={setDescription}
      />

      {edition ? (

        <Button
          title="Delete"
          onPress={handleDelete}
        />

      ) : (

        <Button
          title="Save"
          onPress={handleSave}
        />

      )}
  
      <StatusBar style="auto" />

    </PageContainer>
  );
}