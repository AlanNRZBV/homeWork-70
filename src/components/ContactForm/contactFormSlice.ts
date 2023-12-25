import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContactForEdit } from './contactFormThunk.ts';
import { IContactData } from '../../types';

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  photoUrl: string;
  id?: string;
  isLoading?: boolean;
  isCorrect?: boolean;
  isEditing?: boolean;
}

export const initialState: ContactFormState = {
  name: '',
  phone: '',
  email: '',
  photoUrl: '',
  id:'',
  isLoading: false,
  isCorrect: false,
  isEditing: false
};

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    addContactInfo: (
      state,
      action: PayloadAction<{ key: string; value: string }>,
    ) => {
      const { key, value } = action.payload;

      return {
        ...state,
        [key]: value,
      };
    },
    fetchContactInfo: (state, action: PayloadAction<IContactData>) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.photoUrl = action.payload.photoUrl;
      state.id = action.payload.id
    },
    toggleEditMode: (state)=>{
      state.isEditing = !state.isEditing

    },
    checkInput: (state) => {
      const isNameCorrect = state.name.trim() !== '';
      const isPhoneCorrect =
        state.phone.trim() !== '' && state.phone.trim().length >= 10;
      state.isCorrect = isNameCorrect && isPhoneCorrect;
    },
    resetForm: () => {
      return { ...initialState };
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchContactForEdit.pending, (state)=>{
      state.isLoading = true
    })
    builder.addCase(fetchContactForEdit.fulfilled, (state)=>{
      state.isLoading = false
    })
    builder.addCase(fetchContactForEdit.rejected, (state)=>{
      state.isLoading = false
    })
  }
});

export const contactFormReducer = contactFormSlice.reducer;
export const { addContactInfo, resetForm, checkInput, toggleEditMode } =
  contactFormSlice.actions;
