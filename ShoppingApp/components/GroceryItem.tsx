import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, SectionList,
        Animated,
        PanResponder,
        GestureResponderEvent,
        PanResponderGestureState
      } from 'react-native';

type ItemProps = {
    item: string;
    onRemove: any;
  };

// Component for rendering an individual item with swipe actions
const GroceryItem: React.FC<ItemProps> = ({ item , onRemove}) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const backgroundColor = translateX.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: ['blue', 'white', 'red'], // Left = blue, Reset = white, Right = red
    extrapolate: 'clamp',
  });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > 20,
    onPanResponderMove: Animated.event(
      [null, { dx: translateX }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 100) {
        // Right swipe action
        handleSwipe('right');
      } else if (gestureState.dx < -100) {
        // Left swipe action
      } else {
        // Reset position if swipe is insufficient
        resetPosition();
      }
    },
  });

  const handleSwipe = (direction: 'right' | 'left') => {
    const toValue = direction === 'right' ? 300 : -300;

    Animated.timing(translateX, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      if (direction === 'right' ){
        onRemove(item);
      }
      // Reset after swipe animation completes
      translateX.setValue(0);
    });
  };

  const resetPosition = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.itemContainer, { transform: [{ translateX }] , backgroundColor }]}
    >
      <Text style={styles.item}>{item}</Text>
    </Animated.View>
  );
};

export default GroceryItem

const styles = StyleSheet.create({
  sectionList: {
    width: '100%',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    fontSize: 16,
    color: '#333',
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  greenAction: {
    backgroundColor: 'green',
  },
  redAction: {
    backgroundColor: 'red',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});