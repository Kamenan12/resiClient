import { View, Text, StyleSheet, ScrollView } from "react-native";
import Entete from "./Entete";
import tw from "twrnc"
import TopResi from "./TopResi";
import TopVille from "./TopVille";
import TopCommune from "./TopCommune";
import AjoutRecent from "./AjoutRecent";



const HomeView= () => {
    return (
        <>
        <View style={tw`py-10 `}>
        
                <Entete />
             
            
            <ScrollView showsVerticalScrollIndicator={false} >
                
                <TopResi /> 
                <TopVille />
                <TopCommune />  
                <AjoutRecent />
             </ScrollView>
                       
            
        </View>
        </>
    )
}




export default HomeView;


const styles = StyleSheet.create({

})