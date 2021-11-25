import { FontAwesome5 } from '@expo/vector-icons';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Todo, TodosActions } from '../../types';
import SwipeableView from '../UI/SwipeableView';

type TodoItemProps = { navigation: any } & Todo & TodosActions;

const TodoItem: FC<TodoItemProps> = ({
  id,
  title,
  isCompleted,
  addedDate,
  onDeleteTodo,
  onCompleteTodo,
  navigation,
}) => {

  return (
    <View style={{ marginVertical: 10 }}>
      <SwipeableView
        onDeleteTodo={onDeleteTodo.bind(this, id)}
        onCompleteTodo={onCompleteTodo.bind(this, id)}
      >
        <TouchableOpacity
          style={{
            ...styles.screen,
            backgroundColor: isCompleted ? '#12802a' : '#ccc',
          }}
          onPress={() => {
            navigation.navigate('TodoDetail', {
              id,
              title,
              isCompleted,
              addedDate,
              onCompleteTodo,
            });
          }}
        >
          <View style={styles.container}>
            <Text
              style={{ ...styles.text, color: isCompleted ? '#fff' : 'black' }}
            >
              {title}
            </Text>
            {isCompleted ? (
              <FontAwesome5 name='check-square' size={24} color='#fff' />
            ) : (
              <FontAwesome5 name='square' size={24} color='black' />
            )}
          </View>
        </TouchableOpacity>
      </SwipeableView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    elevation: 5,
    width: '100%',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowColor: '#232323',
    shadowOffset: { width: 0, height: 2 },
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'open-sans',
  },
});

export default TodoItem;
