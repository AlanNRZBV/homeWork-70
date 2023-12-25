import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { AppDispatch, RootState } from '../../app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditMode } from '../ContactForm/contactFormSlice.ts';

const Navigation = () => {
  const dispatch: AppDispatch = useDispatch()
  const checkEditMode = useSelector((state:RootState)=>state.contactForm.isEditing)


  const clickHandler = ()=>{
    if(checkEditMode){
      dispatch(toggleEditMode())
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="text-black nav-link fs-3">Contacts</NavLink>
        <NavLink onClick={clickHandler} to="add-contact" className="btn btn-primary">Add contact</NavLink>
      </Container>
    </Navbar>
  );
};

export default Navigation;