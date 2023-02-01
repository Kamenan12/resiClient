import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar, Input, Icon } from "@rneui/themed";
import tw from "twrnc"



const BarCherche = () => {

    const [recherche, setRecherche] = useState("")
    
    return (
        <View style={tw` pt-2 w-80`}>
            {/* <SearchBar /> */}
            <Input 
            onChangeText={() => setRecherche}
            containerStyle={[{ width: 330, }, ]}
            inputContainerStyle={[{
              borderWidth:0,
              borderRadius: 40,
              backgroundColor: "white",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              paddingLeft: 24,
              height: 43,
            }, tw` shadow-lg`]}
            inputStyle={{fontFamily: "sans-serif"}}
            placeholder='Marcory, Cocody...'
             leftIcon={() => (<Icon  name="location" color="#cbd5e1" type="entypo" size={20}/>)}
             leftIconContainerStyle={[tw`pr-2`]}
            rightIcon={() => (<Icon  name="search" color="#cbd5e1" type="fontisto" size={20} />)}
            rightIconContainerStyle={[tw`pr-7`]}
            />
        </View>
    )
}


export default BarCherche ;

const styles = StyleSheet.create({

})