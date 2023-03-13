import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import tw from "twrnc"
import HomeView from './Components/Home/HomeViews';
import DetailView from './Components/Home/details/DetailView';
import Reservation from './Components/Home/Reservation/Reservation';
import Paiement from './Components/Home/Reservation/Paiement';
import SignIn from './Components/connexion/SignIn';







const HomeStack = createNativeStackNavigator()

  function HomeScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeView} options={{ headerShown: false, }}/>
      </HomeStack.Navigator>
    )
  }



const Drawer = createDrawerNavigator();
function DrawerNavigation(){
  return (
    <Drawer.Navigator screenOptions={{
      headerTransparent: true, 
      headerTitle: "",
      drawerContentStyle:{
        
      }
    }}>
        <Drawer.Screen name="Home-s" component={HomeScreen}/>
        {/* <Drawer.Screen name="eeee" /> */}
        {/* <HomeStack.Screen name="Details" component={DetailView} options={{ headerShown: false, }}/>
        <HomeStack.Screen name="Reservation" component={Reservation} options={{ headerShown: false, }}/>
        <HomeStack.Screen name="Paiement" component={Paiement} options={{ headerShown: false, }}/>
        <HomeStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, }}/> */}
    </Drawer.Navigator>
  )
}





const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home-G'>
        <Stack.Screen name="Home-G" component={DrawerNavigation} options={{ headerShown: false, }}/>
        <Stack.Screen name="Details" component={DetailView} options={{ headerShown: false, }}/>
        <Stack.Screen name="Reservation" component={Reservation} options={{ headerShown: false, }}/>
        <Stack.Screen name="Paiement" component={Paiement} options={{ headerShown: false, }}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, }}/>
      </Stack.Navigator>
      {/* <Drawer.Navigator initialRouteName='Home-G' screenOptions={{
        headerTransparent: true, 
        headerTitle: "",
        drawerContentStyle:{
          
        }
      }} >
        <Drawer.Screen name="Accueil" component={HomeScreen} /> 
        <Drawer.Screen name="Awwwwww" component={HomeScreen} /> 
      </Drawer.Navigator> */}
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
 
});
