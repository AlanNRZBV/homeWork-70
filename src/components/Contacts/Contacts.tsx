import ContactsItem from './ContactsItem.tsx';
import { AppDispatch, RootState } from '../../app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './contactsThunk.ts';
import { Spinner } from 'react-bootstrap';
import ContactModal from '../ContactModal/ContactModal.tsx';

const Contacts = () => {
  const dispatch: AppDispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const isContactsLoading = useSelector(
    (state: RootState) => state.contacts.isLoading,
  );

  useEffect(() => {
     dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex flex-column align-items-center pt-5">
        {isContactsLoading ? (
          <Spinner />
        ) : (
          contacts.map((item) => (
            <ContactsItem
              name={item.name}
              id={item.id}
              photoUrl={item.photoUrl}
              key={item.id}
            />
          ))
        )}
      </div>
      <ContactModal />
    </>
  );
};

export default Contacts;
