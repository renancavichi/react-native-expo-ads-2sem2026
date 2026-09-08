import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import {useRouter} from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useEffect} from 'react'

export default function LoginScreen() {
    const router = useRouter()

    useEffect(() => {
        const checkIsLogged = async () => {
            const value = await AsyncStorage.getItem('isLogged')
            if (value === 'true') {
                router.replace('/home')
            } 
        }
        checkIsLogged()
    }, [])

    const handleLogin = async () => {
        await AsyncStorage.setItem('isLogged', 'true');
        await AsyncStorage.setItem('user', JSON.stringify({ id: 1, name: 'Teste User', token: '123TOKENTESTE' }));
        router.push('/home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <View style={styles.actions}>
                <Button title="Sign Up" onPress={() => router.push('/signup')} />
                <Button title="Home" onPress={handleLogin}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  actions: {
    flexDirection: 'row',
    gap: 20
  }
});
