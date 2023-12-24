import { ContactFormState } from "./components/ContactForm/contactFormSlice.ts";

export interface IContact {
  name:string,
  phone:string,
  email:string,
  photoUrl:string,
  id: string
}

export type ContactData = Omit<ContactFormState, 'isLoading'>