import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './Components/Home/HomeViews';
import DetailView from './Components/Home/details/DetailView';


// function HomeScreen () {
//   return (

//   )
// }



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false, }}/>
        <Stack.Screen name="Details" component={DetailView} options={{ headerShown: false, }}/>
      </Stack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
 
});
