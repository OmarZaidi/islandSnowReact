import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { HouseFill, Search, PersonFill, Cart, Facebook, Twitter, Pinterest, Instagram } from 'react-bootstrap-icons';

const TopMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link><Facebook /></Nav.Link>
          <Nav.Link><Twitter /></Nav.Link>
          <Nav.Link><Pinterest /></Nav.Link>
          <Nav.Link><Instagram /></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link><HouseFill /> </Nav.Link>
          <Nav.Link><Search /> </Nav.Link>
          <Nav.Link><PersonFill /> </Nav.Link>
          <NavDropdown title={<Cart />}>
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
);

const IslandSnowLogo = () => (
    <div className="row">
      <div className="col">
        <Image
            src="https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"
            alt="Island Snow Logo"
            className="img-fluid rounded mx-auto d-block py-1"
        />
      </div>
    </div>
);

const MiddleMenu = () => (
    <div className="row justify-content-center pt-4">
      <div className="col-1">
        <div className="dropdown-toggle"><strong> MEN</strong> </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong> WOMEN</strong> </div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong> KIDS</strong> </div>
        </div>
      </div>
      <div className="col-1">
        <div className="dropdown">
          <div className="dropdown-toggle"><strong> BRANDS</strong> </div>
        </div>
      </div>
      <div className="col-1">
        <strong> SEARCH</strong>
      </div>
    </div>
);

const FullWidthImage = () => (
    <div className="row justify-content-center">
      <Image
          src="https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"
          alt="Main Image"
          className="img-fluid pt-3"
      />
    </div>
);

const FooterMenu = () => (
    <footer style={{ backgroundColor: '#292929', color: 'white' }}>
      <Container>
        <div className="row">
          <div className="col">
            <h3>NAVIGATION</h3>
            <hr />
            <p>About Us</p>
            <p>Employment</p>
            <p>Videos</p>
          </div>
          <div className="col">
            <h3>MAIN MENU</h3>
            <hr />
            <p>Men</p>
            <p>Women</p>
            <p>Children</p>
          </div>
          <div className="col">
            <h3>CONNECT</h3>
            <hr />
            <p>Sign up for the latest updates</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter your email" />
              <div className="input-group-append">
                <button className="btn btn-dark" type="button">Join</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
);

const IslandSnow = () => (
    <Container>
      <TopMenu />
      <IslandSnowLogo />
      <MiddleMenu />
      <FullWidthImage />
      <FooterMenu />
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);
