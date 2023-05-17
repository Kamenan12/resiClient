import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { QuerySnapshot, collection, getDoc, onSnapshot, query, where, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import tw from "twrnc"




const MesReservation = () => {
    const idUser = useSelector((state) => state.user.user)
    const [mesReser, setMesreser] = useState([])
    const navigation = useNavigation()
    console.log("user", idUser)


    const getMesResidence = async() => {
        let q = query(collection(db, "reservations"), where("userClient", "==", idUser))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let rss = [];
            querySnapshot.forEach(async(docReser) => {
                // console.log("Reser", docReser.data().idResidence)
                // console.log("dat22", doc.data().idResidence)
                const rs = []
                let r = doc(db, `residences`, `${docReser.data().idResidence}`);
                const resi = await getDoc(r)
                if (resi.exists()){
                    // console.log("resiReser", resi.data())

                    let h = doc(db,`hotes`, `${resi.data().idDocHote}`)
                    const hote = await getDoc(h)
                    if (hote.exists()){
                        // console.log("HoteInfo",hote.data()) 
                        rs.push({
                            idReservation: docReser.id,
                            Reservation: docReser.data(),
                            residence: resi.data(),
                            hote: hote.data()
                        })
                    }
                    // console.log("RS", rs)
                    rss = [...rss, rs] 
                }
                // const subscribe = onSnapshot(r, (resi) => {
                //     reser.push({
                //         Reser: doc.data(),
                //         Resid: resi.data()
                //     })
                // })
                console.log("REerrr",rss )
                

                setMesreser(rss)
            })
            // console.log("mesReservation", r)
        })
        
    }
    

    const DetailMesreservation = (id, infoReser, resi, hote) => {
        navigation.navigate("DetailReservation",{
            id: id,
            infoReser: infoReser,
            resi: resi,
            hote: hote
        })
    }
   

    useEffect(()=> {
        // console.log("user efefefefe");
        getMesResidence()
        // getResi()
    }, [])

    return (
        <>
            <View style={tw`pt-17 h-full`}>

                {
                    mesReser.map((R, index1) => (
                        R.map((rese, index2) => (
                            // <Text>1111</Text>
                            <Reservation id={rese.idReservation} data={rese.Reservation} resi={rese.residence} hote={rese.hote} details={DetailMesreservation} key={index2}/>
                        ))
                    ))
                }
                {/* <Text>ICICICI MES RESERVATION  {mesReser.length}</Text> */}
            </View>
        </>
    )
}



const Reservation = (props) => {
    

    const id = props.id
    const infoReser = props.data 
    const resi = props.resi
    const hote = props.hote
    // console.log("ttttt", resi)
    return (
        <TouchableOpacity onPress={() => props.details(id, infoReser,resi, hote)}>
            <View style={tw`flex-row p-4 border-b border-gray-300 `}>
                <View>
                    <Image source={{uri: resi.Images[0].url}} style={[tw`rounded-lg`,{ width: 80, height: 80}]}/>
                </View>
                <View style={tw`px-2`}>
                    <Text style={[{fontWeight: "500", fontSize: 22}]}>{resi.Titre}</Text>
                    <Text>Debut : {infoReser.debutSejour}</Text>
                    <Text>Fin : {infoReser.finSejour}</Text>
                </View>
                <View style={tw`pt-10 `}>
                    <View style={tw`bg-yellow-500 p-2 rounded-full`}>

                        <Text>en cours</Text>
                    </View>
                </View>
                <View>
                    <View style={tw`pt-5 pl-5`}>
                        <Icon type="antdesign" name="right"/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}



export default MesReservation;




const styles = StyleSheet.create({

})