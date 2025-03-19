// src/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  countText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF', 
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    textAlign: 'center',
  },
});