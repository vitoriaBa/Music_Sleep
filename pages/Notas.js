import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import { useFonts,ShantellSans_500Medium} from '@expo-google-fonts/dev';
export default function Notas(){
    const navi = useNavigation();
  
  let [fontsLoaded, fontError] = useFonts({
    ShantellSans_500Medium
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
     <LinearGradient style={styles.container}
      colors={['#F8E8EE', '#FDCEDF']}
    >
    <SafeAreaView>    
    <ScrollView>
    <View style={styles.container}>
     <View  style={styles.banner}>
    <Text style={styles.txtinicial}>Styles</Text>
     </View> 

      <View style={styles.perso}> 
              <View style={styles.box}>
              <Image style={styles.img} source={require('../assets/calmo.png')}></Image>
              <Text style={styles.txt}>To Sleep</Text>
              </View>

              
              <View style={styles.box}>
              <Image style={styles.img} source={require('../assets/feliz.png')}></Image>
              <Text style={styles.txt}>Happy</Text>
              </View>


              <View style={styles.box}>
              <Image style={styles.img} source={require('../assets/normal.png')}></Image>
              <Text style={styles.txt}>Calm</Text>
              </View>

              </View>

    </View>
    </ScrollView>
    </SafeAreaView>
    </LinearGradient>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },

  banner:{
     flex: 1,
     height:100,
     width:400,
    justifyContent: 'center',
    alignItems:'center',
   backgroundColor:'#DCBFFF',
   borderBottomLeftRadius:40,
   borderBottomRightRadius:40,

  },
  txtinicial: {
   
    fontSize: 30,
    textAlign: 'center',
    color:'#FFFAFA',
    fontFamily: 'ShantellSans_500Medium'

  },
  perso:{
   justifyContent:'center',
   alignItems:'center',
   flexDirection:'column',
  },
 
 box:{
   justifyContent:'center',
   alignItems:'center',
   flexDirection:'row',
   width:330,
   height:150,
   backgroundColor:'#DCBFFF',
   margin:10,
   marginTop:20,
   borderRadius:30,
 },
 img:{
   width:150,
   height:150,
 },
txt:{
   color:'#FFFAFA',
     fontSize: 30,
    fontFamily: 'ShantellSans_500Medium'
}
});
