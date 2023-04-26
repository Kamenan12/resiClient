import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import getUserSlice from "./getUserSlice";

export const store= configureStore({
    reducer: {
        user: getUserSlice,
        // middleware: getDefaultMiddleware({
        //     serializableCheck: false,
        //   }),
    },
}) 