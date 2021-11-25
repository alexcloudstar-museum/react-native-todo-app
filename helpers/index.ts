import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../types';

export const storeData = async (value: Todo[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
