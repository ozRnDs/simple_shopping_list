import Checkbox from 'expo-checkbox';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, 
        Text, 
        View,
        Animated,
        PanResponder,
        Pressable,
        ActivityIndicator,
      } from 'react-native';

type ItemProps = {
    item: string;
    onRemove: any;
  };

// Component for rendering an individual item with swipe actions
const GroceryItem: React.FC<ItemProps> = ({ item , onRemove}) => {
  const [isChecked, setChecked] = useState(false);

  const translateX = useRef(new Animated.Value(0)).current;
  const progressValue = useRef(new Animated.Value(0)).current;

  const backgroundColor = translateX.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: ['blue', 'white', 'red'], // Left = blue, Reset = white, Right = red
    extrapolate: 'clamp',
  });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      (gestureState.dx > 20),
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx <0){
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }else{
        Animated.spring(translateX, {
          toValue: gestureState.dx,
          useNativeDriver: false,
        }).start();
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 100) {
        // Right swipe action
        handleSwipe('right');
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

  const onPressFunction = () => {
    setChecked(!isChecked)
  }

  useEffect(() => {
    if (isChecked){
      console.log("Wait to delete the item")
      Animated.timing(progressValue, {
        toValue: 1, // Progress reaches 100%
        duration: 2000, // Time in ms
        useNativeDriver: false,
      }).start();

      const timer = setTimeout(() => {
        console.log("Delete the item");
        onRemove(item)
      }, 3000); // Delay in milliseconds (2 seconds)
      return () => clearTimeout(timer); // Cleanup if state changes before timeout
    }else{
      console.log("Cancel Item delete");
      progressValue.setValue(0); // Reset progress if unchecked
    }
    
  }, [isChecked])

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.itemContainer, { transform: [{ translateX }] , backgroundColor }]}
    >
      <Pressable style={styles.checkbox} onPress={onPressFunction}>
        <Checkbox value={isChecked} onValueChange={setChecked} />
      </Pressable>
      <Text style={[styles.item, { width: isChecked ? '70%' : '75%' } // Dynamically adjust width
      ]}>{item}</Text>

      {isChecked && (
        <ActivityIndicator />
      )}
      <View style={{ minWidth:'10%', alignItems: 'flex-end'}}>
        <Text style={styles.quantity}>1.0</Text>
        <Text style={styles.units}>grams</Text>
      </View>
    </Animated.View>
  );
};

export default GroceryItem

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 2,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    verticalAlign: 'middle',
  },
  item: {
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'center',
    // width: '75%',
  },
  quantity: {
    color: '#666',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  units: {
    color: '#666',
    textAlignVertical: 'center',
    fontSize: 8,
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
  checkbox: {
    margin: 10,
    marginRight: 18,
    flexDirection: 'row',
  },
});