import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import {useRouter} from 'expo-router'

export default function LoginScreen() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <View style={styles.actions}>
                <Button title="Sign Up" onPress={() => router.push('/signup')} />
                <Button title="Home" onPress={() => router.push('/home')}/>
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
