import { View, Text, StyleSheet } from "react-native";
import Entete from "./Entete";
import tw from "twrnc"
import TopResi from "./TopResi";
import TopVille from "./TopVille";



const HomeScreen = () => {
    return (
        <>
        <View style={tw`py-10 `}>

            <Entete />

            <TopResi /> 
            <TopVille />
        </View>
        </>
    )
}




export default HomeScreen ;


const styles = StyleSheet.create({

})