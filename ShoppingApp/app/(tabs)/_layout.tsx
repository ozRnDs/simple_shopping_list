import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from "@expo/vector-icons/Foundation";

export default function RootLayout() {
  return (
    <Tabs   screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
      backgroundColor: '#25292e',
      },
    }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home',
             tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'storefront' : 'storefront-outline'} color={color} size={24} />
            ) 
          }}/>
      <Tabs.Screen name="shopping_list" options={{ title: 'Shopping List',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="list" size={24} color={color} />
            // <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }} />
    </Tabs>
  );
}
