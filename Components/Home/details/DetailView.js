import  React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView  } from "react-native";
import Images from "./Images";
import moment from "moment";
import 'moment/locale/fr'
import tw from "twrnc"
import Info from "./Info";
import Piece from "./Piece";
import Equipement from "./Equipement";
import Calendrier from "./Calendrier";
import { Icon, Button } from "@rneui/themed";






const DetailView = (props) => {
    const [jourSelection, setJourSelection] = useState([])
    // console.log("detail", props.route.params)
    const Detail = props.route.params;
    const deb = moment(jourSelection[0]).format("DD MMMM")
    const fin = moment(jourSelection[jourSelection.length - 1]).format("DD MMMM")
    // const jourSelectionee = (jour) => {
    //     setJourSelection(jour)
    // }
    // useEffect(() => (
    //     setJourSelection
    // ), [])
    console.log("selection", jourSelection)
    return (
        <>
            <ScrollView style={tw`bg-white`}>
                <Images img={Detail.residence.Images}/>
                <Info Titre={Detail.residence.Titre} Description={Detail.residence.Description} Localite={Detail.residence.Location}/>
                <Piece Chambre={Detail.residence.chambre} Salon={Detail.residence.salon} Type={Detail.residence.Type_residence} Bain={Detail.residence.bain}/>
                <Equipement EquiBase={Detail.residence.Equipement_bases} EquiExtra={Detail.residence.Equipement_extra} />
                <Calendrier Calendrier={Detail.residence.Calendrier} JourSelection={setJourSelection}/>
            </ScrollView>
                <View style={tw`h-20 bg-white fixed border-t-2 border-gray-200 p-3`}>
                    <View style={tw`flex-row justify-between`}>
                        <View>
                            <Text>jours de seclectionnes</Text>
                            
                                <Text style={{fontWeight: "600", fontSize: 17}}>{deb} - {fin} </Text> 

                            {/* <Text> {jourSelection.length}</Text> */}
                        </View>
                        <View style={tw`w-30`}>
                            <Button title="Réserer"
                            buttonStyle={[tw`bg-red-500`]}
                            containerStyle={[tw`rounded-lg`]}
                            />
                        </View>
                    </View>
                </View>

        </>
    )
}



export default DetailView;




const styles = StyleSheet.create({
    
})