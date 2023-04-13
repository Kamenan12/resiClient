import * as React from 'react';
import { useEffect, useState } from "react";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed';
import { auth } from './firebase';
import { db } from './firebase';
import { collection, getDocs, where, query, onSnapshot } from "firebase/firestore";
import tw from "twrnc"
import HomeView from './Components/Home/HomeViews';
import DetailView from './Components/Home/details/DetailView';
import Reservation from './Components/Home/Reservation/Reservation';
import Paiement from './Components/Home/Reservation/Paiement';
import SignIn from './Components/connexion/SignIn';
import Setting from './Components/Setting/SettingScreen';
import Villes from './Components/Home/villes/Villes';
import Communes from './Components/Home/villes/Commune';
import Login from './Components/connexion/Login';







const HomeStack = createNativeStackNavigator()

  function HomeScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeView} options={{ headerShown: false, }}/>
      </HomeStack.Navigator>
    )
  }

  function LienDrawerContent (props) {
    
    return (
      <DrawerContentScrollView {...props} >
        <DrawerItem label="Seting" onPress={() => props.navigation.navigate("Setting")} style={{ borderBottomWidth: 1, borderBottomColor: "gray", backgroundColor: "white"}} 
        labelStyle={{ fontSize: 18, fontWeight: "800", fontFamily: "serif"}}
        icon={() => <Icon name='user' type='evilicon' color="black" size={50} />} />
        {/* <DrawerItem label="Pappa" onPress={() => alert('Link papapa')} /> */}
        <DrawerItem label="rrrrr" onPress={() => alert('Link  rrrr')} />
    </DrawerContentScrollView>
    )
  }



const Drawer = createDrawerNavigator();
function DrawerNavigation(){
  return (
    <Drawer.Navigator 
    screenOptions={{
      headerTransparent: true, 
      headerTitle: "",
      
    }}
    useLegacyImplementation
    drawerContent={(props) => <LienDrawerContent {...props} />}
    >
        <Drawer.Screen name="Home-s" component={HomeScreen} options={{
          title: "Accueil"
        }}/>
        {/* <Drawer.Screen name="Setting" component={Setting}/> */}
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
  const user = auth.currentUser;
  const [userDoc, setUserDoc] = useState();
  const getUserDoc = () => {
    const q = query(collection(db, "users"), where("user", "==", user.uid))
    const unsubscribre = onSnapshot(q, (querySnapshot) => {
      const dc = [];
      querySnapshot.forEach((doc) => {
        dc.push(doc.data())
        console.log("les doccc", dc)
      });
      setUserDoc(dc[0])
    })
  }

  useEffect(() => {
    getUserDoc();
}, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home-G'>
        <Stack.Screen name="Home-G" component={DrawerNavigation} options={{ headerShown: false, }}/>
        <Stack.Screen name="Details" component={DetailView} options={{ headerShown: false, }}/>
        <Stack.Screen name="Reservation" component={Reservation} options={{ headerShown: false, }}/>
        <Stack.Screen name="Paiement" component={Paiement} options={{ headerShown: false, }}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }}/>
        <Stack.Screen name="Villes" component={Villes} options={{ headerShown: false, }}/>
        <Stack.Screen name="Communes" component={Communes} options={{ headerShown: false, }}/>
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false, }}/>
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
