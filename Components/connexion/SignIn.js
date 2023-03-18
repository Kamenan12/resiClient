import { useState, useRef, useEffect} from "react";
// import { Input } from "@rneui/themed";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {auth, firebaseConfig} from "../../firebase"
import {signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// import { checkIfHasSMSPermission, requestReadSMSPermission, startReadSMS } from "@maniac-tech/react-native-expo-read-sms"
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import tw from 'twrnc'
import { Button, Input } from "@rneui/themed";



const SignIn = () => {
        const navigation = useNavigation()
        const [number, setNumber] = useState('')
        const recaptchaVerifier = useRef(null)
        const [otpEnvoyer, setOtpEnvoyer] = useState(false)
        const [verificationId, setVerificationId] = useState()
        const [verificationCode, setVerificationCode] = useState()
        
        

    const VerficationOtp = async() => {
        try {
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
            await signInWithCredential(auth, credential);
            alert("user bien connecter")
          } catch (err) {
            alert ("errro", err);
          }
    }
    

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
    
 

    
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigation.navigate("Details")
    //         }
    //     })
    //     return unsubscribe
    // })

    return (
        <>
            <View style={tw`h-full justify-center`}>
                <View style={tw`items-center`}>

                    <View style={tw`mb-10 `}>
                        <Text onPress={()=> getMessage()} style={{fontSize: 32, color: "red", fontWeight: "500"}}> connexion</Text>
                    </View>
                    

                    <PhoneInput 
                    // ref={PhoneInput}
                    defaultCode="CI"
                    value={number}
                    onChangeFormattedText={(text) => setNumber(text)}
                    placeholder="Entrez numero"

                    />
                    {/* <Text> {number}</Text> */}
                    <Button 
                    onPress={()=> getRec()}
                    title="Envoyez le code"
                    buttonStyle={[
                        tw`bg-red-500 mt-2`
                    ]}
                    />
                    {/* <Text onPress={()=> getRec()}>Touche</Text> */}
                </View>
                    {/* <View>
                        <Text onPress={() => getRecap()}>dddydyy</Text>
                    </View> */}
                    <View style={tw`items-center mt-5`}>
                        <Input 
                        containerStyle={{
                            width: 300,
                            height: 44,
                            backgroundColor: "white"
                        }}
                        inputContainerStyle={{
                            borderWidth: 0,
                            borderBottomWidth: 0,

                        }}
                        keyboardType="numeric"
                        onChangeText={setVerificationCode}
                        placeholder="OTP code"
                        />
                        {/* <Text>{verificationCode}</Text> */}
                    <Button 
                    title="Verification OTP"
                    // disabled={!verificationId}
                    buttonStyle={[
                        tw`w-50 mt-2`
                    ]}
                    onPress={()=> VerficationOtp()}
                    />
                    </View>

                <FirebaseRecaptchaVerifierModal 
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                    // attemptInvisibleVerification={true}
                />
                
            </View>
        </>
        
    )
}



export default SignIn;


const styles = StyleSheet.create({


})