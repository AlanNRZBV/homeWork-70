import { Container } from "react-bootstrap";
import Navigation from "../../components/Navigation/Navigation.tsx";
import { Route, Routes } from "react-router-dom";
import Contacts from "../../components/Contacts/Contacts.tsx";


function App() {

  return (
    <>
      <Navigation/>
      <Container>
        <Routes>
          <Route path="/" element={<Contacts/>}/>
        </Routes>
        <span className="text-primary">TEST</span>
      </Container>
    </>
  )
}

export default App
