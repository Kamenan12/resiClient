import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ChoixPaiement } from "../../Data/Paiement";
import { Icon } from "@rneui/themed";
import tw from "twrnc"




const Paiement = () => {
    return (
        <>
            <View style={tw`pt-10 items-center`}>
                <View style={tw`bg-white w-full py-3 justify-center mb-2 flex-row `}>
                <Icon type="antdesign" name="close" />
                    <Text style={[{fontSize: 20, fontWeight: "600"}]}> Choisir Mode de paiement</Text>
                </View>
                {
                    ChoixPaiement.map((p, index) => (
                        <ModePaiement methode={p} key={index} />
                    ))
                }
                {/* <View style={tw`bg-white py-3 w-86 h-20 justify-center mb-2 flex-row rounded-lg`}>
                    <Text style={[{fontSize: 20, fontWeight: "600"}]}> Orange Monnaie</Text>
                </View>
                <View style={tw`bg-white py-3 w-86 h-20 justify-center mb-2 flex-row rounded-lg`}>
                    <Text style={[{fontSize: 20, fontWeight: "600"}]}> Mtn Monnaie</Text>
                </View>
                <View style={tw`bg-white py-3 w-86 h-20 justify-center mb-2 flex-row rounded-lg`}>
                    <Text style={[{fontSize: 20, fontWeight: "600"}]}> Moov Flooz</Text>
                </View> */}
            </View>
        </>
    )
}


const ModePaiement = (props) => {
    const methode = props.methode
    return (
        <TouchableOpacity >
            <View style={tw`bg-white py-3 w-86 h-20 justify-between px-7 items-center mb-2 flex-row rounded-lg`}>
                <View>
                    <Image source={methode.logo} style={tw`w-15 h-15`}/>
                </View>
                <View>
                    <Text style={[{fontSize: 20, fontWeight: "600"}]}> {methode.nom}</Text>
                    <Text style={{color: "gray"}}> {methode.frais}%, Frais operateur</Text>
                </View>
                <View>
                    <Icon type="antdesign" name="rightcircleo" color="red"/>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default Paiement;



const style = StyleSheet.create({
    
})