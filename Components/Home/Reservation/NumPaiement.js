import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CheckBox, Icon } from '@rneui/themed';
import tw from "twrnc"
import { Input } from '@rneui/base';





const NumPaiement = (props) => {
    const UserNumero = useSelector((state) => state.user.numero)
    const navigation = useNavigation()
    const [ajoutNouveauNumero, setAjoutNouveauNumero] = useState(false)
    const [nouveauNumero, setNouveauNumero] = useState()
    const [step, setStep] = useState(1);
    const [check, setCheck] = useState(false)
    const methode = props.route.params.methode



    // console.log(nouveauNumero)

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
                                            title={UserNumero}x
                                            textStyle={{fontSize: 18}}
                                            containerStyle={check ? {
                                                backgroundColor: "transparent"
                                            }: {
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
                                            checked={check}
                                            onPress={() => setCheck(!check)} />
                                    </View>

                                        <View style={tw`py-2`}>
                                            {
                                                ajoutNouveauNumero ? (
                                                    <View> 
                                                        <Input 
                                                        placeholder=''
                                                        keyboardType="numeric" 
                                                        onChangeText={setNouveauNumero}
                                                        leftIcon={
                                                            <Text style={{fontSize:18}}>
                                                                +225
                                                            </Text>
                                                        }/>
                                                        <Button 
                                                        title="Annuler"
                                                        buttonStyle={[tw`bg-rose-600 rounded-xl`]}
                                                        onPress={() => [setAjoutNouveauNumero(!ajoutNouveauNumero), setNouveauNumero(null)]}
                                                        />
                                                    </View>
                                                ) : (
                                                    <Button 
                                            title="Ajouter un autre numero"
                                            buttonStyle={[tw`rounded-full bg-teal-900`]}
                                            onPress={() => setAjoutNouveauNumero(!ajoutNouveauNumero)}
                                            />
                                                )
                                        }
                                        </View>
                                        
                                        
                                </View>
                                <View>

                                </View>
                            </View>
                            
                            <View style={tw`pt-40 w-90 items-center`}>
                                {
                                    check | nouveauNumero != null ? 
                                    <Button 
                                title="Terminez"
                                buttonStyle={tw`w-30 bg-blue-800 rounded-full`}/> : null
                                }
                                
                                
                            </View>
                        </>
                    );
                case 2: 
                    return (
                        <View>
                            <Text> Tecte page 2</Text>
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