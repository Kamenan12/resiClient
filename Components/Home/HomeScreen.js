import { View, Text, StyleSheet, ScrollView } from "react-native";
import Entete from "./Entete";
import tw from "twrnc"
import TopResi from "./TopResi";
import TopVille from "./TopVille";
import TopCommune from "./TopCommune";



const HomeScreen = () => {
    return (
        <>
        <View style={tw`py-10`}>
        
                <Entete />
             
            
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <TopResi /> 
                <TopVille />
                <TopCommune />  
           
             </ScrollView>
                       
            
        </View>
        </>
    )
}




export default HomeScreen ;


const styles = StyleSheet.create({

})