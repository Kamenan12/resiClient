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
// import { getAuth } from 'firebase/auth';
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
import NumPaiement from './Components/Home/Reservation/NumPaiement';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { useSelector, useDispatch } from 'react-redux';
import { getUSer } from './store/getUserSlice';



 
const HomeStack = createNativeStackNavigator()

  function HomeScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeView} options={{ headerShown: false, }}/>
      </HomeStack.Navigator>
    )
  }

  function LienDrawerContent (props) { 

    const UserNumero = useSelector((state) => state.user.numero)
    const dispatch = useDispatch()

    // const getUserDoc = async() => {
    //   if (user) {
    //     const q = query(collection(db, "users"), where("user", "==", user.uid));
    //     const unsubscribre = onSnapshot(q, (querySnapshot) => {
    //     const dc = [];
    //     querySnapshot.forEach((doc) => {
    //       dc.push(doc.data())
    //       console.log("les doccc", dc)
    //     });
    //     setUserDoc(dc[0])
    //   })
    //   } else {
    //     console.log("passs user")
    //   }
      
      
    // } 

    useEffect(() => { 
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            // console.log("user la", user.uid)
            const q = query(collection(db, "users"), where("user", "==", user.uid));
                const unsubscribre = onSnapshot(q, (querySnapshot) => {
                const dc = [];
                querySnapshot.forEach((doc) => {
                  console.log("isssDoc", doc.id)
                  dc.push({
                    id: doc.id,
                    data: doc.data()
                  })
                  // dc.push(doc.data())
                  // console.log("les doccc", dc)
                });
                // setUserDoc(dc[0])
                // console.log("DADA", dc[0].data.Numero)
                // console.log("IDD", dc[0].id)
                dispatch(getUSer({
                  idDoc: dc[0].id,
                  numero: dc[0].data.Numero,
                  nom: dc[0].data.nom,
                  prenom: dc[0].data.prenom,
                  user: dc[0].data.user
                  // value: dc[0]
                }))
              })
        }
    })
    // return unsubscribe
      // getUserDoc();
      // dispatch(getUSer())
  }, [])
  // console.log("propreParaRout", props.initialParams)
    return ( 
      <DrawerContentScrollView {...props} >     
      {
        UserNumero === "" ? (
          <> 
          {/* {console.log("UserSlice", UserSlice)} */}
          <DrawerItem label={() => <Text style={{fontSize: 20, fontWeight: "500" }}> INSCRIPTION/CONNEXION</Text>}  
          onPress={() => props.navigation.navigate("SignIn")} 
          icon={() => <Icon name='user' type='evilicon' color="black" size={50} />} /> 
          <DrawerItem label="Pappa" onPress={() => alert('Link papapa')} />
          <DrawerItem label={() => <Text style={{fontSize: 20, fontWeight: "500" }}> INFORMATION</Text>} onPress={() => alert('Link  rrrr')} />
          <DrawerItem label={() => <Text style={{fontSize: 19, fontWeight: "500" }}> {UserNumero}</Text>}  />

         </> 
            )
            :
            ( 
              <>      
              <DrawerItem label={() => <Text style={{fontSize: 19, fontWeight: "500" }}> MON PROFIL</Text>}
              onPress={() => props.navigation.navigate("Setting")} 
              // style={{ borderBottomWidth: 1, borderBottomColor: "gray", backgroundColor: "white"}} 
              // labelStyle={{ fontSize: 18, fontWeight: "800", fontFamily: "serif"}}
              // icon={() => <Icon name='user' type='evilicon' color="black" size={50} />}
              />
              {/* <DrawerItem label="Pappa" onPress={() => alert('Link papapa')} /> */}
              <DrawerItem label={() => <Text style={{fontSize: 19, fontWeight: "500" }}> MES FAVORIES</Text>} onPress={() => alert('MES fAVORIE')} />
              <DrawerItem label={() => <Text style={{fontSize: 19, fontWeight: "500" }}> MES RESERVATION</Text>} onPress={() => alert('MES RESERVATION')} />
              <DrawerItem label={() => <Text style={{fontSize: 19, fontWeight: "500" }}> MES BONUS</Text>} onPress={() => alert('MES BONUS')} />
              <DrawerItem label={() => <Text style={{fontSize: 19, fontWeight: "500" }}> {UserNumero}</Text>}  />
            </>
         ) 
       }
        {/* <DrawerItem label={userDoc ? userDoc.nom : "setiing"} 
        onPress={() => props.navigation.navigate("Setting")} 
        style={{ borderBottomWidth: 1, borderBottomColor: "gray", backgroundColor: "white"}} 
        labelStyle={{ fontSize: 18, fontWeight: "800", fontFamily: "serif"}}
        icon={() => <Icon name='user' type='evilicon' color="black" size={50} />} /> */}
        {/* <DrawerItem label="Pappa" onPress={() => alert('Link papapa')} /> */}
        {/* <DrawerItem label="rrrrr" onPress={() => alert('Link  rrrr')} /> */}
      </DrawerContentScrollView>
    )
  }



const Drawer = createDrawerNavigator();
function DrawerNavigation(props){
  // console.log("drawerPRPRP", props.route.params)
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
  // const [userDoc, setUserDoc] = useState([]);

  // const getUserDoc = () => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //         // console.log("user la", user.uid)
  //         const q = query(collection(db, "users"), where("user", "==", user.uid));
  //             const unsubscribre = onSnapshot(q, (querySnapshot) => {
  //             const dc = [];
  //             querySnapshot.forEach((doc) => {
  //               dc.push(doc.data())
  //               console.log("les doccceee", dc)
  //             });
  //             setUserDoc(dc[0])
  //           })
  //     }
  // }) 
  // return unsubscribe
  // }

  // useEffect(() => {

     
  //     getUserDoc();
  // }, userDoc)

  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home-G'>
          <Stack.Screen name="Home-G" component={DrawerNavigation} options={{ headerShown: false, }} />
          <Stack.Screen name="Details" component={DetailView} options={{ headerShown: false, }}/>
          <Stack.Screen name="Reservation" component={Reservation} options={{ headerShown: false, }}/>
          <Stack.Screen name="Paiement" component={Paiement} options={{ headerShown: false, }}/>
          <Stack.Screen name="NumPaiement" component={NumPaiement} options={{ headerShown: false, }}/>
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
    </Provider>
     
  );
}

const styles = StyleSheet.create({
 
});
