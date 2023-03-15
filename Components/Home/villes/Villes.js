import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ville } from "../../Data/Data";
import { Icon } from "@rneui/themed";
import tw from "twrnc"
 




const Villes = () => {
    const Navigation = useNavigation()



    return (
        <View style={tw``}>
            <View style={tw`bg-red-400 h-35 items-center justify-center`}>
                <Text style={{fontSize: 40, fontWeight: "500"}}> Villes</Text>
            </View>
            <View style={tw`pt-2 items-center`}>
                <ScrollView >
                    {
                        Ville.map( (V, index) => (
                            <Vil ville={V} index={index}/>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={tw` absolute top-10 p-2`} >   
                <Icon name="arrow-left-circle" color="black" type="feather" size={32}  onPress={() => Navigation.goBack()}/>
            </View>
        </View>
    )
}




const Vil = (props) => {

    const Navigation = useNavigation();

    const ClickVille = (V) => {
        Navigation.navigate('Communes', {
            laVille: V
        })
    } 

    const V = props.ville
    return (
        <TouchableOpacity onPress={() => ClickVille(V)}>
            <View style={tw`px-2 py-2`}>
                <View style={tw`flex-row p-2  bg-white rounded-lg shadow-lg`}>
                    <View style={tw`p-1 bg-gray-300 rounded-lg`}>
                        <Image source={V.Image} style={{ width: 50, height: 50}}/>
                    </View>
                    <View style={tw`justify-center px-5`}>
                    <Text style={{fontWeight: "500", fontSize: 25}}>{V.nom}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Villes;


const styles = StyleSheet.create({

})