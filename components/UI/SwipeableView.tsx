import React, { FC, useRef } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

type SwipeableViewProps = {
  onDeleteTodo: () => void;
  onCompleteTodo: () => void;
};

const SwipeableView: FC<SwipeableViewProps> = ({
  children,
  onDeleteTodo,
  onCompleteTodo,
}) => {
  const _swipeableRow = useRef<any>(null);
  const renderRightAction = (
    text: any,
    color: any,
    x: any,
    progress: any,
    pressAction: () => void
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      pressAction();
      close();
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}
        >
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress: any) => (
    <View
      style={{
        width: 192,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}
    >
      {renderRightAction(
        <FontAwesome5 name='check' size={24} color='white' />,
        colors.completed,
        128,
        progress,
        onCompleteTodo
      )}
      {renderRightAction(
        <FontAwesome5 name='trash' size={24} color='white' />,
        colors.notCompleted,
        64,
        progress,
        onDeleteTodo
      )}
    </View>
  );

  const close = () => {
    _swipeableRow?.current?.close();
  };

  return (
    <Swipeable
      ref={_swipeableRow}
      friction={2}
      leftThreshold={30}
      rightThreshold={40}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SwipeableView;
