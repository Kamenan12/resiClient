import  React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { Icon, Button } from "@rneui/themed";
import tw from "twrnc";



const Calendrier = (props) => {
    const Navigation = useNavigation();

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [rang,setRang] = useState([])
    const minDate = new Date();
    const startDate = selectedStartDate ? moment(selectedStartDate).format('YYYY-MM-DD') : '';
    const endDate = selectedEndDate ? moment(selectedEndDate).format('YYYY-MM-DD') : '' ;
    const NbreDate = moment(endDate).diff(startDate, 'day');
    const maxDate  = moment(minDate).add(3,'month').format('YYYY-MM-DD');
    
        
    
    const jourIndispo = []

    props.Calendrier.map((tab) => (
        tab.Tab.map((d) => (
            jourIndispo.push(d.jour)
        ))
    ))


    const CustumStyleDate = [] 
    // ran.map( (dat) => (
        rang.map((d) => (
            CustumStyleDate.push({
                date: d,
                style: {
                    // backgroundColor: 'red'
                },
                textStyle: {
                    // color: 'green'
                }, 
                containerStyle: {
                //  backgroundColor: 'red'
                },
                // allowDisabled: true

            })
        ))
    // ))

    const getRang = () => {
        let PrDate = startDate;
        let DrDate = endDate;
        let TabRang = []
        let nombre = 0
        console.log("PRDDd", PrDate)
        console.log("DrDDD", DrDate)
        
        if (endDate) {
            // console.log("en basss")
            while (PrDate <= DrDate) {
                console.log(nombre);
                // nombre = nombre + 1
                TabRang = [...TabRang, PrDate]
                PrDate = moment(PrDate).add(1, "day").format("YYYY-MM-DD");
            //    console.log("Prdate", PrDate)
            
            }
            setRang(TabRang);
            props.JourSelection(TabRang)
        }
        
        
    }



    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date)
            // console.log(selectedEndDate);
            // console.log("type", type);
            // console.log("dureee", date)
            getRang();
            // props.JourSelection({rang})
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null)
            // console.log("type", type);
            getRang();
            // props.JourSelection(["555", "6666", "777", "8888"]) 
        }
        
    }

    useEffect(() => (
        getRang()
    ), [startDate, endDate])
    // const jourJ = new Date();
    console.log("rang", rang)
    return (
        <View style={tw`px-3`}>
            <Text style={[{ fontSize: 24, fontWeight: "700", fontFamily: "serif"}]}>Disponibilite </Text>
            <View style={tw`py-5`}>
                {/* <View>
                    {jourIndispo.map((j, index) => (
                        <Text key={index}>{j}</Text>
                    ))}
                </View> */}
                <CalendarPicker 
                minDate={minDate}
                maxDate={maxDate}
                // enableDateChange={false}
                onDateChange={onDateChange}
                allowRangeSelection={true}
                startFromMonday={true}
                todayBackgroundColor="transparent"
                // todayBackgroundColor='blue'
                // selectedDayTextColor="blue"
                selectedDayColor="#fca4a4"
                nextComponent={<Icon type="antdesign" name="rightcircle" color="red" style={{marginRight: 30}}/>}
                previousComponent={<Icon type="antdesign" name="leftcircle" color="red" style={{marginLeft: 30}}/>}
                previousTitle="Precedent"
                nextTitle="Suivant"
                weekdays={['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'sam', 'Dim']}
                months={['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Otobre', 'Novembre', 'Decembre']}
                disabledDates={jourIndispo}
                customDatesStyles={CustumStyleDate}
                />
            </View>
        <View style={tw`items-center`}>
            <Text style={{ fontSize: 20, fontWeight: "400"}}> Debut de jours:  {startDate}</Text>
            <Text style={{ fontSize: 20, fontWeight: "400"}}> Fin de jours:  {endDate}</Text>
            <Text style={{ fontSize: 20, fontWeight: "400"}}> nombre de jour : {NbreDate}</Text>
            {/* <Text style={{ fontSize: 20, fontWeight: "400"}}> log : {rang.length}</Text> */}
         </View>
    </View>
    )
}





export default Calendrier;




const styles = StyleSheet.create({
    
})