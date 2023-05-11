import { View, Text, StyleSheet } from "react-native";

import { QuerySnapshot, collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import tw from "twrnc"
import { useEffect } from "react";




const MesReservation = () => {
    const idUser = useSelector((state) => state.user.user)
    // console.log("user", idUser)
    const getMesResidence = async() => {
        let q = query(collection(db, "reservations"), where("user", "==", idUser))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const r = [];
            querySnapshot.forEach((doc) => {
                // console.log("data", doc.data())
                r.push(doc.data())
            })
            console.log("mesReservation", r)
        })
    }


    useEffect(()=> {
        // console.log("user efefefefe");
        getMesResidence()
    }, [])

    return (
        <>
            <View style={tw`items-center justify-center h-full`}>
                <Text>ICICICI MES RESERVATION </Text>
            </View>
        </>
    )
}


export default MesReservation;




const styles = StyleSheet.create({

})