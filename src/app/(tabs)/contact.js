import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useRouter } from 'expo-router'
import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ContactScreen() {

  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getIsLogged = async () => {
      const value = await AsyncStorage.getItem('isLogged')
      if (value === 'true'){
        const userData = await AsyncStorage.getItem('user')
        setUser(JSON.parse(userData))
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    }
    getIsLogged()
  }, [])

  const router = useRouter()

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLogged')
    await AsyncStorage.removeItem('user')
    setIsLogged(false)
    setUser(null)
    router.replace('/')
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.tinyLogo}
          source={'https://reactnative.dev/img/tiny_logo.png'}
        />
        <Text style={styles.textLogo}>Contato</Text>
        <FontAwesome5 style={styles.iconHome} name="home" size={24} color="#FFF" onPress={() => router.push('/')} />
      </View>
      <View style={styles.box2}>
      {isLogged && <Text style={styles.userName}>Bem-vindo, {user?.name}!</Text>}
      {/* //criar um card de usuário com avatar, nome e email */}
      <View style={styles.cardUser}>
        <Image
          style={styles.userAvatar}
          source={'https://reactnative.dev/img/tiny_logo.png'}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>
      </View>
      <View style={styles.cardUser}>
        <Image
          style={styles.userAvatar}
          source={'https://reactnative.dev/img/tiny_logo.png'}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>
      </View>
      {isLogged && <Text style={styles.userName}>Tela de Contato</Text>}
      <Button title="Logout" onPress={handleLogout} />
      </View>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdf4f',
  },
  box: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#345678',
    padding: 20,
    gap: 20
  },
  box2: {
    flex: 1,
    backgroundColor: '#5fbb21'
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  textLogo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  cardUser: {
    width: '90%',
    marginTop: 20,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  iconHome:{
    marginLeft: 'auto',
  }
});
