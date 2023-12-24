import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import axiosAPI from "../../axiosAPI.ts";
import { contactsSlice } from "./contactsSlice.ts";

export const fetchContacts = createAsyncThunk<void,undefined,{state: RootState}>(
  'contacts/fetch', async (_arg, thunkAPI)=>{
    try {
      const response = await axiosAPI.get('contacts.json');
      if (response.data !== null) {
        const newContacts = Object.keys(response.data).map((id) => ({
          id,
          ...response.data[id],
        }));
        thunkAPI.dispatch(contactsSlice.actions.loadContacts(newContacts));
      }
    }catch (error){
      console.log('Caught on try - FETCH CONTACTS - ', error)
    }
  }
)