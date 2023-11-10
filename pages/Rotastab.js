import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import{MaterialCommunityIcons}from "@expo/vector-icons";

import Home from "./Home";
import Notas from "./Notas";
import Ns from "./Ns";

const Tab = createBottomTabNavigator();
export default function Rotastab(){
  
  return(
   <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>

  <Tab.Screen name="Plalist" component={Notas} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="music-box-outline" color={'#F2BED1'} size={35}/>}}/>
  
  <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="home" color={color} size={35}/>}}/>

  <Tab.Screen name="Musics" component={Ns}  options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="play" color={'#80B3FF'} size={35}/>}}/>
</Tab.Navigator>
  );

}