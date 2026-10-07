import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

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
    }
  ]);

  return (
    <PageContainer>
      <StatusBar style="auto" />
    </PageContainer>
  );
}