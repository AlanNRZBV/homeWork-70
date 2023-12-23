import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import axiosAPI from "../../../axiosAPI.ts";

export const postContact = createAsyncThunk<void ,object,{state: RootState}>(
  'contactForm/post', async (arg)=>{
    try {
      await axiosAPI.post('contacts.json', arg)
    }catch (error){
      console.log('Caught on try - POST CONTACT - ', error)
    }
  }
)