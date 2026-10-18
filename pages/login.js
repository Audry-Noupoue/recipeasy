import { Text } from 'react-native';
import { useState } from 'react';
import ToastManager, { Toast } from 'toastify-react-native';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import { styles } from '../styles/Styles.js';
import UserCredentials from '../models/user-credentials.js';
import auth from '../services/auth.js';

export default function Login({ navigation }) {

  const [credentials, setCredentials] = useState(new UserCredentials({ username: '', password: '' }));
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    const erreurs = [];

    if (credentials.username.trim() === '') erreurs.push('Please enter a username!');
    if (credentials.password === '') erreurs.push('Please enter a password!');

    if (erreurs.length > 0) {
      Toast.error(erreurs.join('\n'));
      return;
    }

    setLoading(true);

    try {
      const success = await auth.logIn(credentials);

      if (success) {
        setCredentials(new UserCredentials({ username: '', password: '' }));
        navigation.replace('Liste');
      } else {
        Toast.error('Invalid username or password!');
      }
    } catch (error) {
      Toast.error('Connection error: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleCreate() {
    navigation.navigate('Create');
  }

  return (
    <PageContainer>

      <Input title="Username" value={credentials.username} onChangeText={(text) => setCredentials(new UserCredentials({ ...credentials, username: text }))} />

      <Input title="Password" value={credentials.password} secureTextEntry onChangeText={(text) => setCredentials(new UserCredentials({ ...credentials, password: text }))} />

      <Button title={loading ? 'Loading...' : 'Login'} onPress={loading ? undefined : handleLogin} />

      <Text style={styles.texte} onPress={handleCreate}>sign up!</Text>

      <ToastManager />

    </PageContainer>
  );
}