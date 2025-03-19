import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen'; 
import { MyProvider } from './src/context/MyContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>
  );
};

export default App;