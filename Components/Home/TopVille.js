import { View, Text, StyleSheet, Image } from "react-native";
import { Ville } from "../Data/Ville";

import tw from "twrnc"
import { ScrollView } from "react-native";




const TopVille = () => {


    return (
        <View style={tw`px-2`}>
            <View style={tw`flex-row justify-between`}>
                <Text style={{ fontSize: 15, fontWeight: "700"}}> Top Villes</Text>
                <Text> Tous </Text>
            </View>

            <View style={tw`flex-row `}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {
                    Ville.map( (V, index) => (
                        <VilleTop ville={V} index={index}/>
                    ))
                }
                </ScrollView>
            </View>
        </View>
    )
}






const VilleTop = (props) => {
    const V = props.ville
    return (
        <View style={tw`px-2 py-2`}>
            <View style={tw`flex-row p-2  bg-white rounded-lg shadow-lg`}>
                <View style={tw`p-1 bg-gray-300 rounded-lg`}>
                    <Image source={V.Image} style={{ width: 30, height: 30}}/>
                </View>
                <View style={tw`justify-center px-1`}>
                 <Text style={{fontWeight: "500", fontSize: 15}}>{V.nom}</Text>
                </View>
            </View>
            </View>
    )
}



export default TopVille; 



const styles = StyleSheet.create({

})