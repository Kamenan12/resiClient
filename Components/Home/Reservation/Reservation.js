import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import tw from "twrnc"
import { Button, Divider, Icon } from "@rneui/themed";

const Reservation = (props) => {
    const Resi = props.route.params.Resi
    const user = auth.currentUser;
    const Navigation = useNavigation();

    const jourSelction = props.route.params.Jour;
    const DebSejour = moment(jourSelction[0]).format("DD/MM/YYYY");
    const FinSejour = moment(jourSelction[jourSelction.length -1]).format("DD/MM/YYYY")
    const NbreJour = moment(jourSelction[jourSelction.length - 1]).diff(jourSelction[0], 'day');
    const CoutSejour = Resi.residence.Prix * NbreJour
    const FraisServie = (CoutSejour * 10)/100
    const Total = CoutSejour + FraisServie

    // console.log("poro", props.route.params.Jour)

    const Paiement = () => {
        user ? 
        (Navigation.navigate('SignIn'), console.log("USer ID doit de connecter"))
        : (Navigation.navigate('Paiement'), console.log("User est connecter"))
       
    }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             console.log("User connecter");
    //             console.log("ID user", user.uid)
    //             Navigation.navigate('SignIn')
    //         } else {
    //             console.log ("user non connecter")
    //         }
    //     })
    //     // const unsubscribe = auth.onAuthStateChanged(user => {
    //     //     if (user) {
    //     //         console.log("user ID", user.uid)
    //     //         navigation.navigate('SignIn')
    //     //     } 
    //     // })
    //     // return unsubscribe
    // })
    return (
        <>
        <ScrollView>
            <View style={tw`pt-10`}>
                <View style={tw`bg-white py-3 justify-center mb-2 flex-row`}>
                    <Icon type="antdesign" name="close" onPress={() => Navigation.goBack()}/>
                    <Text style={[{fontSize: 20, fontWeight: "600"}]} > Confirmatiom de Reservation</Text>
                </View>
                    {/* <Divider width={3} style={tw`bg-gray-100` }/> */}
                <View style={[tw`bg-white items-center mb-2 py-4`]}>
                    <View style={tw``}>
                        <Text style={[{fontSize: 18, fontWeight: "600"}]}>Residences </Text>
                    </View>
                    {/* <Divider  insetType="middle" width={1} color="red"/> */}
                    <View style={tw`mt-2`}>
                        
                        <Image source={{uri: Resi.residence.Images[0].url}} style={[tw`h-30 w-30 rounded-xl`]}/>
                        
                        <View>
                            <View style={tw`flex-row`}>
                                <Text style={{fontSize: 16, fontWeight:"500"}}> Adresse: </Text>
                                <Text>{Resi.residence.Location.description}</Text> 
                            </View>
                            <View style={tw`flex-row`}>
                                <Text style={{fontSize: 16, fontWeight:"500"}}> Ville: </Text> 
                                <Text >{Resi.residence.Location.ville}</Text> 
                            </View>
                            <View style={tw`flex-row`}>
                                <Text style={{fontSize: 16, fontWeight:"500"}}> Commune: </Text> 
                                <Text> {Resi.residence.Location.commune}</Text> 
                            </View>
                        <View style={tw`flex-row`}>
                            <Text style={{fontSize: 16, fontWeight:"500"}}> type:</Text>
                            <Text style={{fontSize: 18}}> {Resi.residence.Type_residence}</Text>
                        </View>
                        <View style={tw`flex-row`}>
                            <Text style={{fontSize: 16, fontWeight:"500"}}> Salon: </Text>
                            <Text>{Resi.residence.salon}</Text>
                        </View>
                        <View style={tw`flex-row`}>
                            <Text style={{fontSize: 16, fontWeight:"500"}}> Chambre: </Text>
                            <Text style={{}}>{Resi.residence.chambre}</Text>
                        </View>
                        <View style={tw`flex-row`}>
                            <Text style={{fontSize: 16, fontWeight:"500"}}> Bain </Text>
                            <Text style={{}}>{Resi.residence.bain}</Text>
                        </View>
                        </View>
                    </View>
                </View>
                    {/* <Divider width={3} style={tw`bg-gray-100` } /> */}
                <View style={[tw`bg-white items-center mb-2 `]}>
                    <View style={tw``}>
                        <Text style={[{fontSize: 18, fontWeight: "600"}]}> Votre séjour</Text>
                    </View>
                    <View style={tw`py-3`}>
                        <View style={tw`flex-row`}>
                            <View style={tw`border rounded-l p-5`}>
                                <Text style={{fontWeight: "600"}}>Debut de sejour </Text>
                                <Text> {DebSejour}</Text>
                            </View>
                            <View style={tw`border rounded-r p-5`}>
                                <Text style={{fontWeight: "600"}}>Fin de sejour </Text>
                                <Text> {FinSejour}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                    {/* <Divider width={3} style={tw`bg-gray-100` } /> */}
                <View style={[tw`bg-white mb-2 py-2`]}>
                    <View style={tw`items-center`}>
                        <Text style={[{fontSize: 18, fontWeight: "600"}]}> Details du Prix</Text>
                    </View>
                    <View>
                        <View style={tw`flex-row justify-between py-1 px-5`}>
                            <Text style={{fontSize: 15, fontWeight: "600"}}> Prix 24h(fcfa)</Text>
                            <Text style={{fontSize: 15, }}> {Resi.residence.Prix} </Text>
                        </View>
                        <View style={tw`flex-row justify-between py-1 px-5`}>
                            <Text style={{fontSize: 15, fontWeight: "600"}}> Nbre de jours</Text>
                            <Text style={{fontSize: 15, }}> {NbreJour} jour</Text>
                        </View>
                        <View style={tw`flex-row justify-between py-1 px-5`}>
                            <Text style={{fontSize: 15, fontWeight: "600"}}> Séjour(fcfa)</Text>
                            <Text style={{fontSize: 15, }}> {CoutSejour}  </Text>
                        </View>
                        <View style={tw`flex-row justify-between py-1 px-5`}>
                            <Text style={{fontSize: 15, fontWeight: "600"}}> Frais se services (10%)</Text>
                            <Text style={{fontSize: 15, }}> {FraisServie}  </Text>
                        </View>
                        <View style={tw`flex-row justify-between py-1 px-5`}>
                            <Text style={{fontSize: 15, fontWeight: "600"}}> Total(fcfa)</Text>
                            <Text style={{fontSize: 15, fontWeight: "500"}}> {Total} </Text>
                        </View>
                        
                    </View>
                </View>

                <View style={[tw`bg-white items-center mb-2 py-2`]}>
                    <View style={tw`w-80`}>
                        <Button title="Mode de paiement"
                        onPress={()=> Paiement()}
                        buttonStyle={[
                            tw`bg-red-500 rounded-lg`
                        ]}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        </>
    )
}




// const ImageReservation = () => {
//     return (

//     )
// }
export default Reservation;



const styles = StyleSheet.create({

})