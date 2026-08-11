import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

export default function Layout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#df5c10',
        tabBarInactiveTintColor: '#8d8d8d',
        tabBarLabelStyle: {
            fontSize: 10,
        },
        tabBarIconStyle: {
            height: 20,
            marginTop: 3,
        },
        tabBarStyle: {
            backgroundColor: '#fcfcfc',
            width: '80%',
            borderRadius: 20,
            position: 'absolute',
            bottom: 20,
            left: '10%',
        }
    }}>
        <Tabs.Screen name="home" options={{ 
            tabBarLabel: 'Home', 
            tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={20} color={color} />
        }} />
        <Tabs.Screen name="contact" options={{ 
            tabBarLabel: 'Contato', 
            tabBarIcon: ({ color }) => <FontAwesome5 name="user-plus" size={20} color={color} />
        }} />
    </Tabs>
  )
}