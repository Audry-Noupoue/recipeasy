import { useState } from 'react';
import ToastManager, { Toast } from 'toastify-react-native';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import UserCredentials from '../models/user-credentials.js';
import auth from '../services/auth.js';

export default function Create({ navigation }) {

  const [credentials, setCredentials] = useState(new UserCredentials({ username: '', password: '' }));
  const [confirmation, setConfirmation] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    const erreurs = [];

    if (credentials.username.trim() === '') erreurs.push('Please enter a username!');
    if (credentials.password === '') erreurs.push('Please enter a password!');
    if (credentials.password !== confirmation) erreurs.push('Passwords do not match!');

    if (erreurs.length > 0) {
      Toast.error(erreurs.join('\n'));
      return;
    }

    setLoading(true);

    try {
      const success = await auth.signUp(credentials);

      if (success) {
        navigation.replace('Liste');
      } else {
        Toast.error('Unable to create account!');
      }
    } catch (error) {
      Toast.error('Connection error: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageContainer>

      <Input title="Username" value={credentials.username} onChangeText={(value) => setCredentials(new UserCredentials({ ...credentials, username: value }))} />

      <Input title="Password" value={credentials.password} secureTextEntry onChangeText={(value) => setCredentials(new UserCredentials({ ...credentials, password: value }))} />

      <Input title="Password confirmation" value={confirmation} secureTextEntry onChangeText={setConfirmation} />

      <Button title={loading ? 'Creating...' : 'Create my account'} onPress={loading ? undefined : handleCreate} />

      <ToastManager />

    </PageContainer>
  );
}