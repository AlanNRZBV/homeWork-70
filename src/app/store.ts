import {configureStore} from "@reduxjs/toolkit";
import { contactFormReducer } from "../components/ContactForm/contactFormSlice.ts";
import { contactsReducer } from "../components/Contacts/contactsSlice.ts";

export const store =configureStore({
  reducer:{
    contactForm: contactFormReducer,
    contacts: contactsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch