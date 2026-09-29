import { Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import { styles } from '../styles/Styles.js';
import Input from '../components/Input.js';

export default function Login({ navigation }) {
   function handleLogin() {
    console.log("Login");
    navigation.replace('Liste');
  }

  function handleCreate() {
    navigation.navigate('Create');
  }

  return (
    <PageContainer>

      <Input
        title = "Username"
        onChangeText={ (text) => console.log(text) }
      />

      <Input
        title = "Password"
        onChangeText={ (text) => console.log(text) }

      />
    
      <Button
        title="Login"
        onPress={handleLogin}
      />
  
      <Text style ={styles.texte}  onPress={handleCreate}>
        sign up!
      </Text>
  
      <StatusBar style="auto" />

    </PageContainer>
  );
}