import {configureStore} from "@reduxjs/toolkit";
import { contactFormReducer } from "../components/ContactForm/contactFormSlice.ts";

export const store =configureStore({
  reducer:{
    contactForm: contactFormReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch