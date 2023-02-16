import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { db } from "../../firebase";
import { collection, onSnapshot, query, where,orderBy } from "firebase/firestore";
import { Icon } from "@rneui/themed";
import tw from 'twrnc'

const AjoutRecent = () => {

    const [RecentResi, setRecentResi] = useState([]);

    const getRecentResi = async() => {

        let q = query(collection(db, "users"));

        const unUser = onSnapshot(q, (queryUser) => {
            let rss = []
            const usR = []
                queryUser.forEach((docUser) => {
                    
                    let r = query(collection(db, `users/${docUser.id}/residences`));
                    const unResi = onSnapshot(r, (queryResi) => {
                        const data = []
                            queryResi.forEach((docResi) => {
                                data.push(docResi.data())
                            })
                        // console.log("Les11 residence recuperer ", re);  
                        // setRecentResi(...RecentResi ,re);
                        // console.log("dans re", RecentResi)
                        if (data.length !== 0){
                            rss = [...rss, data]
                        }
                        // console.log("xxx11", rss)
                        setRecentResi(rss)
                    })
                    // console.log("uuussRR", usR)
                    // console.log("avant x", x)
                    // x = x + 1;
                    // console.log("DAans UsR", RecentResi)
                   
                })
            //  console.log("uree222", usR)
            // console.log("x", x)
        })
        console.log("fuuuuiii", RecentResi)
    }

    useEffect( () => {
        getRecentResi()
    }, []) 
        // console.log("fulll 33", RecentResi)


    return(
        <View style={tw`pb-20`}>
            <View>
                <Text> Ajout recent</Text>
            </View>
            <View style={tw`px-3`}>

            {
                        RecentResi.map((R, index) => (
                            R.map( (resi, index2) => (
                                // console.log("RRRR", resi)
                                <RecentAjout resi={resi} key={index2} />
                            ))

                        ))
                    }
            </View>
        </View>
    )
}




const RecentAjout = (props) => {

    const residen = props.resi

    return  (
        <View style={tw`flex-row bg-white  my-4 shadow-xl rounded-2xl`}>
            <View>
                <Image source={{ uri: residen.Images[0].url}} style={[tw`rounded-l-2xl`, {width: 120, height: 150}]} />
            </View>
            <View style={tw`p-2`}>
                <View>
                    <Text style={{fontSize: 17, fontWeight: "500"}}> {residen.Titre}</Text>
                </View>
                <View style={tw`flex-row py-2`}>
                    <Icon type="entypo" name="location-pin" color="gray"/> 
                    <Text style={{color: "gray", fontSize: 18}}>{residen.Location.commune}</Text>
                </View>
                <View style={tw`py-1`}>
                    <Text style={{color: "red", fontWeight: "700",}}>{residen.Prix} Fcfa/ 24H </Text>
                </View>
                <View style={tw`flex-row`}>
                    {
                        residen.Equipement_bases.map((equip, index) => (
                            // <Text key={index}> {equip}</Text>
                            <View key={index} style={tw` flex-row`}>
                            { equip === "Wifi" ? 
                            <Icon  name="wifi" color="red" type="materiallcons" size={30}/> : <Text></Text>
                            }
                            
                            {equip === "Televison" ?
                                <Icon  name="tv-outline" type="ionicon" color="red" size={30} style={tw`px-2`}/> : <Text></Text>
                            }
                            {equip === "Refrigerateur" ?
                                <Icon  name="fridge-alert-outline" type="material-community" color="red" size={30} style={tw`px-2`}/> : <Text></Text>
                            }
                            {equip === "Climatiseur" ?
                                <Icon  name="pool" type="materiallcons" size={30} color="red" style={tw`px-2`}/> : <Text></Text>
                            }
                        </View>
                        ))
                    }
                </View>
            </View>
            <View style={tw`justify-center `}>
                <View style={[tw`bg-red-500 h-13 w-35  rounded-2xl px-5 py-1`, { marginLeft: -45, transform: [{rotate: "-90deg"}] } ]}>
                    <Text style={[tw``, { color: "white", fontSize: 27, }]}>details</Text>
                </View>
            </View>
        </View>
    )
}

export default AjoutRecent;




const styles = StyleSheet.create({

})