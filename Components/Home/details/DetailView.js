
import { View, Text, StyleSheet, ScrollView  } from "react-native";
import Images from "./Images";

import tw from "twrnc"
import Info from "./Info";
import Piece from "./Piece";
import Equipement from "./Equipement";







const DetailView = (props) => {
    console.log("detail", props.route.params)
    const Detail = props.route.params;
    return (
        <>
            <ScrollView style={tw`bg-white`}>
                <Images img={Detail.residence.Images}/>
                <Info Titre={Detail.residence.Titre} Description={Detail.residence.Description} Localite={Detail.residence.Location}/>
                <Piece Chambre={Detail.residence.chambre} Salon={Detail.residence.salon} Type={Detail.residence.Type_residence} Bain={Detail.residence.bain}/>
                <Equipement EquiBase={Detail.residence.Equipement_bases} EquiExtra={Detail.residence.Equipement_extra} />
            </ScrollView>
        </>
    )
}



export default DetailView;




const styles = StyleSheet.create({
    
})