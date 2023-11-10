import {Text,View, SafeAreaView, StyleSheet,Image } from 'react-native';
 

 export default function Home(){
   return(
    <SafeAreaView style={styles.container}>
    <View>
<Image style={styles.img} source={require('../assets/baleia.png')}></Image>
    </View>
    <View style={styles.texto}>
    <Text style={styles.titulo}>Music sleep</Text>
    <Text style={styles.txt}>the best songs for your day.
your way and with your style</Text>
    </View>
    </SafeAreaView>
   );
 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#80B3FF',
    padding: 0,
    paddingTop:140,
  },
  img:{
    width:300,
    height:300,
  },
  texto:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:360,
    height:40,
    //backgroundColor:'#FFFAFA',
  },
  txt:{
   color:'#FFFAFA',
     fontSize: 30,
    fontFamily: 'ShantellSans_500Medium'
},
titulo:{
   color:'#FFFAFA',
     fontSize: 50,
    fontFamily: 'ShantellSans_500Medium'
}

} );