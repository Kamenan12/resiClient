import { View, Text, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import tw from "twrnc"


const InfoSejour = (props) => {
    return (
        <>
            <View style={tw`flex-row justify-between px-10 py-2`}>
                <View>
                    <Text style={{fontWeight: "500", fontSize: 17}}>Debut de sejour</Text>
                    <Text>{props.Sejour.debutSejour}</Text>
                </View>
                <View>
                    <Text style={{fontWeight: "500", fontSize: 17}}>fin de sejou</Text>
                    <Text>{props.Sejour.finSejour}</Text>
                </View>
            </View>
            <Divider />
            <View style={tw` w-full px-5`}>
                <View style={tw`items-center`}>
                    <Text>Les details  </Text>
                </View>
                
                <View style={tw`flex-row justify-between`}>
                    <Text style={{fontSize: 17, fontWeight: "600"}}>Cout de 24H</Text>
                    <Text style={{fontSize: 17}}>{props.Sejour.prix24h}</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={{fontSize: 17, fontWeight: "600"}}>Nombre de jour</Text>
                    <Text style={{fontSize: 17}}>{props.Sejour.nombreDeJour}</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={{fontSize: 17, fontWeight: "600"}}>Cout de sejour</Text>
                    <Text style={{fontSize: 17}}>{props.Sejour.coutSejour}</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={{fontSize: 17, fontWeight: "600"}}>frais (10%)</Text>
                    <Text style={{fontSize: 17}}>{props.Sejour.frais}</Text>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={{fontSize: 17, fontWeight: "600"}}>Cout Total</Text>
                    <Text style={{fontSize: 17}}>{props.Sejour.totalAPaye}</Text>
                </View>
                <Divider />
            </View>
        </>
        
    )
}


export default InfoSejour;




const styles = StyleSheet.create({

})