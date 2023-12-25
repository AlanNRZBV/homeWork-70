import { IContact } from '../../types';
import { FC } from 'react';
import { AppDispatch } from '../../app/store.ts';
import { useDispatch } from 'react-redux';
import { toggleDisplay } from '../ContactModal/contactModalSlice.ts';
import { fetchContact } from "../ContactModal/contactModalThunk.ts";

const ContactsItem: FC<IContact> = ({ name, photoUrl ,id}) => {
  const dispatch: AppDispatch = useDispatch();
  // let userEmail
  //
  // if(email === ''){
  //   userEmail = 'No email provided'
  // }else{
  //   userEmail = email
  // }
  const clickOnContactHandle = ()=>{
    dispatch(toggleDisplay())
    dispatch(fetchContact(id))
  }

  return (
    <div
      onClick={clickOnContactHandle}
      className="d-flex align-items-center border border-1 p-3 mb-3 rounded-3 shadow-sm w-50"
    >
      <img
        src={photoUrl}
        alt="contact picture"
        style={{ height: '100px', width: '100px' }}
        className="rounded-circle object-fit-cover me-5"
      />
      <span className="text text-primary">Name: {name}</span>
    </div>
  );
};

export default ContactsItem;