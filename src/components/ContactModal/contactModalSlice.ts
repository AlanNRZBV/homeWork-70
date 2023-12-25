import { IContactModal } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContact } from './contactModalThunk.ts';
import { deleteContact } from '../Contacts/contactsThunk.ts';

interface ContactModalState {
  contactInfo: IContactModal;
  isShow: boolean;
  isLoading: boolean;
  isDeleting: boolean
}

export const initialState: ContactModalState = {
  contactInfo: { name: '', phone: '', photoUrl: '', email: '', id: '' },
  isShow: false,
  isLoading: false,
  isDeleting: false
};

export const contactModalSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    toggleDisplay: (state) => {
      state.isShow = !state.isShow;
    },
    addContact: (state, action: PayloadAction<IContactModal>) => {
      const { name, phone, photoUrl, email, id } = action.payload;
      state.contactInfo.name = name;
      state.contactInfo.phone = phone;
      state.contactInfo.photoUrl = photoUrl;
      state.contactInfo.email = email;
      state.contactInfo.id = id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchContact.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteContact.fulfilled, (state) => {
      state.isDeleting = false;
      state.isShow = false
    });
    builder.addCase(deleteContact.rejected, (state) => {
      state.isDeleting = false;
      state.isShow = false
    });

  },
});

export const contactModalReducer = contactModalSlice.reducer;
export const { toggleDisplay } = contactModalSlice.actions;
