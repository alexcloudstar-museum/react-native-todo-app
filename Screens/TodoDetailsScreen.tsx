import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const TodoDetailsScreen = (props: any) => {
  const { title, addedDate, isCompleted, onCompleteTodo } = props.route.params;

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>
        Todo: <Text style={styles.textBold}>{title}</Text>
      </Text>
      <Text style={styles.text}>
        Completed:{' '}
        <Text
          style={{
            color: isCompleted ? colors.completed : colors.notCompleted,
          }}
        >
          <Text style={styles.textBold}>
            <Text style={styles.textBold}>{isCompleted.toString()}</Text>
          </Text>
        </Text>
      </Text>
      <Text style={styles.text}>
        Added date: <Text style={styles.textBold}>{addedDate.toString()}</Text>
      </Text>
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
    headerRight: (props: any) => (
      <FontAwesome5
        name='check'
        size={24}
        color={colors.completed}
        onPress={() => {
          navData.route.params?.onCompleteTodo(navData.route.params.id);
          navData.navigation.goBack();
        }}
      />
    ),
  };
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginVertical: 10,
    fontFamily: 'open-sans',
  },
  textBold: {
    fontFamily: 'open-sans-bold',
  },
});

export default TodoDetailsScreen;
