import { View, Text, TextInput } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import { styles } from '../styles/Styles.js';
import { useState } from 'react';
import ToastManager, { Toast } from 'toastify-react-native';

const options = ['Breakfast', 'Lunch', 'Dinner'].map((label, index) => ({
  id: (index + 1).toString(),
  label,
  color: 'white'
}));

const heures = Array.from({ length: 13 }, (_, index) => index);
const min = Array.from({ length: 60 }, (_, index) => index);

export default function Formulaire({ navigation, route }) {

  const recette = route.params?.recette;

  const [recetteForm, setRecetteForm] = useState({
    category: recette?.category ?? 0,
    name: recette?.name ?? '',
    durationHours: recette?.durationHours ?? 0,
    durationMinutes: recette?.durationMinutes ?? 0,
    description: recette?.description ?? ''
  });

  const edition = recette !== undefined;

  function handleSave() {
    const erreurs = [];

    if (recetteForm.category === 0) erreurs.push('Please select a category!');
    if (recetteForm.name.trim() === '') erreurs.push('Please enter a name!');
    if (recetteForm.durationHours === 0 && recetteForm.durationMinutes === 0) erreurs.push('Duration must be greater than 0!');

    if (erreurs.length > 0) {
      Toast.error(erreurs.join('\n'));
      return;
    }

    navigation.popTo('Liste', { recette: recetteForm });
  }

  function handleDelete() {
    navigation.popTo('Liste');
  }

  return (
    <PageContainer>

      <View style={styles.radio}>
        <RadioGroup radioButtons={options} labelStyle={{ color: 'white' }} layout="row" selectedId={recetteForm.category.toString()} onPress={(value) => setRecetteForm({ ...recetteForm, category: Number(value) })} />
      </View>

      <Input title="Name" value={recetteForm.name} onChangeText={(value) => setRecetteForm({ ...recetteForm, name: value.trimStart() })} />

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, margin: 10, color: 'white' }}>Duration</Text>

          <Picker style={{ flex: 1, color: 'white' }} dropdownIconColor="white" selectedValue={recetteForm.durationHours} onValueChange={(value) => setRecetteForm({ ...recetteForm, durationHours: Number(value) })}>
            {heures.map((heure) => <Picker.Item key={heure} label={heure.toString() + ' h'} value={heure} />)}
          </Picker>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ margin: 10, color: 'white' }}>:</Text>

          <Picker style={{ flex: 1, color: 'white' }} dropdownIconColor="white" selectedValue={recetteForm.durationMinutes} onValueChange={(value) => setRecetteForm({ ...recetteForm, durationMinutes: Number(value) })}>
            {min.map((minute) => <Picker.Item key={minute} label={minute.toString() + ' min'} value={minute} />)}
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

    </PageContainer>
  );
}