import { Container } from "react-bootstrap";
import Navigation from "../../components/Navigation/Navigation.tsx";
import { Route, Routes } from "react-router-dom";
import Contacts from "../../components/Contacts/Contacts.tsx";
import ContactForm from "../../components/ContactForm/ContactForm.tsx";


function App() {

  return (
    <>
      <Navigation/>
      <Container>
        <Routes>
          <Route path="/" element={<Contacts/>}/>
          <Route path="add-contact" element={<ContactForm/>}/>
          <Route path="edit-contact/:id" element={<ContactForm/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
