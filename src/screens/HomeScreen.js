import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MyContext } from '../context/MyContext';
import { styles } from '../styles';

const HomeScreen = ({ navigation }) => {
  const { count, incrementCount } = useContext(MyContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.countText}>Contador: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Second')}
      >
        <Text style={styles.buttonText}>Ir a Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;