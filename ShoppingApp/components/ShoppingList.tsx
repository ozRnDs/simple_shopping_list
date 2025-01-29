import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, SectionList,
        Animated,
        PanResponder,
        GestureResponderEvent,
        PanResponderGestureState
      } from 'react-native';
import GroceryItem from './GroceryItem'
import GrocerySectionHeader from './GrocerySectionHeader'

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

const global_sections = [
  {
    title: 'Dairy',
    data: ['Milk', 'Cheese', 'Yogurt'],
  },
  {
    title: 'Vegetables',
    data: [
      'Carrots',
      'Broccoli',
      'Spinach',
      'Potatoes',
      'Onions',
      'Cucumber',
      'Lettuce',
    ],
  },
  {
    title: 'Meat',
    data: ['Chicken', 'Beef', 'Pork', 'Turkey', 'Bacon', 'Sausage'],
  },
  {
    title: 'Fruits',
    data: ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Pineapple', 'Strawberries'],
  },
  {
    title: 'Beverages',
    data: ['Juice', 'Milkshake', 'Coffee', 'Tea', 'Soda', 'Water'],
  },
];

export default function ShoppingList() {
  const [sections, setSections] = useState(
    global_sections
  )

  const handleRemove = async (itemToRemove: string) => {
    try {
      // POST request to update the backend
      const response = await fetch('https://your-backend-api.com/remove-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: itemToRemove }),
      });

      if (!response.ok) {
        console.error('Failed to update backend');
        return;
      }

      // Remove item from the frontend list
      setSections((prevSections) =>
        prevSections
          .map((section) => ({
            ...section,
            data: section.data.filter((item) => item !== itemToRemove),
          }))
          .filter((section) => section.data.length > 0) // Remove empty sections
      );
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };


  return (
      <SectionList
        style={styles.sectionList}
        sections={sections}
        renderItem={({item}) => <GroceryItem item={item} onRemove={handleRemove}/> }
        renderSectionHeader={({section}) => (
          <GrocerySectionHeader title={section.title} />
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
  );
};