import { Text, View, FlatList, Pressable   } from 'react-native';
import { useState , useEffect } from 'react';
import ToastManager, { Toast } from 'toastify-react-native';
import recipes from '../services/recipes.js';

import PageContainer from '../components/PageContainer';
import Button from '../components/Button.js';

export default function Liste({ navigation, route }) {

  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    async function chargerRecettes() {
      try {
        const resultat = await recipes.getAll();
        setRecettes(resultat);
      } catch (error) {
        Toast.error('Erreur de chargement : ' + error.message);
      }
    }

    chargerRecettes();
  }, []);


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
  }

  function afficherDuree(recette) {
    return `${recette.durationHours}h${recette.durationMinutes
      .toString()
      .padStart(2, '0')}`;
  }

  function afficherRecette({ item }) {
    return (
      <Pressable
        onPress={() => navigation.navigate('Formulaire', { recette: item })}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#F2A93B' : 'transparent'})}
      >
        <View style={{ padding: 10, flexDirection: 'row' }}>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>{afficherCategorie(item.category)}</Text>
            <Text style={{ color: 'white', marginTop: 5 }}>{afficherDuree(item)}</Text>
          </View>

          <View style={{ flex: 1, marginLeft: 15, justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: '#cccccc', marginTop: 5 }}>{item.description}</Text>
          </View>

        </View> 
      </Pressable > 
    );
  }

  function handleAdd() {
    navigation.navigate('Formulaire');
  }

  const recettesTriees = [...recettes].sort((a, b) => a.name.localeCompare(b.name));

  return (
  <PageContainer>

    <FlatList
      data={recettesTriees}
      renderItem={afficherRecette}
      keyExtractor={(item) => item.id.toString()}
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}
      ListEmptyComponent={
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Aucune recette</Text>
        </View>
      }
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'white' }} />}
    />

    <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
      <Button title="Add" onPress={handleAdd} />
    </View>

    <ToastManager />
    
  </PageContainer>
);
}