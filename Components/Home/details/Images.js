import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";


import tw from "twrnc"

const Images = (props) => {

    const navigation = useNavigation();

     
    
    return (
        <View style={tw`pb-12`}>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={tw`h-100 shadow-2xl`}>
                <View style={ tw`bg-white h-full `}>
                    <View style={ tw`flex-row`}>
                        {
                            props.img.map((img, index) => (
                                <Image source={{uri: img.url}} style={[tw`h-100 w-93`]} key={index}/>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={tw` absolute top-10 p-2`} >   
                <Icon  name="arrow-left-circle" color="red" type="feather" size={32} onPress={() => navigation.goBack()} />
            </View>
            
        </View>
    )
}





export default Images;




const styles = StyleSheet.create({
    
})