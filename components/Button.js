import { TouchableHighlight, Text } from 'react-native';
import { styles } from '../styles/Styles.js';

export default function Button({ title, onPress }) {
  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}