import { IContact } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts } from "./contactsThunk.ts";

interface ContactsState {
  contacts: IContact[];
  isLoading: boolean;
  isEmpty: boolean,
}

export const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  isEmpty: true
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    loadContacts: (state, action: PayloadAction<IContact[]>) => {
      state.contacts = action.payload

    },
    // checkIsEmpty: (state)=>{
    //   state.isEmpty = state.contacts.length <= 0
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const {checkIsEmpty} = contactsSlice.actions
