import {Text,ScrollView,Image,View,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import { useFonts,ShantellSans_500Medium} from '@expo-google-fonts/dev';
export default function Ns(){
    const navi = useNavigation();
  
  let [fontsLoaded, fontError] = useFonts({
    ShantellSans_500Medium
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // <LinearGradient style={styles.container}
     // colors={['#80B3FF']}>
    <SafeAreaView>    
    <ScrollView>
    <View style={styles.container}>
     <View  style={styles.banner}>
    <Text style={styles.txtinicial}>Musics</Text>
     </View> 

      <View style={styles.perso}> 
       <View style={styles.boxp}>
             <Image style={styles.poster} source={require('../assets/dorminto.png')}></Image>
              </View>

              <View style={styles.box}>
              <Image style={styles.img} source={require('../assets/play.png')}></Image>
              <Text style={styles.txt}>2.Rain</Text>
                            <Text style={styles.txt}>2:55</Text>
              </View>

              
              <View style={styles.box}>
              <Image style={styles.img} source={require('../assets/play.png')}></Image>
              <Text style={styles.txt}>3.Birds</Text>
                                          <Text style={styles.txt}>4:55</Text>
              </View>


              <View style={styles.box}>
              <Image style={styles.img} source={require('../assets/play.png')}></Image>
              <Text style={styles.txt}>4.Water</Text>
                                          <Text style={styles.txt}>3:35</Text>
              </View>

 <View style={styles.box}>
 <Image style={styles.img} source={require('../assets/play.png')}></Image>
              <Text style={styles.txt}>5.Storm</Text>
                                          <Text style={styles.txt}>10:35</Text>
              </View>
              </View>

 
    </View>
    </ScrollView>
    </SafeAreaView>
 //   </LinearGradient>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#DCBFFF',
  },

  banner:{
     flex: 1,
     height:80,
     width:400,
    justifyContent: 'center',
    alignItems:'center',
   backgroundColor:'#F2BED1',
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
   justifyContent:'space-around',
   alignItems:'center',
   flexDirection:'row',
   width:350,
   height:70,
   backgroundColor:'#F2BED1',
   marginTop:45,
   borderRadius:30,
 },

 img:{
   width:50,
   height:50,
 },
txt:{
   color:'#FFFAFA',
     fontSize: 30,
    fontFamily: 'ShantellSans_500Medium'
},
poster:{
  width:200,
  height:200,
}
});
