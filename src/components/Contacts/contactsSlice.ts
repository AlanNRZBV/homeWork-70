import { IContact } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactsState {
  contacts: IContact[];
  isLoading: boolean;
}

export const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    loadContacts: (state, action: PayloadAction<IContact[]>) => {
      return {
        ...state,
        contacts: action.payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const {loadContacts}=contactsSlice.actions
