import { useState, useRef} from "react";
// import { Input } from "@rneui/themed";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {auth, firebaseConfig} from "../../firebase"
import {signInWithPhoneNumber, PhoneAuthProvider} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import PhoneInput from "react-native-phone-number-input";
import tw from 'twrnc'



const SignIn = () => {
        const [number, setNumber] = useState('')
        const recaptchaVerifier = useRef(null)
        const [verificationId, setVerificationId] = useState()
    // function setUpRecaptch(number){

    //    const recaptchaVerifier = new RecaptchaVerifier(
    //         'recaptcha-container' ,
    //         {}, 
    //         auth
    //     );
    //     recaptchaVerifier.render();
    // }
    

    const getRec = async() => {
        // if (number !== "" || number !== undefined)
        try {
            const phoneProvid = new PhoneAuthProvider(auth)

            const verificationId = await phoneProvid.verifyPhoneNumber(
                number, recaptchaVerifier.current
            );
                setVerificationId(verificationId);
               alert("les code a ete envoyer sr votre telphoene")
        } catch (err) {
            console.log("erre", err.message)
        }
        // try {
        //     signInWithPhoneNumber(auth, number, recaptchaVerifier)
        //     .then((confirmationResult) => {
        //     // SMS sent. Prompt user to type the code from the message, then sign the
        //     // user in with confirmationResult.confirm(code).
        //     window.confirmationResult = confirmationResult;
        //     // ...
        //     }).catch((error) => {
        //     // Error; SMS not sent
        //     // ...
        //     });
        // }
        

        //     console.log("numb", number)
        // try {
        //     const response = await setUpRecaptch(number);
        //     console.log("rrrrr", response)
        // } catch (error) {
        //     console.log("eerppr", error)
        // }

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
                <PhoneInput 
                // ref={PhoneInput}
                defaultCode="CI"
                value={number}
                onChangeFormattedText={(text) => setNumber(text)}
                placeholder="Entrez numero"

                />
                    {/* <View>
                        <Text onPress={() => getRecap()}>dddydyy</Text>
                    </View> */}
                <FirebaseRecaptchaVerifierModal 
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                />
                <Text> {number}</Text>
                <Text onPress={()=> getRec()}>Touche</Text>
            </View>
        </>
        
    )
}



export default SignIn;


const styles = StyleSheet.create({


})