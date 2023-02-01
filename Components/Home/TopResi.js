import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { db } from "../../firebase";
import { collection, onSnapshot, query, where,orderBy } from "firebase/firestore";



const TopResi = () => {

    const getFullResi = () => {

        let q = query(collection(db, "users"));

        const unUser = onSnapshot(q, (queryUser) => {
            const us = []
            queryUser.forEach((docUser) => {

                let r = query(collection(db, `users/${docUser.id}/residences`));
                const unResi = onSnapshot(r, (queryResi) => {
                    const re = []
                        queryResi.forEach((docResi) => {
                            re.push(docResi.id)
                        })
                    console.log("Les residence recuperer ",re)
                })
            })
        })

    }

    useEffect( () => {
        getFullResi();
    }, [])
    return (
        <View>
            <Text>
                ici top residences
            </Text>
        </View>
    )
}



export default TopResi ;


const styles = StyleSheet.create({

})