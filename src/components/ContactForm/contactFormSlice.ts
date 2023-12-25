import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  photoUrl: string;
  isLoading?: boolean;
  isCorrect?: boolean;
}

export const initialState: ContactFormState = {
  name: '',
  phone: '',
  email: '',
  photoUrl: '',
  isLoading: false,
  isCorrect: false,
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
});

export const contactFormReducer = contactFormSlice.reducer;
export const { addContactInfo, resetForm, checkInput } =
  contactFormSlice.actions;
