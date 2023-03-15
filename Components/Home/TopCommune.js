import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import { Ville } from "../Data/Data";
import tw from "twrnc"
import { Icon } from "@rneui/themed";
import { color } from "@rneui/base";



const TopCommune = () => {
    return (
        <View style={tw``}>
            <View style={tw`flex-row p-2 justify-between`}>
                <Text style={{ fontSize: 15, fontWeight: "700"}}> top commune </Text>
                <Text>Tous </Text>
            </View >
            <View style={tw`flex-row`}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {
                    Ville.map((V, index) => (
                        V.Commune ? (
                            V.Commune.map ((C, index2) => (
                                <CommuneTop commune={C} Ville={V.nom} key={index2} kyey2={index}/>
                            ))
                        ) : null
                        
                    ))
                }
                </ScrollView>
            </View>
        </View>
    )
}




const CommuneTop = (props) => {
    const comm = props.commune
   const  Vil = props.Ville
    return (
        <View style={tw`m-2 bg-white shadow-lg rounded-3xl`}>
            
                <View style={tw`rounded-t-sm`}>
                    <Image source={comm.Image} style={[tw`rounded-t-3xl`,{ width: 130, height: 100}]} />
                </View>
                <View style={tw`px-2 pb-2`}>
                    <Text style={{fontWeight: "500", paddingLeft: 10, fontSize: 15}}>{comm.nom}</Text>
                    <View style={tw`flex-row items-center`}>
                        <Icon type="entypo" name="location-pin" color="red"/>
                        <Text style={{fontWeight: "400", color: "red"}}>{Vil}</Text>
                    </View>
                </View>
            
        </View>
    )
}


export default TopCommune ;



const styles = StyleSheet.create({

})