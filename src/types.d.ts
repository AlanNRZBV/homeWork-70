import { ContactFormState } from "./components/ContactForm/contactFormSlice.ts";

export interface IContact {
  name:string,
  photoUrl:string,
  id: string
}

export interface IContactModal extends IContact {
  phone:string,
  email:string,
}

export type ContactData = Omit<ContactFormState, 'isLoading'>