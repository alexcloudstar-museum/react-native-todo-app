import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { TodoList, TodosActions } from '../../types';
import TodoItem from './TodoItem';

type TodosListProps = {
  todos: TodoList;
  navigation: any;
} & TodosActions;

const TodosList: FC<TodosListProps> = ({ todos, onDeleteTodo, onCompleteTodo, navigation }) => {

  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={dataItem => (
        <TodoItem
          id={dataItem.item.id}
          title={dataItem.item.title}
          isCompleted={dataItem.item.isCompleted}
          addedDate={dataItem.item.addedDate}
          onDeleteTodo={onDeleteTodo}
          onCompleteTodo={onCompleteTodo}
          navigation={navigation}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '80%',
    marginVertical: 20,
  },
});

export default TodosList;
