import { View, Text, StyleSheet, ScrollView, Image} from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc"




const Communes = (props) => {
    const Navigation = useNavigation();
    
    const LaVille = props.route.params.laVille
    return (
        <View style={tw``}>
            <View style={tw`bg-red-400 h-35 items-center justify-center`}>
                <Text style={{fontSize: 40, fontWeight: "500"}}> {LaVille.nom} </Text>
                <Text > {LaVille.region} </Text>
            </View>

            <View style={tw`pt-2 items-center h-150`}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        LaVille.Commune ? (
                            LaVille.Commune.map((C, index) => (
                                <Comm commune={C} Ville={LaVille.nom} key={index} />
                            ))
                        ) : (
                            <View>
                                <Text> Commnue pas encore disponible</Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
            <View style={tw` absolute top-10 p-2`} >   
                <Icon name="arrow-left-circle" color="black" type="feather" size={32}  onPress={() => Navigation.goBack()}/>
            </View>
        </View>
    )
}



const Comm = (props) => {
    const comm = props.commune
   const  Vil = props.Ville


    return (
        <View style={tw`m-2 bg-white shadow-lg rounded-3xl w-50`}>
            
            <View style={tw`rounded-t-sm`}>
                <Image source={comm.Image} style={[tw`rounded-t-3xl`,{ width: 200, height: 130}]} />
            </View>
            <View style={tw`px-2 pb-2 items-center`}>
                <Text style={{fontWeight: "500", paddingLeft: 10, fontSize: 18}}>{comm.nom}</Text>
                <View style={tw`flex-row items-center`}>
                    <Icon type="entypo" name="location-pin" color="red"/>
                    <Text style={{fontWeight: "400", color: "red", fontSize: 16}}>{Vil}</Text>
                </View>
            </View>
    
        </View>
    )
}
export default Communes;



const styles = StyleSheet.create({

})