import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import {useRouter} from 'expo-router'

export default function SignupScreen() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Signup Screen</Text>
            <Button title="Login" onPress={() => router.push('/')} />
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
  }
});
