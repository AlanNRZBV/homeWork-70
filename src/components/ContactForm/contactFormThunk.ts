import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import axiosAPI from "../../axiosAPI.ts";
import { ContactData } from "../../types";

export const postContact = createAsyncThunk<void ,ContactData,{state: RootState}>(
  'contactForm/post', async (arg)=>{
    try {
      await axiosAPI.post('contacts.json', arg)
    }catch (error){
      console.log('Caught on try - POST CONTACT - ', error)
    }
  }
)