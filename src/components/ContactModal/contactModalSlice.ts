import {  IContactModal } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactModalState {
  contactInfo: IContactModal,
  isShow: boolean,
  isLoading: boolean
}

export const initialState: ContactModalState = {
  contactInfo: {name: '', phone:'', photoUrl:'', email:'', id:''},
  isShow: false,
  isLoading: false
}

export const contactModalSlice = createSlice({
  name:'contactModal',
  initialState,
  reducers:{
    toggleDisplay: (state)=>{
      state.isShow = !state.isShow
    },
    addContact: (state, action:PayloadAction<IContactModal>)=>{
        const {name, phone, photoUrl, email, id}= action.payload
      state.contactInfo.name = name
      state.contactInfo.phone = phone
      state.contactInfo.photoUrl = photoUrl
      state.contactInfo.email = email
      state.contactInfo.id = id

    }
  }
})

export const contactModalReducer = contactModalSlice.reducer
export const {toggleDisplay, addContact}=contactModalSlice.actions