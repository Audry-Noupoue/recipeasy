import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';

import PageContainer from '../components/PageContainer';
import Button from '../components/Button.js';
import { styles } from '../styles/Styles.js';

export default function Liste({ navigation, route }) {

  const [recettes, setRecettes] = useState([]);


  useEffect(() => {
  const nouvelleRecette = route.params?.recette;

    if (nouvelleRecette) {
      setRecettes([
        ...recettes,
        nouvelleRecette
      ]);
    }
  }, [route.params?.recette]);

  function handleAdd() {
    navigation.push('Formulaire');
  }

  function handleView() {

    if (recettes.length === 0) {
      return;
    }

    const indexAleatoire = Math.floor(
      Math.random() * recettes.length
    );

    const recetteAleatoire = recettes[indexAleatoire];

    navigation.navigate('Formulaire', {
      recette: recetteAleatoire
    });
  }

  const recettesTriees = [...recettes].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <PageContainer>

      

      <Button
        title="Add"
        onPress={handleAdd}
      />

      <Button
        title="View"
        onPress={handleView}
      />

      <Text style={styles.titre} >
       Liste des recettes 
      </Text>

      <Text style={styles.text}>
        {JSON.stringify(recettesTriees, null, 2)}
      </Text>

      <StatusBar style="auto" />

    </PageContainer>
  );
}