import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import tw from 'twrnc'


const Images = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={tw` shadow-2xl`}>
                <View style={ tw`bg-white h-full pt-10`}>
                    <View style={ tw`flex-row`}>
                        {
                            props.img.map((img, index) => (
                                <Image source={{uri: img.url}} style={[tw`h-80 w-50`]} key={index}/>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={tw` absolute top-13 p-2`} >   
                <Icon  name="arrow-left-circle" color="red" type="feather" size={32} onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

export default Images;



const styles = StyleSheet.create({

})