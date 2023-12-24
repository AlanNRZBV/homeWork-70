import ContactsItem from "./ContactsItem.tsx";
import { AppDispatch, RootState } from "../../app/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./contactsThunk.ts";

const Contacts = () => {
  const dispatch: AppDispatch = useDispatch()
  const contacts = useSelector((state:RootState)=>state.contacts.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      {contacts.map((item)=>(
      <ContactsItem name={item.name} id={item.id} email={item.email} phone={item.phone} photoUrl={item.photoUrl} key={item.id}/>
      ))}
    </div>
  );
};

export default Contacts;