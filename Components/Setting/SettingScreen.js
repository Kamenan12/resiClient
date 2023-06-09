import { View, Text, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";
import tw from "twrnc"



const Setting = () => {

    const navigation = useNavigation();
    const user = auth.currentUser;

    const Decon = () => {
        signOut(auth).then(() => {
            console.log("user deconnecter ");
            navigation.navigate("Home-G")
        })
    }
    return (
        <View style={tw`items-center justify-center h-full`}>
            <Text>
                {
                    user ? <Button 
                    title="Deconnexion"
                    buttonStyle={
                        tw`bg-red-500`
                    }
                    onPress={() => Decon()}
                />  : 
                <Button 
                    title="Connexion"
                    buttonStyle={
                        tw`bg-red-500`
                    }
                    onPress={() => navigation.navigate('SignIn')}
                />
                }
                
            </Text>
        </View>
    )
}




export default Setting;


const styles = StyleSheet.create({
    
})