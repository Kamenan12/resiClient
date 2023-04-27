import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CheckBox, Dialog, Icon } from '@rneui/themed';
import tw from "twrnc"
import { Input } from '@rneui/base';





const NumPaiement = (props) => {
    const UserNumero = useSelector((state) => state.user.numero)
    const methode = props.route.params.methode
    const navigation = useNavigation()
    const [visible1, setVisible1] = useState(false)
    const [ajoutNouveauNumero, setAjoutNouveauNumero] = useState()
    const [nouveauNumero, setNouveauNumero] = useState()
    const [numPaiement, setNumPaiement] = useState()
    const [step, setStep] = useState(1);
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)



    // console.log(nouveauNumero)

    const valideNumero = () => {
        if (check1) {
            setNumPaiement(UserNumero);
            stepSuivant();
        } else if (check2) {
            setNumPaiement(ajoutNouveauNumero);
            stepSuivant()
        }
    }
    const confirmerNouveauNumero = () => {
        let num = '+255' + nouveauNumero
        // console.log("nummm", num)
        setAjoutNouveauNumero(num)
        toggleDialog1()
    }

    const toggleDialog1 = () => {
        setVisible1(!visible1)
    }
    const stepSuivant = () => {
        setStep(step +1 )
    }

    return (
        <>
        {(() => {
            switch (step){
                case 1:
                    return (
                        <>
                            <View style={tw`pt-11 pr-70`}>
                                <Icon 
                                name='leftcircle'
                                type='antdesign'
                                onPress={() => navigation.goBack()}/>
                            </View>
                            <View style={tw`pt-2 items-center`}>
                                <Image source={methode.logo} style={tw`w-30 h-30`} />
                                <Text style={{fontSize: 20, fontWeight: "400"}}>{methode.nom}</Text>
                                <View style={[tw`py-10 `]}>
                                    <View>
                                    <Text style={{fontSize: 20, fontWeight: "600"}}> Selectionnez un numero</Text>
                                    </View>
                                    <View style={tw`py-2`}>
                                        <CheckBox
                                            center
                                            title={UserNumero}
                                            textStyle={{fontSize: 18}}
                                            containerStyle={{
                                                backgroundColor: "transparent"
                                            }}
                                            checkedIcon={
                                                <Icon
                                                name="radio-button-checked"
                                                type="material"
                                                color="red"
                                                size={25}
                                                iconStyle={{ marginRight: 10 }}
                                                />
                                                
                                            }
                                            uncheckedIcon={
                                                <Icon
                                                name="radio-button-unchecked"
                                                type="material"
                                                color="grey"
                                                size={25}
                                                iconStyle={{ marginRight: 10 }}
                                                />
                                            }
                                            checked={check1}
                                            onPress={() => [setCheck1(true), setCheck2(false)]} />
                                            {
                                                ajoutNouveauNumero ? (
                                            <CheckBox
                                            center
                                            title={ajoutNouveauNumero}
                                            textStyle={{fontSize: 18}}
                                            containerStyle={{
                                                backgroundColor: "transparent"
                                            }}
                                            checkedIcon={
                                                <Icon
                                                name="radio-button-checked"
                                                type="material"
                                                color="red"
                                                size={25}
                                                iconStyle={{ marginRight: 10 }}
                                                />
                                                
                                            }
                                            uncheckedIcon={
                                                <Icon
                                                name="radio-button-unchecked"
                                                type="material"
                                                color="grey"
                                                size={25}
                                                iconStyle={{ marginRight: 10 }}
                                                />
                                            }
                                            checked={check2}
                                            onPress={() => [setCheck2(true), setCheck1(false)]} />
                                                ) : null
                                            }
                                    </View>

                                        <View style={tw`py-2`}>
                                            <Button 
                                            title="Ajouter un autre numero"
                                            buttonStyle={[tw`rounded-full bg-teal-900`]}
                                            onPress={() => toggleDialog1()}
                                            />
                                            <Dialog isVisible={visible1} >
                                                <Dialog.Title title='Entez un numero'/>
                                                <Input 
                                                placeholder=''
                                                keyboardType="numeric" 
                                                onChangeText={setNouveauNumero}
                                                leftIcon={
                                                    <Text style={{fontSize:25}}>
                                                        +225
                                                    </Text>
                                                }
                                                inputStyle={{
                                                    
                                                    fontSize: 25,
                                                }}
                                                containerStyle={[tw`h-12 bg-blue-400 rounded `]}
                                                
                                                />
                                                {/* <Dialog.Actions style={tw`justify-between w-50 bg-red-100`}> */}
                                                <View style={tw` flex-row justify-between pt-3`}>
                                                    <Button 
                                                    title="Annuler"
                                                    onPress={()=> toggleDialog1()}
                                                    buttonStyle={tw`rounded-lg bg-red-400 `}
                                                    />
                                                    {
                                                        nouveauNumero != null && nouveauNumero.length == 10 ? 
                                                        <Button
                                                        title="Confirmer"
                                                        buttonStyle={tw`rounded-lg bg-blue-400`}
                                                        onPress={() => confirmerNouveauNumero()}
                                                        /> :
                                                        <Button
                                                        title="Confirmer"
                                                        disabled
                                                        buttonStyle={tw`rounded-lg bg-blue-400`}
                                                        />
                                                    }
                                                    
                                                </View>
                                                    {/* <Dialog.Button title="Confirmer" fontSize={25}/> */}
                                                    {/* <Dialog.Button title="annuler" onPress={()=> toggleDialog1()}/> */}
                                                {/* </Dialog.Actions> */}
                                            </Dialog>
                                        </View>
                                        
                                        
                                </View>
                                <View>

                                </View>
                            </View>
                            
                            <View style={tw`pt-40 w-90 items-center`}>
                                {
                                    check1 | check2 ? 
                                    <Button 
                                    title="Validez"
                                    onPress={() => valideNumero()}
                                    buttonStyle={tw`w-30 bg-blue-800 rounded-full`}/> : null
                                }
                                
                                
                            </View>
                        </>
                    );
                case 2: 
                    return (
                        <View style={tw`items-center justify-center`}>
                            <Text> Tecte page 2</Text>
                            <Text> {numPaiement}</Text>
                        </View>
                    )
                default: 
                return (
                    <View>
                        <Text> rien n'\est disponible</Text>
                    </View>
                )
            }
        }) ()}
            
        </>
    )   
}




export default NumPaiement;



const styles = StyleSheet.create({

})