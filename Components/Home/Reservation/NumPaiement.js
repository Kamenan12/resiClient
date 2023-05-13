import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CheckBox, Dialog, Icon } from '@rneui/themed';
import tw from "twrnc"
import { Input } from '@rneui/base';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';





const NumPaiement = (props) => {
    const UserNumero = useSelector((state) => state.user.numero)
    const UserDocId = useSelector((state) => state.user.idDoc)
    const UserNom = useSelector((state) => state.user.nom)
    const UserPrenom = useSelector((state) => state.user.prenom)
    const UserId = useSelector((state) => state.user.user)
    // const UserNumero = useSelector((state) => state.user.numero)
    const methode = props.route.params.methode
    const Resi = props.route.params.Resi
    
    const TotalaPaye = props.route.params.Total
    const DebutSejour = props.route.params.DebutSejour
    const FinSejour = props.route.params.FinSejour
    const CoutSejour = props.route.params.CoutSejour
    const NbreJour = props.route.params.NbreJour
    const FraisService = props.route.params.FraisService
    const navigation = useNavigation()
    const [visible1, setVisible1] = useState(false)
    const [ajoutNouveauNumero, setAjoutNouveauNumero] = useState()
    const [nouveauNumero, setNouveauNumero] = useState()
    const [numPaiement, setNumPaiement] = useState(null)
    const [step, setStep] = useState(1);
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)



    // console.log(nouveauNumero)
    // console.log("Idresidence22", Resi.idresidence)

    const toggleDialog1 = () => {
        setVisible1(!visible1)
    }
    const stepSuivant = () => {
        setStep(2)
    }
    const stepPrecedent = () => {
        setStep(1)
    }

    const confirmerNouveauNumero = () => {
        let num = '+255' + nouveauNumero
        // console.log("nummm", num)
        setAjoutNouveauNumero(num)
        toggleDialog1()
    }

    const valideNumero = () => {
        if (check1) {
            setNumPaiement(UserNumero);
            stepSuivant();
            // alert("numPai", numPaiement)
        } else if (check2) {
            setNumPaiement(ajoutNouveauNumero);
            stepSuivant()
            // alert("numPai", numPaiement)
        }
        
    }

    const reservationValide = async() => {
        console.log("userHote", Resi.residence.idDocHote)
       try {
            await addDoc(collection(db, `reservations`), {
                user: UserId,
                userDocId: UserDocId,
                userNom: UserNom, 
                userPrenom: UserPrenom,
                userNumero: UserNumero,
                idResidence: Resi.idresidence,
                userHote: Resi.residence.idDocHote,
                nombreDeJour: NbreJour,
                debutSejour: DebutSejour,
                finSejour: FinSejour,
                prix24h: Resi.residence.Prix,
                coutSejour: CoutSejour,
                frais: FraisService,
                totalAPaye: TotalaPaye,
                modepaiement: methode.nom,
                numeroDePaiement: numPaiement,
                date_create: serverTimestamp()
                
            })
       } catch (e){
        console.log("eerrr", e)
       }
       console.log("reservation fait")
    }

    useEffect(()=> {
        valideNumero()
    }, [numPaiement])
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
                                onPress={() => [navigation.goBack()]}/>
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
                                <Text>{numPaiement}</Text>
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
                        <>
                        <ScrollView>
                            <View style={tw`pt-10`}>
                                <View style={tw`bg-white py-3 justify-center mb-2 flex-row`}>
                                    <Icon type="antdesign" name="close" onPress={()=> stepPrecedent()}/>
                                    <Text style={[{fontSize: 20, fontWeight: "600"}]} > Confirmation du paiement</Text>
                                </View>

                                <View style={[tw`bg-white items-center mb-2 `]}>
                                    <View style={tw``}>
                                        <Text style={[{fontSize: 18, fontWeight: "600"}]}> Votre séjour</Text>
                                    </View>
                                    <View style={tw`py-3`}>
                                        <View style={tw`flex-row`}>
                                            <View style={tw`border rounded-l p-5`}>
                                                <Text style={{fontWeight: "600"}}>Debut de sejour </Text>
                                                <Text> {DebutSejour}</Text>
                                            </View>
                                            <View style={tw`border rounded-r p-5`}>
                                                <Text style={{fontWeight: "600"}}>Fin de sejour </Text>
                                                <Text> {FinSejour}</Text>
                                            </View>
                                        </View>
                                    </View>
                                {/* image info chmabre */}
                                    <View style={tw`mt-2 flex-row justify-between w-full px-2`}>
                                        
                                        <Image source={{uri: Resi.residence.Images[0].url}} style={[tw`h-40 w-30 rounded-xl`]}/>
                                        
                                        <View style={tw``}>
                                            <View style={tw`flex-row`}>
                                                <Text style={{fontSize: 16, fontWeight:"500"}}> Adresse: </Text>
                                                <Text>{Resi.residence.Location.description}</Text> 
                                            </View>
                                            <View style={tw`flex-row`}>
                                                <Text style={{fontSize: 16, fontWeight:"500"}}> Ville: </Text> 
                                                <Text >{Resi.residence.Location.ville}</Text> 
                                            </View>
                                            <View style={tw`flex-row`}>
                                                <Text style={{fontSize: 16, fontWeight:"500"}}> Commune: </Text> 
                                                <Text> {Resi.residence.Location.commune}</Text> 
                                            </View>
                                        <View style={tw`flex-row`}>
                                            <Text style={{fontSize: 16, fontWeight:"500"}}> type:</Text>
                                            <Text style={{fontSize: 18}}> {Resi.residence.Type_residence}</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Text style={{fontSize: 16, fontWeight:"500"}}> Salon: </Text>
                                            <Text>{Resi.residence.salon}</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Text style={{fontSize: 16, fontWeight:"500"}}> Chambre: </Text>
                                            <Text style={{}}>{Resi.residence.chambre}</Text>
                                        </View>
                                        <View style={tw`flex-row`}>
                                            <Text style={{fontSize: 16, fontWeight:"500"}}> Bain </Text>
                                            <Text style={{}}>{Resi.residence.bain}</Text>
                                        </View>
                                        </View>
                                    </View>
                                {/* image info chmabre */}
                                {/* Debut Info sur les montant a payee */}
                                <View style={[tw`bg-white mb-2 py-2 w-full`]}>
                                    <View style={tw`items-center`}>
                                        <Text style={[{fontSize: 18, fontWeight: "600"}]}> Montant a paye</Text>
                                    </View>
                                    <View>
                                        <View style={tw`flex-row justify-between py-1 px-5`}>
                                            <Text style={{fontSize: 15, fontWeight: "600"}}> Prix 24h(fcfa)</Text>
                                            <Text style={{fontSize: 15, }}> {Resi.residence.Prix} </Text>
                                        </View>
                                        <View style={tw`flex-row justify-between py-1 px-5`}>
                                            <Text style={{fontSize: 15, fontWeight: "600"}}> Nbre de jours</Text>
                                            <Text style={{fontSize: 15, }}> {NbreJour} jour</Text>
                                        </View>
                                        <View style={tw`flex-row justify-between py-1 px-5`}>
                                            <Text style={{fontSize: 15, fontWeight: "600"}}> Séjour(fcfa)</Text>
                                            <Text style={{fontSize: 15, }}> {CoutSejour}  </Text>
                                        </View>
                                        <View style={tw`flex-row justify-between py-1 px-5`}>
                                            <Text style={{fontSize: 15, fontWeight: "600"}}> Frais se services (10%)</Text>
                                            <Text style={{fontSize: 15, }}> {FraisService}  </Text>
                                        </View>
                                        <View style={tw`flex-row justify-between py-1 px-5`}>
                                            <Text style={{fontSize: 15, fontWeight: "600"}}> Total(fcfa)</Text>
                                            <Text style={{fontSize: 15, fontWeight: "500"}}> {TotalaPaye} </Text>
                                        </View>
                                        
                                    </View>
                                </View>
                                {/* fin Info sur les montant a payee */}

                                </View>
                                <View style={[tw`bg-white mb-2 py-2 w-80 w-full`]}>
                                    <View style={tw`items-center`}>
                                        <Text style={[{fontSize: 18, fontWeight: "600"}]}> infos paiement </Text>
                                    </View>
                                    <View style={tw`flex-row justify-between py-1 px-5`}>
                                        <Text style={{fontSize: 15, fontWeight: "600"}}> Mode paiement :</Text>
                                        <Text style={{fontSize: 15}}> {methode.nom}</Text>
                                    </View>
                                    <View style={tw`flex-row justify-between py-1 px-5`}>
                                        <Text style={{fontSize: 15, fontWeight: "600"}}> Numero: </Text>
                                        <Text style={{fontSize: 15}}> {numPaiement}</Text>
                                    </View>
                                    <Text> </Text>
                                    {/* <Text>{TotalaPaye}</Text> */}
                                </View>
                                    {/* buton validation */}
                                        <View style={[tw`bg-white items-center mb-2 py-2`]}>
                                            <View style={tw`w-80`}>
                                                <Button title="Reservez maintenant"
                                                onPress={()=> reservationValide()}
                                                buttonStyle={[
                                                    tw`bg-green-500 rounded-lg`
                                                ]}
                                                />
                                            </View>
                                        </View>
                                    {/* buton validation */}
                            </View>
                            </ScrollView>
                        </>
                    )
                default: 
                return (
                    <View>
                        <Text> rien n'\est disponible</Text>
                        <Button title="retour" onPress={() => stepPrecedent()}/>
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