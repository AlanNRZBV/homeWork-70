import Backdrop from '../Backdrop/Backdrop.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { toggleDisplay } from './contactModalSlice.ts';
import { Spinner } from 'react-bootstrap';
import { deleteContact, fetchContacts } from '../Contacts/contactsThunk.ts';
import { useNavigate } from 'react-router-dom';
import { fetchContactForEdit } from '../ContactForm/contactFormThunk.ts';

const ContactModal = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const isModalShow = useSelector(
    (state: RootState) => state.contactModal.isShow,
  );
  const isModalLoading = useSelector(
    (state: RootState) => state.contactModal.isLoading,
  );
  const isModalDeleting = useSelector(
    (state: RootState) => state.contactModal.isDeleting,
  );
  const contactInfo = useSelector(
    (state: RootState) => state.contactModal.contactInfo,
  );

  const deleteOnClickHandler = async () => {
    await dispatch(deleteContact(contactInfo.id));
    await dispatch(fetchContacts());
  };

  let email;
  if (contactInfo.email === '') {
    email = 'Contact has no email';
  } else {
    email = contactInfo.email;
  }

  const editContactHandler = async () => {
    await dispatch(fetchContactForEdit(contactInfo.id));
    dispatch(toggleDisplay())
    navigate(`edit-contact/${contactInfo.id}`);
  };

  return (
    <div className={isModalShow ? 'd-block' : 'd-none'}>
      <div className="p-3 border border-1 rounded-3 position-absolute top-50 start-50 translate-middle bg-white z-2">
        {isModalLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="d-flex">
              <img
                src={contactInfo.photoUrl}
                alt="contact picture"
                style={{ height: '100px', width: '100px' }}
                className="rounded-circle object-fit-cover"
              />
              <div className="d-flex flex-column">
                <span>Name: {contactInfo.name}</span>
                <span>Phone: {contactInfo.phone}</span>
                <span>Email: {email}</span>
              </div>
              <button
                onClick={() => dispatch(toggleDisplay())}
                type="button"
                className="btn-close"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={editContactHandler}
                type="button"
                className="btn btn-secondary me-3"
                disabled={isModalDeleting}
              >
                Edit
              </button>
              <button
                onClick={deleteOnClickHandler}
                type="button"
                className="btn btn-outline-danger"
              >
                {isModalDeleting ? <Spinner /> : 'Delete'}
              </button>
            </div>
          </>
        )}
      </div>
      <Backdrop />
    </div>
  );
};

export default ContactModal;
