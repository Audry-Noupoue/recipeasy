import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Styles.js';

export default function PageContainer({ children }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}