import React, {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/img/pokeball.png";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import * as gapi from "react-dom/test-utils";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Header = () => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const logIn = useGoogleLogin({
    onSuccess: (response) => {
      console.log("Login Successful:", response);
      setUser(true); // Set the user state to true
      localStorage.setItem("user", true); // Store user data in localStorage as boolean
      console.log("user", localStorage);
      window.location.reload();
      // eslint-disable-next-line no-restricted-globals
      //history.push("/");
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });


  const logOut = async () => {
    try {
      await googleLogout();
      console.log('Logout Successful');
      setUser(null);
      localStorage.clear();
      console.log('user', localStorage);
      window.location.reload();
    } catch (error) {
      console.log('Logout Failed:', error);
    }
  };

  return (

      <header className="container-header mb-5">
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {user &&
                  <Nav.Link as={Link} to="/favorites">
                    Favorite</Nav.Link>}
            </div>
            <div className="d-flex align-items-center">
              <Link to="/">
                <img title="Go to home" alt="Go to home" src={logo} />
                <div className="ml-2">WELCOME TO YOUR POKEDEX</div>
              </Link>
            </div>
            <div>
              {user ? (
                  <button onClick={logOut}>Log out</button>
              ) : (
                  <button onClick={logIn}>Sign in with Google 🚀</button>
              )}
            </div>
          </div>
        </Container>
      </header>


  );

};

export default Header;
