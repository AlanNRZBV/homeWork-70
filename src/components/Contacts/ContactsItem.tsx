import { IContact } from "../../types";
import { FC } from "react";

const ContactsItem: FC<IContact> = ({name,phone,email,photoUrl}) => {
  const spanStyle: string = 'text text-primary'
  let userEmail

  if(email === ''){
    userEmail = 'No email provided'
  }else{
    userEmail = email
  }

  return (
    <div className="d-flex flex-column">
      <span className={spanStyle}>Name: {name}</span>
      <span className={spanStyle}>Phone: {phone}</span>
      <span className={spanStyle}>Email: {userEmail}</span>
      <img src={photoUrl} alt="contact picture"/>
    </div>
  );
};

export default ContactsItem;