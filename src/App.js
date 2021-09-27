import './App.css';
import { Container, Table, Navbar, Button, InputGroup, FormControl } from 'react-bootstrap';
// import axios from 'axios';
import HomePage from '../src/pages/HomePage'

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GaLang Group</Navbar.Brand>
        </Container>
      </Navbar>
      <HomePage />
    </div>
  );
}

export default App;
