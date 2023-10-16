import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image, Touchable } from 'react-native';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

// Conexões com o FIREBASE/Login/DB
import { Googlebutton } from '../../services/auth_google/google_sign';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Cadastro } from '../Cadastro/cadastro';
import { GoogleAuth } from '../../services/auth_google/google_api_id';
import jwt_decode from 'jwt-decode';
import Home from '../../page/home/home';

export function Login({ navigation, setUser }) {

  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);

  return (

    <View style={IndexStyle.contentLogin}>

      <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>

      <Text style={IndexStyle.textTopo}>Login</Text>

      <TextFormulario
        espaço='E-mail'
        valor={email}
        onChangeText={(novoEmail) => setEmail(novoEmail)}
        secureTextEntry={false}
      />

      <Formulario
        espaço='Senha'
        valor={senha}
        onChangeText={(novaSenha) => setSenha(novaSenha)}
      />

<GoogleOAuthProvider clientId="736920597440-dpnko0dvrq0une5t3bhhnfkc3t8l7hol.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={credentialResponse => {

                let decoded = jwt_decode(credentialResponse.credential);

                console.log(decoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }}

            />;
          </GoogleOAuthProvider>


      <Pressable style={IndexStyle.forget}>
        <Text style={IndexStyle.forgetText}>Esqueci minha senha</Text>
      </Pressable>

      <Pressable style={IndexStyle.button}>
        <Text style={IndexStyle.textBtn} onPress={Home}>Entrar</Text>
      </Pressable>

      <Text style={IndexStyle.textIcon}>Ou faça login com:</Text>

      <View style={IndexStyle.logos}>
        <Pressable>
          <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} onPress={Cadastro} />
        </Pressable>
        

        <Pressable>

        </Pressable>
        <Pressable>
          <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx} />
        </Pressable>
      </View>
    </View>
  );
};

