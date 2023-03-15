import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import Entete from "./Entete";
import tw from "twrnc"
import TopResi from "./TopResi";
import TopVille from "./TopVille";
import TopCommune from "./TopCommune";
import AjoutRecent from "./AjoutRecent";
import Menu from './Memu';



const HomeView= () => {
    const navigation = useNavigation();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             // console.log("user ID", user.uid)
    //             // navigation.navigate('SignIn')
    //         } 
    //     })
    //     return unsubscribe
    // })

    return (
        <>
        <View style={tw`py-10 `}>
        
                {/* <Menu /> */}
            
                <Entete />
            <ScrollView showsVerticalScrollIndicator={false} >
                
                <TopResi /> 
                <TopVille />
                <TopCommune />  
                <AjoutRecent />
             </ScrollView>
                       
            
        </View>
        </>
    )
}




export default HomeView;


const styles = StyleSheet.create({

})