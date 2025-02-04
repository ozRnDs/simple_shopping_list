import { getTheme } from '@/styles/colors';
import { Stack } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";



export default function Shopping() {
  return (
    <View style={styles.container}>
            <Stack.Screen
              options={{
                title: 'Choose Store',
                headerStyle: { backgroundColor: getTheme().primary },
                headerTintColor: getTheme().primary_text,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
      <Text style={styles.text}>Shopping Main Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getTheme().background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: getTheme().primary_text,
  },
});