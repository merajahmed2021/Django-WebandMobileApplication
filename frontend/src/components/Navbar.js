import React from "react";
import { Navbar, Nav,Button} from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { logout } from '../../actions/auth';
import {logout} from '../actions/auth';


function NavBar({auth,logout}) {

  const navStyle={
    textDecoration:'none',fontWeight:'bolder'
  }

  const { isAuthenticated, user } =auth;

   const authLinks=(
     <Nav >
        <Nav.Link className="mx-1">
            <NavLink to='/create/post' style={navStyle}>Create Post</NavLink>
        </Nav.Link>
        <Nav.Link >
            <NavLink to='/dashboard' style={navStyle}>Dashboard</NavLink>
        </Nav.Link>
        <Nav.Link className="mx-1">
            <NavLink to='/profile/' style={navStyle}>Profile</NavLink>
        </Nav.Link>
        <Nav.Link className="mx-1">
          <Button onClick={logout}>Logout</Button>
        </Nav.Link>
     </Nav>
   )

  const guestLinks=(
    <Nav>
      <Nav.Link className="mx-1">
          <NavLink to='/login' style={navStyle}>Login</NavLink>
      </Nav.Link>
      <Nav.Link className="mx-1">
          <NavLink to='/signup' style={navStyle}>Signup</NavLink>
      </Nav.Link>
    </Nav>
  )

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{boxShadow:'5px 0 15px rgb(0 0 0 / 2'}}>
        <Navbar.Brand href="#home" className="mx-4">Blog Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto mx-3" >
                <Nav.Link  className="mx-1">
                    <NavLink to='/' style={navStyle}>Home</NavLink>
                </Nav.Link>
                <Nav.Link className="mx-1">
                    <NavLink to='/about' style={navStyle}>About us</NavLink>
                </Nav.Link>
                <Nav.Link className="mx-1">
                    <NavLink to='/post' style={navStyle}>Blogs</NavLink>
                </Nav.Link>
                <Nav.Link className="mx-1">
                    <NavLink to='/contact' style={navStyle}>Contact us</NavLink>
                </Nav.Link>
                {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
