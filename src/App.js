import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './App.css';
import Home from './page/home/Home';
import Artikel from './page/artikel/Artikel';
import Contact from './page/contact/Contact';
import Event from './page/event/Event';
import Gallery from './page/gallery/Gallery';
import Forum from './page/forum/Forum';
import Login from './page/login/Login';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component {
  
  addNavbar(){
    return(
      <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand className="font-weight-bold">KOMBAFIT</Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
                  <LinkContainer exact to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/artikel">
                    <Nav.Link>Artikel</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/gallery">
                    <Nav.Link>Gallery</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/event">
                    <Nav.Link>Event</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/forum">
                    <Nav.Link>Forum</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Button variant="outline-primary">Log in</Button>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
}
  render(){
     return (
        <Router>
          <div className="App">
            {this.addNavbar()}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/artikel">
                <Artikel />
              </Route>
              <Route path="/event">
                <Event />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/forum">
                <Forum />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
  );
  }
 
}

export default App;
