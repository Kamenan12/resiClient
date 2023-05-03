import { useEffect, useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { auth } from './../firebase';
import { db } from '../firebase';
import { collection, getDocs, where, query, onSnapshot } from "firebase/firestore";






// const [mala, setMala] = useState([])
const initialState = {
    // value: [],
    idDoc: "",
    numero: "",
    nom: "",
    prenom: "",
    user: ""
}




export const getUserSlice = createSlice({
    name: "get_user",
    initialState,
    reducers: {
        getUSer: (state, action) => {
            state.idDoc = action.payload.idDoc
            state.numero = action.payload.numero
            state.nom = action.payload.nom
            state.prenom = action.payload.prenom
            state.user = action.payload.user
            // state.nom = action.payload.value.nom,
            // state.prenom = action.pa
            // return {
            //     ...state,
            //     value: action.payload
            // }
            // state.value.push(action.payload.value)
        }
        
    }
})


export const {getUSer} = getUserSlice.actions

export default getUserSlice.reducer