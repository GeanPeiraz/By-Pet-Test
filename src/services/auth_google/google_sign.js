import React, { useEffect } from 'react';
import { Text, View, Pressable, Image, Touchable } from 'react-native';
import { useState } from 'react';
import Home from '../../page/home/home';


// Conexões com o FIREBASE/Login/DB
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import {GoogleAuth} from '../../services/auth_google/google_api_id'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './auth_google';

//npm i @react-native-google-signin/google-signin
/*
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  function SignIn (){
  const [value,setValue] = useState ('');
  const handleClick = () => {
    signInWithPopup(auth,provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }

  useEffect(() => {
     setValue(localStorage.getItem('email'))
  })

return (
  <div>
    {value?<Home/>:
     <button onClick={handleClick}>Entre com a Google </button>
    }
  </div>
)};
};

export default {SignIn, useWindowWidth};

/*/
