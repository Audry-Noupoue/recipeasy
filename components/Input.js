import {TextInput } from 'react-native';
import { styles } from '../styles/Styles.js';

export default function Input({title , onChangeText, value }) {
  return (
    <TextInput
      style={[styles.input]}
      placeholder={title}
      placeholderTextColor='#ffffff'
      onChangeText={onChangeText}
      value={value}
    />
  );
}