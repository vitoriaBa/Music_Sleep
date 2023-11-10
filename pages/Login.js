import { Text,Image, SafeAreaView,View, StyleSheet,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import {useState,useEffect,} from'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import Firebase from'../Firebase';

//email: aaa@gmail.com
//senha: 123456
export default function Login(){
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);

const[email, setEmail]= useState('');
  const[senha, setSenha] = useState('');
  const[user, setUser]= useState('');

  function login(){
Firebase.auth().signInWithEmailAndPassword(email, senha)
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode, errorMessage);
   
  })
  }
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(function(user){
      setUser(user);
      if(initializing) setInitializing(false);
    });
  },);
  


if(user){
    return navigation.navigate('Home');
 }
 else{
 console.log('email ou senha errado');
 }
  return(
    <LinearGradient style={styles.container} colors={['#FFEECC', '#F2BED1']}>
    <SafeAreaView style={styles.container}>
  <ScrollView>
      <Text style={styles.title}>
     Music Sleep
      </Text>
  
  
<View style={styles.login}>
  <Text style={styles.txt}>Login</Text>
     <TextInput
    placeholderTextColor={'#FFCCCC'}
    style={styles.input}
    placeholder="email"
    onChangeText={(email) => setEmail(email)}
    value={email}
    />
  
  <TextInput
    placeholderTextColor={'#FFCCCC'}
    style={styles.input}
    placeholder="Senha"
    onChangeText={(senha) => setSenha(senha)}
    value={senha}
    />

    <TouchableOpacity
    style={styles.buton}
    onPress={() =>{ 
    login();
    }}>
    <Text style={styles.txt}>Entra</Text>
    </TouchableOpacity>
    </View>
</ScrollView>
</SafeAreaView>
 </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
  justifyContent: 'center',
  },
  title: {
    color:'#FBA1B7',
    margin: 24,
    fontSize: 18,
    fontWeight:'bold',
    textAlign:'center',
  },
  input:{
    fontSize:30,
    width:250,
    height:40,
    backgroundColor:'#FFF0F5',
    borderRadius:10,
    margin:20,
  },
  txt:{
    fontSize:25,
    color:'#F8E8EE',
  },
  buton:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    margin:20,
    width:150,
    height:200,
    borderRadius:20,
    backgroundColor:'#FEBBCC',
  },
  login:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#FBA1B7',
width:300,
height:330,
borderRadius:20,
padding:20,
marginTop:150,
  }
 
});
