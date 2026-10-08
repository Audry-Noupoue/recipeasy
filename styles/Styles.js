import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#387E7F',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  container: {
    flex: 1,
    backgroundColor: '#387E7F',
    alignItems: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    margin: 10,
    color: 'white',
    height: '6%',
    width: '95%'
  },

  button: {
    backgroundColor: '#F2A93B',
    color: 'white',
    margin: 20,
    padding: 10,
    borderRadius: 3,
    borderWidth: 0,
    justifyContent: 'center'
  },

  text: {
    color: 'white',
    textAlign: 'center'
  },

  radio: {
    marginBottom: 20,
    marginTop: 10
  },

  texte: {
    fontSize: 14,
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titre: {
  fontSize: 30,
  color: 'white',
  fontWeight: 'bold',
  marginBottom: 20
  }

});