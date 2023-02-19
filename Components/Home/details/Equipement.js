import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Icon } from "@rneui/themed";

import tw from "twrnc"




const Equipement = (props) => {
    return (
        <>
        <View style={tw`pt-5 px-3`}>
            <Text style={[{ fontSize: 24, fontWeight: "700", fontFamily: "serif"}]}>Equipement </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={tw` flex-row`}>
                        {props.EquiBase.map((equip, index) => (
                            <View key={index} style={tw`p-2`}>
                                <Equip equip={equip} />
                            </View>
                        ))}
                        {props.EquiExtra.map((equip, index) => (
                            <View key={index} style={tw`p-2`}>
                                <Equip equip={equip} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={tw` flex-row`}>
                        {props.EquiExtra.map((equip, index) => (
                            <View key={index} style={tw`p-2`}>
                                <Equip equip={equip} />
                            </View>
                        ))}
                    </View>
                </ScrollView> */}
                <View style={tw`items-end pt-5 px-5`}>
                
                </View>
        </View>

        
</>
    )
}


const Equip = (props) => {
    return (
        <>
        
         <View style={tw`items-center`}>
            <View style={tw`bg-gray-100 h-11 w-11 shadow-xl items-center flex-row p-2 rounded-xl`}>
                { props.equip === "Wifi" ? 
                    <Icon  name="wifi" color="red" type="materiallcons" size={27}/> : <Text></Text>
                }
                {props.equip === "Climatiseur" ?
                    <Icon  name="air-filter" color="red" type="material-community" size={27}/> : <Text></Text>
                }
                {props.equip === "Refrigerateur" ?
                    <Icon  name="fridge-alert-outline" color="red" type="material-community" size={27}/> : <Text></Text>
                }
                {props.equip === "piscine" ?
                    <Icon  name="pool" color="red" type="materiallcons" size={27}/> : <Text></Text>
                }
                {props.equip === "Televison" ?
                    <Icon  name="tv-outline" color="red" type="ionicon" size={27}/> : <Text></Text>
                }
                {props.equip === "garage" ?
                    <Icon  name="garage" color="red" type="material-community" size={27}/> : <Text></Text>
                }
                {props.equip === "Jaridin" ?
                    <Icon  name="trees" color="red" type="foundation" size={27}/> : <Text></Text>
                }
            </View>
            <View style={tw`pt-3`}>
                 <Text>{props.equip}</Text>
            </View>
           
         </View>
        </>
    )
}


export default Equipement;



const styles = StyleSheet.create({

})