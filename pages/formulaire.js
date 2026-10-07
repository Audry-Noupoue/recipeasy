import { View, Text, TextInput } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import { styles } from '../styles/Styles.js';
import { useState } from 'react';
import ToastManager, { Toast } from 'toastify-react-native';

export default function Formulaire({ navigation, route }) {

  const recette = route.params?.recette;

  const [recetteForm, setRecetteForm] = useState({
    category: recette?.category?.toString() ?? '', name: recette?.name ?? '',
    heure: recette?.durationHours ?? 0, minute: recette?.durationMinutes ?? 0,
    description: recette?.description ?? ''
  });

  const edition = recette !== undefined;

  function handleSave() {
    if (recetteForm.category === '') {
      Toast.error('Please select a category!');
      return;
    }

    if (recetteForm.name.trim() === '') {
      Toast.error('Please enter a name');
      return;
    }

    if (recetteForm.heure === 0 && recetteForm.minute === 0) {
      Toast.error('Duration must be greater than 0');
      return;
    }

    const nouvelleRecette = {
      category: Number(recetteForm.category), name: recetteForm.name.trim(),
      durationHours: Number(recetteForm.heure), durationMinutes: Number(recetteForm.minute),
      description: recetteForm.description
    };

    navigation.popTo('Liste', { recette: nouvelleRecette });
  }

  function handleDelete() {
    navigation.popTo('Liste');
  }

  const options = [
    { id: '1', label: 'Breakfast', value: '1', color: 'white' },
    { id: '2', label: 'Lunch', value: '2', color: 'white' },
    { id: '3', label: 'Dinner', value: '3', color: 'white' }
  ];

  const heures = Array.from({ length: 13 }, (_, index) => index);
  const min = Array.from({ length: 60 }, (_, index) => index);

  return (
    <PageContainer>

      <View style={[styles.radio]}>
        <RadioGroup radioButtons={options} labelStyle={{ color: 'white' }} layout="row" selectedId={recetteForm.category} onPress={(value) => setRecetteForm({ ...recetteForm, category: value })} />
      </View>

      <Input title="Name" value={recetteForm.name} onChangeText={(value) => setRecetteForm({ ...recetteForm, name: value })} />

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, margin: 10, color: 'white' }}>Duration</Text>

          <Picker style={{ flex: 1, color: 'white' }} dropdownIconColor="white" selectedValue={recetteForm.heure} onValueChange={(value) => setRecetteForm({ ...recetteForm, heure: value })}>
            {heures.map((heure) => (
              <Picker.Item key={heure} label={heure.toString() + ' h'} value={heure} />
            ))}
          </Picker>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ margin: 10, color: 'white' }}>:</Text>

          <Picker style={{ flex: 1, color: 'white' }} dropdownIconColor="white" selectedValue={recetteForm.minute} onValueChange={(value) => setRecetteForm({ ...recetteForm, minute: value })}>
            {min.map((minute) => (
              <Picker.Item key={minute} label={minute.toString() + ' min'} value={minute} />
            ))}
          </Picker>
        </View>

      </View>

      <TextInput
        style={[styles.input, { width: '95%', height: 500, verticalAlign: 'top' }]}
        placeholder="Description"
        placeholderTextColor="#ffffff"
        multiline={true}
        value={recetteForm.description}
        onChangeText={(value) => setRecetteForm({ ...recetteForm, description: value })}
      />

      {edition ? (
        <Button title="Delete" onPress={handleDelete} />
      ) : (
        <Button title="Save" onPress={handleSave} />
      )}

      <ToastManager />
      <StatusBar style="auto" />

    </PageContainer>
  );
}