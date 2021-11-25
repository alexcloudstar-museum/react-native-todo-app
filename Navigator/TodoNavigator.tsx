import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../Screens/MainScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => <Stack.Screen name='Home' component={MainScreen} />;

const TodoNavigator = () => {
  return (
    <Stack.Navigator>
      <MainStack />
    </Stack.Navigator>
  );
};

export default TodoNavigator;
