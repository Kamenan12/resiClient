import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";


import tw from "twrnc"

const Info = (props) => {
    return (
        <View style={tw`px-3`}>
            <View style={tw`flex-row justify-between`}>
                        <Text style={[{ fontSize: 33, fontWeight: "700", fontFamily: "serif"}]}>{props.Titre} </Text>
            </View>
                
            <View style={tw`flex-row`}>
                <Icon  name="location-pin" color="black" type="entypo" size={25}/> 
                <Text style={[{fontSize: 15, fontWeight: '500'}]}> {props.Localite.description}</Text>
            </View>

            <View style={tw`flex-row`}>
                
                <View style={tw`flex-row`}>
                    <Icon  name="location" color="black" type="entypo" size={25}/>
                    <Text style= {[{fontSize: 17, fontWeight: "600", fontFamily:"sans-serif", color: "black"}]}> {props.Localite.ville}</Text>
                </View>
                <View style={tw`flex-row`}>
                            
                    <Text style= {[{fontSize: 17, fontWeight: "600", fontFamily:"sans-serif", color: "black"}]}> {props.Localite.commune}</Text>
                    {/* <Text style={[{color:"gray"}]}> un bon quatier près</Text> */}
                </View>
                
            </View>

            <View style={tw`pt-10`}>
                <Text style={[tw``, {fontSize: 15, fontWeight: "500", color: "gray"}]}>
                    {props.Description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum consequuntur a 
                    illo repellendus accusamus repellat in voluptatem, totam sit quaerat, sed pariatur quidem ipsum natus et
                    obcaecati? Assumenda, officia?
                </Text>
            </View>
        </View>
    )
}



export default Info;



const styles = StyleSheet.create({

})