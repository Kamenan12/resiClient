import { View, Text, StyleSheet } from "react-native";
import { Icon, Divider } from "@rneui/themed";
import tw from "twrnc"

const Info = (props) => {
    return (
        <View style={tw`p-3`}>
            <View style={tw`flex-row justify-between`}>
                        <Text style={[{ fontSize: 28, fontWeight: "700", fontFamily: "serif"}]}>{props.Titre} </Text>
            </View>
                
            <View style={tw`flex-row`}>
                <Icon  name="location-pin" color="black" type="entypo" size={20}/> 
                <Text style={[{fontSize: 15, }]}> {props.Localite.description}</Text>
            </View>

            

            <Divider style={tw`pt-4`} />
        </View>
    )
}



export default Info;


const styles = StyleSheet.create({

})