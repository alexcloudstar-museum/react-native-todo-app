import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TodoNavigator from './TodoNavigator';

const MainNavigationContainer = () => {
  return (
    <NavigationContainer>
      <TodoNavigator />
    </NavigationContainer>
  );
};

export default MainNavigationContainer;
