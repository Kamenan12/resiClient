import { View, Text, StyleSheet } from "react-native";
import { Icon } from  "@rneui/themed";
import tw from "twrnc"
import BarCherche from "./BarCherche";
import Menu from "./Memu";





const Entete = () => {
    return (
        <View style={tw``}>
            <View style={tw` flex-row`}>
                {/* <View style={tw`flex-1 items-start`}>
                    <Icon type="font-awesome" name="bars"  size={25} color="red"/>
                </View> */}
                    {/* <Menu /> */}
                <View style={tw`flex-1 items-center`}>
                    <Text style={[tw``, {fontSize: 25, fontWeight: "500", color: "red"}]}> Resi +</Text>
                </View>
            </View>
            <View>
                <BarCherche />
            </View>
        </View>
    )
}



export default Entete ;


const styles = StyleSheet.create({


})