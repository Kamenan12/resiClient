import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "@rneui/themed";
import tw from "twrnc"





const NumPaiement = (props) => {
    const methode = props.route.params.methode
    return (
        <>
            <View style={tw`pt-10 items-center`}>
            <Image source={methode.logo} style={tw`w-30 h-30`} />
            <Text style={{fontSize: 20, fontWeight: "400"}}>{methode.nom}</Text>
            </View>
        </>
    )   
}




export default NumPaiement;



const styles = StyleSheet.create({

})