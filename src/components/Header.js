import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './css/Header.css';

export class Header extends Component {

    state={
        showNav: true,
    }

    render() {
        return (
            /* <div>
                <nav>
                  <div className="logo">
                    <h4>Sheik Electronics</h4>
                  </div>
                  <ul className={this.state.showNav ? "navlinks navlinks_show" : "navlinks hide"}>
                      <li><a href="#0">Home</a></li>    
                      <li><a href="#">Electronics</a></li>    
                      <li><a href="#">Phones</a></li>    
                      <li><a href="#">Computers</a></li>    
                      <li><a href="#">Login</a></li>    
                  </ul> 
                    <div className="burger" onClick = {() => this.setState({showNav: !this.state.showNav})} >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
              <script src="HeadNav.js"></script>
            </div> */

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Sheik Electronics</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav justify className="justify mr-auto">
                    <Nav.Link href="#electronics">Electronics</Nav.Link>
                    <Nav.Link href="#phones">Phones</Nav.Link>
                    <Nav.Link href="#computers">Computers</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="../Home.js">
                        Login
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
