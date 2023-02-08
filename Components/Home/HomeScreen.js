import { View, Text, StyleSheet } from "react-native";
import Entete from "./Entete";
import tw from "twrnc"
import TopResi from "./TopResi";



const HomeScreen = () => {
    return (
        <>
        <View style={tw`py-10 `}>

            <Entete />
            <TopResi /> 
        </View>
        </>
    )
}




export default HomeScreen ;


const styles = StyleSheet.create({

})