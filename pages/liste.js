import { Text, View, FlatList, TouchableOpacity  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';

import PageContainer from '../components/PageContainer';
import Button from '../components/Button.js';
import { styles } from '../styles/Styles.js';

export default function Liste({ navigation, route }) {

  const [recettes, setRecettes] = useState([
    {
      category: 1,
      name: "Pancakes",
      durationHours: 0,
      durationMinutes: 20,
      description: "Pancakes avec du sirop d'érable"
    },
    {
      category: 2,
      name: "Pizza",
      durationHours: 1,
      durationMinutes: 15,
      description: "Pizza au fromage et pepperoni"
    },
    {
      category: 3,
      name: "Pâtes",
      durationHours: 0,
      durationMinutes: 30,
      description: "Pâtes à la sauce tomate"
    },
    {
      category: 1,
      name: "Pancakes",
      durationHours: 0,
      durationMinutes: 20,
      description: "Pancakes avec du sirop d'érable"
    },
    {
      category: 2,
      name: "Pizza",
      durationHours: 1,
      durationMinutes: 15,
      description: "Pizza au fromage et pepperoni"
    },
    {
      category: 3,
      name: "Pâtes",
      durationHours: 0,
      durationMinutes: 30,
      description: "Pâtes à la sauce tomate"
    },{
      category: 1,
      name: "Pancakes",
      durationHours: 0,
      durationMinutes: 20,
      description: "Pancakes avec du sirop d'érable"
    },
    {
      category: 2,
      name: "Pizza",
      durationHours: 1,
      durationMinutes: 15,
      description: "Pizza au fromage et pepperoni"
    },
    {
      category: 3,
      name: "Pâtes",
      durationHours: 0,
      durationMinutes: 30,
      description: "Pâtes à la sauce tomate"
    },{
      category: 1,
      name: "Pancakes",
      durationHours: 0,
      durationMinutes: 20,
      description: "Pancakes avec du sirop d'érable"
    },
    {
      category: 2,
      name: "Pizza",
      durationHours: 1,
      durationMinutes: 15,
      description: "Pizza au fromage et pepperoni"
    },
    {
      category: 3,
      name: "Pâtes",
      durationHours: 0,
      durationMinutes: 30,
      description: "Pâtes à la sauce tomate"
    }
  ]);


  function afficherCategorie(category) {

    if (category === 1) {
      return '🍳';
    }

    if (category === 2) {
      return '🍔';
    }

    if (category === 3) {
      return '🍽️';
    }

    return '🍴';
  }


  function afficherDuree(recette) {

    return `${recette.durationHours}h${recette.durationMinutes
      .toString()
      .padStart(2, '0')}`;

  }


  function afficherRecette({ item }) {

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Formulaire', {
          recette: item
        })}
        activeOpacity={0.6}
      >

        <View style={{
          padding: 10,
          flexDirection: 'row'
        }}>

          <View style={{
              width: 70,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

            <Text style={{
              fontSize: 30
            }}>
              {afficherCategorie(item.category)}
            </Text>

            <Text style={{
              color: 'white',
              marginTop: 5
            }}>
              {afficherDuree(item)}
            </Text>

          </View>


          <View style={{
              flex: 1,
              marginLeft: 5,
              justifyContent: 'center'
            }}>

            <Text style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold'
            }}>
              {item.name}
            </Text>

            <Text style={{
              color: '#cccccc',
              marginTop: 5
            }}>
              {item.description}
            </Text>

          </View>

        </View>

      </TouchableOpacity>
    );
  }

  function handleAdd() {
    navigation.push('Formulaire');
  }


  return (
  <PageContainer>

    {recettes.length === 0 ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Aucune recette</Text>
      </View>
    ) : (
      <FlatList
        data={recettes}
        renderItem={afficherRecette}
        keyExtractor={(item, index) => item.name + index}
        style={{ width: '100%' }}
        contentContainerStyle={{ paddingBottom: 90 }}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: 'white' }} />
        )}
      />
    )}

    <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
      <Button title="Add" onPress={handleAdd} />
    </View>

    <StatusBar style="auto" />

  </PageContainer>
);
}