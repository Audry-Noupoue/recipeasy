import Login from './pages/login.js';
import Formulaire from './pages/formulaire.js';
import Liste from './pages/liste.js';
import Create from './pages/create.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>

      <StatusBar style="light" animated/>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#130c43ef',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Login"
          component={Login}
          options={{  headerBackVisible: false, title: 'Login' }}
        />

        <Stack.Screen
          name="Create"
          component={Create}
          options={{title: 'SingUp' }}
        />

        <Stack.Screen
          name="Liste"
          component={Liste}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button style={{ backgroundColor: '#F2A93B'}}
                onPress={() => navigation.replace('Login')}
              >
                Log out
              </Button>
            ),
            headerBackVisible: false, title : 'Recipeasy'
          })}
        />

        <Stack.Screen
          name="Formulaire"
          component={Formulaire}
          
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}