import { IContact } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts } from "./contactsThunk.ts";

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
      state.contacts = action.payload
    },
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
// export const {loadContacts}=contactsSlice.actions
