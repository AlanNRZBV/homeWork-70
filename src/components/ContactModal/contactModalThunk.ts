import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import axiosAPI from "../../axiosAPI.ts";
import { addContact, contactModalSlice } from "./contactModalSlice.ts";
import { ContactData } from "../../types";

export const fetchContact = createAsyncThunk<void, string, {state: RootState}>(
  'contactModal/fetch', async (arg, thunkAPI)=>{
    try {
      const response = await axiosAPI.get(`contacts/${arg}.json`)
      if( response.data !== null){

        const newContact = {
          ...response.data,
          id: arg
        }
        thunkAPI.dispatch(contactModalSlice.actions(addContact(newContact)))
      }
    }catch (error){
      console.log('Caught on try - FETCH CONTACT - ', error)
    }
  }
)