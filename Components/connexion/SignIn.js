import { Input } from "@rneui/themed";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {auth} from "../../firebase"
import {RecaptchaVerifier } from "firebase/auth";
import tw from 'twrnc'



const SignIn = () => {
    
    
    // function setUpRecaptch(){

    //     window.recaptchaVerifier = new auth.RecaptchaVerifier(
    //         'recaptcha-container',
    //         {}, 
    //         auth
    //     );
    //     recaptchaVerifier.render();
    // }

    const getRec = async() => {

        try {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        } catch (error) {
            console.log("eerppr", error)
        }

        // try {
        //     const response = await setUpRecaptch();
        //     console.log("reponse", response)
        // } catch (error) {
        //     console.log("error", error)
        // }
    }
    
 

    
    return (
        <>
            <View style={tw`h-full items-center justify-center`}>
                <Text> connexion</Text>
                <Input />
                    {/* <View>
                        <Text onPress={() => getRecap()}>dddydyy</Text>
                    </View> */}
                <View id='recaptcha-container'>
                    
                </View>
                <Text onPress={()=> getRec()}>Touche</Text>
            </View>
        </>
        
    )
}



export default SignIn;


const styles = StyleSheet.create({


})