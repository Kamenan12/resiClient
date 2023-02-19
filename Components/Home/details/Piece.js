import { View, Text, StyleSheet } from "react-native";


import tw from "twrnc"





const Piece = (props) => {
    return (
        <View style={tw`flex-row justify-between px-2 pt-6`}>
            <View style={tw`items-center`}>
                <Text style={{fontWeight: "500", color: "gray", fontSize: 16}}> Type</Text>
                <Text> {props.Type}</Text>
            </View>
            <View style={tw`items-center`}>
                <Text style={{fontWeight: "500", color: "gray", fontSize: 16}}>Chambre</Text>
                <Text>{props.Chambre}</Text>
            </View>
            <View style={tw`items-center`}>
                <Text style={{fontWeight: "500", color: "gray", fontSize: 16}}>salons</Text>
                <Text>{props.Salon}</Text>
            </View>
            <View style={tw`items-center`}>
                <Text style={{fontWeight: "500", color: "gray", fontSize: 16}}>Bains</Text>
                <Text>{props.Bain}</Text>
            </View>
        </View>
    )
}


export default Piece ;



const styles = StyleSheet.create({

})