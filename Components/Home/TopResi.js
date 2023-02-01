import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { db } from "../../firebase";
import { collection, onSnapshot, query, where,orderBy } from "firebase/firestore";

import tw from 'twrnc'


const TopResi = () => {

    const [fullResi, setFullResi] = useState([]);

    const getFullResi = async() => {

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
                        // setFullResi(...fullResi ,re);
                        // console.log("dans re", fullResi)
                        if (data.length !== 0){
                            rss = [...rss, data]
                        }
                        // console.log("xxx11", rss)
                        setFullResi(rss)
                    })
                    // console.log("uuussRR", usR)
                    // console.log("avant x", x)
                    // x = x + 1;
                    // console.log("DAans UsR", fullResi)
                   
                })
            //  console.log("uree222", usR)
            // console.log("x", x)
        })

    }

    useEffect( () => {
        getFullResi()
    }, []) 
        console.log("fulll 111", fullResi)
    return (
        <View>
            <View>
                {/* {
                    fullResi.map((R, index) => (
                        R.data.map( (resi, index2) => (
                            <ResiTop resi={resi} key={index2}/>
                        ))

                    ))
                } */}
                <Text>{fullResi.length}</Text>
            </View>
        </View>
    )
}


const ResiTop = (props) => {
        
    const residen = props.resi

    // console.log("resii", residen.Images)

    return(
        <View >
            <View >
                <Text>111ffff1</Text>
            </View>
        </View>
    )
}


export default TopResi ;


const styles = StyleSheet.create({

})