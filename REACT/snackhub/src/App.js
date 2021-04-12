import './App.css';
import './pages/PageStyle.css';
import RouterComponent from './RouterComponent';
import {Navbar,Nav} from 'react-bootstrap';
function App() {
  return (
    <div className = "page">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home"><h1>SnackHub</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/editDB">Edit DB</Nav.Link>
          <Nav.Link href="/logIn">Log in</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>

      <RouterComponent></RouterComponent>
    </div>
  )
}

export default App;
