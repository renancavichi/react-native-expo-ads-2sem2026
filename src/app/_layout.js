import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Entrar'}} />
      <Stack.Screen name="signup" options={{
        title: 'Cadastrar', 
        presentation: 'formSheet', 
        sheetAllowedDetents: [0.25, 0.5, 0.75],
        sheetInitialDetentIndex: 0,
      }}/>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  )
}