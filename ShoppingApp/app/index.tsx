
import { View, Text, StyleSheet } from 'react-native';

import LargeButton from '@/components/LargeButton'
import { getTheme } from '@/styles/colors';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

const HOME_PAGE_ICON_SIZE: Int32=50

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Where are you?</Text>
      <LargeButton 
          style={styles.large_button} 
          href="/updating">
            <Ionicons name="home-outline" size={HOME_PAGE_ICON_SIZE} color={getTheme().primary_text } />
            <Text style={styles.button_text}>HOME</Text>
      </LargeButton>
      <LargeButton 
          style={styles.large_button} 
          href="/shopping">
            <Ionicons name="storefront-outline" size={HOME_PAGE_ICON_SIZE} color={getTheme().primary_text }/>
            <Text style={styles.button_text}>STORE</Text>
      </LargeButton>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      backgroundColor: getTheme().background,
      alignItems: 'center',
      paddingTop: '20%',
      // justifyContent: 'space-around',
      flexDirection: 'column',
      gap: '10%',
    },
    text: {
      color: getTheme().text,
      fontSize: 36
    },
    button_text: {
      marginTop: 10,
      fontSize: Math.max(HOME_PAGE_ICON_SIZE/3,15),
      color: getTheme().primary_text,
    },
    large_button: {
      aspectRatio: 1, // Ensures it's a square
      width: '50%', // Sets button size
    }
    });
