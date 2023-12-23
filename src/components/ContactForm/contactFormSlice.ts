import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactFormState {
  name: string,
  phone: string,
  email: string | null,
  photoUrl: string,
  isLoading?: boolean
}

export const initialState: ContactFormState={
  name:'',
  phone:'',
  email:'',
  photoUrl:'',
  isLoading: false
}

export const contactFormSlice = createSlice({
  name:'contactForm',
  initialState,
  reducers:{
    addContactInfo:(state, action: PayloadAction<{key:string, value:string}>)=>{
      const {key, value} = action.payload
      return {
        ...state,
        [key]: value
      }
    },
    resetForm: ()=>{
      return {...initialState}
    }

  }
})

export const contactFormReducer = contactFormSlice.reducer
export const {addContactInfo,resetForm}=contactFormSlice.actions