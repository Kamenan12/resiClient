import { useState, useRef, useEffect} from "react";
// import { Input } from "@rneui/themed";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {auth, firebaseConfig} from "../../firebase"
import {signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// import { checkIfHasSMSPermission, requestReadSMSPermission, startReadSMS } from "@maniac-tech/react-native-expo-read-sms"
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { db } from "../../firebase";
import { addDoc, collection, doc, getDoc, onSnapshot, query, serverTimestamp, where } from "@firebase/firestore";
import { Button, Input } from "@rneui/themed";
import tw from 'twrnc'
import { async } from "@firebase/util";



const SignIn = () => {
        const navigation = useNavigation()
        const [number, setNumber] = useState('')
        const [step, setStep] = useState(1)
        const recaptchaVerifier = useRef(null)
        const [otpEnvoyer, setOtpEnvoyer] = useState(false)
        const [verificationId, setVerificationId] = useState('')
        const [verificationCode, setVerificationCode] = useState('')
        
        
        const { register, watch, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
            defaultValues: {
              Nom: '',
              Prenom: '',
              
            }
          });


        const Watch_Nom = watch('Nom');
        const Watch_Prenom = watch('Prenom');

        const Suivant = () => {
            setStep(step + 1)
        }
    const VerficationOtp = async(data) => {
        try {
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
            await signInWithCredential(auth, credential).then(async (credential) => {
                const user = credential.user;

                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        user: user.uid, 
                        nom: data.Nom,
                        prenom: data.Prenom,
                        Numero: number,
                        date_create: serverTimestamp()
                    })
                    console.log("Use ajouter a la collection", docRef.id)
                } catch (e) {
                    console.log("errer de creationd user")
                }
            }); 
            alert("user bien connecter")
          } catch (err) {
            alert ("errro", err);
          }
    }
    

    const VerificationUser = async() => {
        
        const us = []
        let q = query(collection(db, "users"), where("Numero", "==", number));
        onSnapshot(q, (queryUser) => {
            const u = []
            queryUser.forEach((doc) => {
                u.push(doc.data())
            })
              if(u.length >= 1){
                alert("numero deja utilise!")
            } else  { 
                getRec()
                } 
        })
    } 
    const getRec = async() => {

        // if (number !== "" || number !== undefined)

        try {
            const phoneProvid = new PhoneAuthProvider(auth)

            const verificationId = await phoneProvid.verifyPhoneNumber(
                number, recaptchaVerifier.current
            );
                setVerificationId(verificationId);
               alert("les code a ete envoyer sr votre telphoene");
               setOtpEnvoyer(true)
        } catch (err) {
            console.log("erre", err.message);
            alert("Verifier votre connexion")
        }
        
    }
    

    const Connexion = (data) => {
        VerficationOtp(data);
        console.log("tout est ok")
    }
 

    
    // useEffect(() => {
    //     getRec()
    // })
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
            {(() => {
                switch (step) {
                    case 1:
                        return (
                                <View style={tw`h-full justify-center`}>
                                    <View style={tw`items-center`}>

                                        <View style={tw`mb-10 `}>
                                            <Text style={{fontSize: 29, color: "red", fontWeight: "500"}}> connexion</Text>
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
                                        onPress={()=> VerificationUser()}
                                        title="Envoyez le code"
                                        buttonStyle={[
                                            tw`bg-red-500 mt-2`
                                        ]}
                                        />
                                        {/* <Text onPress={()=> getRec()}>Touche</Text> */}
                                    </View>
                                        
                                        {
                                        otpEnvoyer === true ? (
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
                                            {/* <Text>{verificationCode.length} </Text> */}
                                            {
                                                verificationCode.length === 6 ? (

                                                    <Button 
                                                    title="Verification OTP"
                                                    // disabled={!verificationId}
                                                    buttonStyle={[
                                                        tw`w-50 mt-2`
                                                    ]}
                                                    onPress={()=> Suivant()}
                                                    />
                                                ): (
                                                    <Button 
                                                    title="Verification OTP"
                                                    disabled
                                                    buttonStyle={[
                                                        tw`w-50 mt-2`
                                                    ]}
                                                    onPress={()=> Suivant()}
                                                    />
                                                )
                                            }
                                        </View>
                                             ) :
                                            null
                                        } 

                                    <FirebaseRecaptchaVerifierModal 
                                        ref={recaptchaVerifier}
                                        firebaseConfig={firebaseConfig}
                                        // attemptInvisibleVerification={true}
                                    />
                                    
                                </View>
                        );
                    case 2: 
                        return (
                            <View style={tw`h-full items-center justify-center`}>
                               <View>
                                <View style={tw`pb-5`}>

                                    <Controller 
                                    control={control}
                                    render={({field: { onChange, onBlur, value}}) => (
                                        
                                        <Input 
                                        containerStyle={errors.Nom ? [tw`bg-white rounded-lg w-70 h-12 border border-red-300`] : [tw`bg-white rounded-lg w-70 h-12`] }
                                        inputContainerStyle={{
                                            borderWidth: 0,
                                            borderBottomWidth: 0,
                                        
                                        }} 
                                        inputStyle={{
                                            fontSize: 25
                                        }}
                                        
                                        placeholder="Nom"
                                        onChangeText={value => onChange(value)}
                                        />
                                        
                                    )}
                                    name="Nom"
                                    rules={{required: true, minLength: 2}}
                                    />
                                    {errors.Nom?.type === "required" && <Text style={{ color: "red", fontSize: 17}}>*Le Nom est obligatoire *</Text>}
                                    {/* {errors.Nom?.type === "minLength" && <Text style={{ color: "black", fontSize: 17}}>*Le Nom est obligatoire *</Text>} */}
                                    {/* <Text> {Watch_Nom.length}</Text> */}
                                    {
                                        // Watch_Nom.length === 0 ? ( <Text style={{ color: "red", fontSize: 12}}>*Le Nom est obligatoire *</Text>) : null
                                    }
                                </View>
                                <View>
                                    <Controller 
                                        control={control}
                                        render={({field: { onChange, onBlur, value}}) => (
                                            
                                            <Input 
                                            containerStyle={errors.Prenom ? [tw`bg-white rounded-lg w-70 h-12 border border-red-300`] : [tw`bg-white rounded-lg w-70 h-12`] }
                                            inputContainerStyle={{
                                                borderWidth: 0,
                                                borderBottomWidth: 0,
        
                                            }}
                                            inputStyle={{
                                                fontSize: 25
                                            }}
                                            placeholder="Prenom"
                                            onChangeText={value => onChange(value)}
                                            />
                                            
                                        )}
                                        name="Prenom"
                                        rules={{required: true, minLength: 2}}
                                        />
                                        {errors.Prenom?.type === "required" && <Text style={{ color: "red", fontSize: 17}}>*Le Prenom est obligatoire *</Text>}
                                </View>
                                <View style={tw`items-center`}>
                                    
                                    
                                    <Button 
                                        title="Validation"
                                        // disabled={!verificationId}
                                        buttonStyle={[
                                            tw`w-50 mt-2 rounded-xl mt-5`
                                        ]} 
                                        // disabled
                                        onPress={handleSubmit(Connexion)}
                                    />
                                </View>
                               </View>
                            </View>
                        );
                    default: 
                        return (
                            <View>
                                <Text> Defaulte</Text>
                            </View>
                        )
                }
            }) ()}
        </>
        
    )
}



export default SignIn;


const styles = StyleSheet.create({


})