import React, { useState } from 'react';
import {  MDBContainer,  MDBCol,  MDBRow,  MDBInput,  MDBCheckbox}
from 'mdb-react-ui-kit';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


const Login = () => {

  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedInUser = result.user;
      const user = result.user;
      setUser(loggedInUser);
    })
    .catch( error => {
      console.log(error);
    })
  }


  const handleGithubSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedUser = result.user;
      const user = result.user;
      setUser(loggedUser);
    })
    .catch( error => {
      console.log(error);
    })
  }


    return (
        <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <Button className="mb-4 w-100" >Sign in</Button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <Button onClick={handleGoogleSignIn} className="mb-4 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
            <FaGoogle className="mx-2"/>
            Continue with Google
          </Button>

          <Button onClick={handleGithubSignIn} className="mb-4 w-100" size="lg" style={{backgroundColor: '#333333'}}>
            <FaGithub className="mx-2"/>
            Continue with Github
          </Button>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    );
};

export default Login;