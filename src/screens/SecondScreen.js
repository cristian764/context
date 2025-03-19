import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MyContext } from '../context/MyContext';
import { styles } from '../styles';

const SecondScreen = () => {
  const { count, incrementCount, decrementCount } = useContext(MyContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>
      <Text style={styles.countText}>Contador: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrementCount}>
        <Text style={styles.buttonText}>Decrementar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;