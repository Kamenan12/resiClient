import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { db } from "../../firebase";
import { collection, onSnapshot, query, where,orderBy } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "@rneui/themed";
import { Skeleton } from '@rneui/themed'
import tw from 'twrnc'
import Details from "./details/DetailView";


const TopResi = () => {

    const Navigation = useNavigation();

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
        // console.log("fuuuuiii", fullResi)
    }

    const details = (residen) => {
        Navigation.navigate('Details', {
            residence: residen
        })
    }
 




    useEffect( () => {
        getFullResi()
    }, []) 
        // console.log("fulll 33", fullResi)
    return (
        <View style={tw`px-3`}>
            <View style={tw`flex-row justify-between`}>
                <Text style={{ fontSize: 15, fontWeight: "700"}}>Top Residences</Text>
                <Text>Tous</Text>
            </View>
            <View style={tw`flex-row h-80 py-2`}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {fullResi.length == 0 ? 
                    (<Skel />) : 
                    (
                        fullResi.map((R, index) => (
                            R.map( (resi, index2) => (
                                <ResiTop resi={resi} key={index2} details={details} key2={index}/>
                            ))
    
                        ))
                    )
                        
                    }
                </ScrollView>
                {/* <Text>{fullResi.length}</Text> */}
                {/* <Skel /> */}
            </View>
        </View>
    )
}

const Skel = () => {

    return (
        <>
            <View style={tw`rounded-3xl shadow-lg bg-white mx-2`}>
                    
                    <Skeleton width={260} height={210} style={tw`rounded-t-3xl`} />
                    
                    <View style={tw`px-3 pt-2`}>
                    
                        <View style={tw`flex-row justify-between`}>
                            <View>
                                
                                <Skeleton height={15} width={150} />
                            </View>
                            <View style={tw`flex-row`}>
                                
                                <Skeleton width={50} height={15} />
                                
                            </View>
                        </View>
                        <View style={tw`flex-row pt-2`}>
                            <Skeleton width={170} height={15} />
                            
                            
                        </View>
                        
                        
                        <View style={tw`flex-row pt-2`}>
                            
                            <View style={tw`flex-row items-center`}>
                                <Skeleton circle height={30} width={30} />
                                <Skeleton circle height={30} width={30} />
                                <Skeleton circle height={30} width={30} />

                            </View>
                        </View>
                    </View>
            </View>
            <View style={tw`rounded-3xl shadow-lg bg-white`}>
                    
                    <Skeleton width={260} height={210} style={tw`rounded-t-3xl`} />
                    
                    <View style={tw`px-3 pt-2`}>
                    
                        <View style={tw`flex-row justify-between`}>
                            <View>
                                
                                <Skeleton height={15} width={150} />
                            </View>
                            <View style={tw`flex-row`}>
                                
                                <Skeleton width={50} height={15} />
                                
                            </View>
                        </View>
                        <View style={tw`flex-row pt-2`}>
                            <Skeleton width={170} height={15} />
                            
                            
                        </View>
                        
                        
                        <View style={tw`flex-row pt-2`}>
                            
                            <View style={tw`flex-row items-center`}>
                                <Skeleton circle height={30} width={30} />
                                <Skeleton circle height={30} width={30} />
                                <Skeleton circle height={30} width={30} />

                            </View>
                        </View>
                    </View>
            </View>
        </>
    )
}

const ResiTop = (props) => {
        
    const residen = props.resi

    // console.log("resii", residen.Images)

    return(
        <TouchableOpacity style={tw`px-2`} activeOpacity={0.8} onPress={() => props.details(residen)}>
            
                <View style={tw`rounded-3xl shadow-lg bg-white`}>
                    <Image source={{uri: residen.Images[0].url}} style={[{width:260, height: 210}, tw`rounded-t-3xl`]}   />
                    <View style={tw`absolute ml-42 mt-43 bg-white rounded-lg p-1`}>
                        <Text style={{ color: "red", fontWeight: "500"}}>{residen.Prix} fcfa</Text>
                    </View>
                    <View style={tw`px-3 pt-2`}>
                    
                        <View style={tw`flex-row justify-between`}>
                            <View>
                                <Text style={[{fontWeight: "800"}]}>{residen.Titre}</Text>
                            </View>
                            <View style={tw`flex-row`}>
                                <Icon type="antdesign" name="star" size={17}/> 
                                <Text> 4.5</Text>
                            </View>
                        </View>
                        <View style={tw`flex-row`}>
                            {
                                residen.Type_residence === "villa" ? 
                                <View style={tw`flex-row`}> 
                                    {/* <Icon type="ionicon" name="md-home" size={20} color="red"/> */}
                                    <Text style={{ fontWeight: "600"}}> {residen.Type_residence}, </Text>
                                </View>  : nulll
                            }
                            <View>
                                <Text style={{fontWeight: "600"}}>{residen.Location.ville},</Text>
                            </View>
                            <View style={tw`px-2`}>
                                <Text style={{fontWeight: "600"}}>{residen.Location.commune}</Text>
                            </View>
                        </View>
                        <View style={tw`flex-row`}>
                            
                        </View>
                        
                        <View style={tw`flex-row`}>
                            <View style={tw`flex-row items-center px-1`}>
                                <Icon type="ionicon" name="bed" size={25} color="red"/> 
                                <Text style={{fontSize: 20, paddingHorizontal: 4, }}>{residen.chambre}</Text>
                                <Text style={{ fontSize: 10, paddingHorizontal: 1, }}>Chambres</Text>
                            </View>
                            <View style={tw`flex-row items-center`}>
                                <Icon type="material-community" name="sofa" size={25} color="red"/> 
                                <Text style={{fontSize: 20, paddingHorizontal: 4, }}>{residen.salon}</Text>
                                <Text style={{ fontSize: 10, paddingHorizontal: 1, }}>Salons</Text>

                            </View>
                        </View>
                    </View>
                </View>
            
        </TouchableOpacity>
    )
}


export default TopResi ;


const styles = StyleSheet.create({

})