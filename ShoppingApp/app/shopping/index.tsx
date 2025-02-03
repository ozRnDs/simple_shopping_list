import { Stack } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";

export default function Shopping() {
  return (
    <View style={styles.container}>
            <Stack.Screen
              options={{
                title: 'Choose Store',
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
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
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});