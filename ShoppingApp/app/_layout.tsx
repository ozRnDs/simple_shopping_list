import { getTheme } from '@/styles/colors';
import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: getTheme().background,
        },
        headerTintColor: getTheme().text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
  );
}
