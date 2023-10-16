import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

import {Home} from '../../page/home/home'
import { GoogleAuth } from '../../services/auth_google/google_sign';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//import{collection, query, orderBy, onSnapshot} from "firebase/firestore"
//import {db} from '../Cadastro/Auth';

export function Cadastro ({ navigation }) {

        const [email, setEmail] = useState ([]);
        const [senha, setSenha] = useState ([]);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

        return (
            <View style={IndexStyle.contentLogin}>
                <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>
                
                <Text style={IndexStyle.textTopo}>Cadastro</Text>

                <TextFormulario
                    espaço={'Nome'}
                />

                <TextFormulario
                    espaço={'E-mail'}
                />

                <Formulario
                    espaço={'Senha'}
                />

                <Formulario
                    espaço={'Repita a sua senha'}
                />
                
                <Pressable style={IndexStyle.button} onPress={ () => navigation.push('Home') }>
                    <Text style={IndexStyle.textBtn}onPress={handleLogin}>Cadastro</Text>
                </Pressable>

                <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

                <View style={IndexStyle.logos}>
                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_facebook.png')}style={IndexStyle.logoEx}/>
                    </Pressable>

                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx}onPress={handleLogin}/>
                    </Pressable>

                    <Pressable>
                        <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx}/>
                    </Pressable>
                </View>
            </View>
        )
}