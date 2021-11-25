import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from '../components/Todos/AddTodo';
import TodosList from '../components/Todos/TodosList';
import { colors } from '../constants/colors';
import { getData, storeData } from '../helpers';
import { TodoList } from '../types';

const MainScreen = (props: any) => {
  const [todos, setTodos] = useState<TodoList>([]);

  useEffect(() => {
    (async () => {
      const todos = await getData();
      setTodos(todos);
    })();
  }, []);

  const onDeleteTodo = (id: string) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);

    storeData(filteredTodos);
    setTodos(filteredTodos);
  };

  const onCompleteTodo = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });

    storeData(updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Add a new Todo ⤵️</Text>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodosList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onCompleteTodo={onCompleteTodo}
        navigation={props.navigation}
      />
    </View>
  );
};

export const screenOptions = (navData: any) => {
  return {
    headerTitle: navData.route.params?.title,
    headerTintColor: colors.primary,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default MainScreen;
