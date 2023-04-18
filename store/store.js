import { configureStore } from "@reduxjs/toolkit";
import getUserSlice from "./getUserSlice";

export const store= configureStore({
    reducer: {
        user: getUserSlice,
    },
})