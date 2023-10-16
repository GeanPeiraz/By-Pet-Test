import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import Index from "./src/page/index";
import Home from './src/page/home/home';
import CadastroPet from './src/page/cadPet/cadastroPet';
import { Login } from './src/component/Login/login';
import { Cadastro } from './src/component/Cadastro/cadastro';
import {firebase} from './src/component/Login/login'
import {Googlebutton} from './src/services/auth_google/google_sign'

export default function App(){

  const [user, setUser] = useState();

  return !user ? <Login setUser={setUser} /> : <Home/>;

};