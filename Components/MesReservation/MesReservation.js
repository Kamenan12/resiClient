import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { QuerySnapshot, collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import tw from "twrnc"




const MesReservation = () => {
    const idUser = useSelector((state) => state.user.user)
    const [mesReser, setMesreser] = useState([])
    console.log("user", idUser)
    const getMesResidence = async() => {
        let q = query(collection(db, "reservations"), where("user", "==", idUser))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reser = [];
            querySnapshot.forEach((doc) => {
                // console.log("data", doc.data().userHote)
                // console.log("dat22", doc.data().idResidence)
                // let r = query(collection(db, `hotes/${doc.data().userHote}/residences/${doc.data().idResidence}`))
                // const subscribe = onSnapshot(r, (resi) => {
                //     reser.push({
                //         Reser: doc.data(),
                //         Resid: resi.data()
                //     })
                // })

                // setMesreser(reser)
            })
            // console.log("mesReservation", r)
        })
        
    }
    // const getResi = () => {
    //     let q = query(collection(db,"hotes/"))
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         let m =[]
    //         querySnapshot.forEach((doc) => {
    //             m.push(doc.data())
    //         })
    //         console.log("RRrrRRRR", m)
    //     })
    // }


    useEffect(()=> {
        // console.log("user efefefefe");
        getMesResidence()
        // getResi()
    }, [])

    return (
        <>
            <View style={tw`items-center justify-center h-full`}>
                <Text>ICICICI MES RESERVATION  {mesReser.length}</Text>
            </View>
        </>
    )
}


export default MesReservation;




const styles = StyleSheet.create({

})