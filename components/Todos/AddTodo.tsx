import { format } from 'date-fns';
import React, { FC, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';
import { storeData } from '../../helpers';
import { Todo } from '../../types';

type AddTodoProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const AddTodo: FC<AddTodoProps> = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState<Todo>({
    id: '',
    title: '',
    isCompleted: false,
    addedDate: format(new Date(), 'dd/MM/yyyy'),
  });

  const id = uuid.v4().toString();

  const onChangeText = (text: string) => {
    setTodo({
      id,
      title: text,
      isCompleted: false,
      addedDate: format(new Date(), 'dd/MM/yyyy'),
    });
  };

  const onSubmit = (event: any) => {
    if (!todo.title) {
      Alert.alert('Error', 'Please enter a todo', [{ text: 'OK' }]);
      return;
    }

    todos !== null ? storeData([...todos, todo]) : storeData([todo]);

    todo && setTodos([...todos, todo]);

    setTodo({
      id: '',
      title: '',
      isCompleted: false,
      addedDate: format(new Date(), 'dd/MM/yyyy'),
    });
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        value={todo?.title}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    width: '60%',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});

export default AddTodo;
