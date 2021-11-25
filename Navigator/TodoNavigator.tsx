import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen, { screenOptions as screenOptionsMainScreen } from '../Screens/MainScreen';
import TodoDetailsScreen, { screenOptions as screenOptionsTodoDetailsScreen } from '../Screens/TodoDetailsScreen';

const Stack = createNativeStackNavigator();

const TodoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={MainScreen} options={screenOptionsMainScreen} />
      <Stack.Screen name='TodoDetail' component={TodoDetailsScreen} options={screenOptionsTodoDetailsScreen} />
    </Stack.Navigator>
  );
};

export default TodoNavigator;
