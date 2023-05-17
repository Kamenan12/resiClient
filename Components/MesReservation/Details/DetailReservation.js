import { View, Text, StyleSheet, ScrollView,  } from "react-native";
import { useNavigation } from "@react-navigation/native";


import tw from "twrnc"
import Images from "./Images";
import Info from "./Info";
import InfoSejour from "./InfoSejour";
import Map from "./Map";

const DetailReservation = (props) => {

    const Detail = props.route.params;
    

    console.log("deee", Detail)

    return (
        <>
            <ScrollView  style={tw`bg-white`}>
                <Images img={Detail.resi.Images}/>
                <View style={tw`px-3`}>
                    <Info Titre={Detail.resi.Titre} Localite={Detail.resi.Location}/>
                    <InfoSejour Sejour={Detail.infoReser} />
                    <Map />
                </View>
            </ScrollView>
        </>
    )
}



export default DetailReservation;



const styles = StyleSheet.create({

})