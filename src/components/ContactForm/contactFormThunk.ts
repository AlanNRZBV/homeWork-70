import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import axiosAPI from '../../axiosAPI.ts';
import { IContactData } from '../../types';
import { contactFormSlice } from './contactFormSlice.ts';

export const postContact = createAsyncThunk<
  void,
  IContactData,
  { state: RootState }
>('contactForm/post', async (arg) => {
  try {
    const contact = {
      name: arg.name,
      email: arg.email,
      phone: arg.phone,
      photoUrl: arg.photoUrl,
    };
    await axiosAPI.post('contacts.json', contact);
  } catch (error) {
    console.log('Caught on try - POST CONTACT - ', error);
  }
});

export const fetchContactForEdit = createAsyncThunk<
  void,
  string,
  { state: RootState }
>('contactForm/fetch', async (arg, thunkAPI) => {
  const response = await axiosAPI.get(`contacts/${arg}.json`);
  if (response.data !== null) {
    const newContact = { ...response.data, id: arg };
    console.log(newContact);
    thunkAPI.dispatch(contactFormSlice.actions.fetchContactInfo(newContact));
    thunkAPI.dispatch(contactFormSlice.actions.toggleEditMode());
  }
});

export const editContact = createAsyncThunk<
  void,
  IContactData,
  { state: RootState }
>('contactForm/put', async (arg) => {
  try {
    const contact = {
      name: arg.name,
      email: arg.email,
      photoUrl: arg.photoUrl,
      phone: arg.phone
    }
    await axiosAPI.put(`contacts/${arg.id}.json`, contact);
  } catch (error) {
    console.log('Caught', error);
  }
});
