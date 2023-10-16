import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const provider = new GoogleAuthProvider();


const firebaseConfig = {
  apiKey: "AIzaSyD2gzgBos19WdkaMgBRPNMr_SytZh_3Ero",
  authDomain: "by-pet-native.firebaseapp.com",
  projectId: "by-pet-native",
  storageBucket: "by-pet-native.appspot.com",
  messagingSenderId: "766217528639",
  appId: "1:766217528639:web:1a332ef0ebb91b0369df8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, provider, db};




// Botão google credencial 


/*
<GoogleOAuthProvider clientId="<736920597440-b3t343fbhiljvut31mdberf06nf69thm.apps.googleusercontent.com>">
<GoogleLogin
onSuccess={credentialResponse => {
  console.log(credentialResponse);
}}
onError={() => {
  console.log('Login Failed');
}}
  />;
</GoogleOAuthProvider>
/*





//Ultilizando elementos de teste e enviar para a tela "Login" 

/*

import {auth} from "../../services/firebase/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

  const [emails, setEmails] = useState ([]);
  const [senhas, setSenhas] = useState ([]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    
    // Caso tenha sucesso;
    const user = userCredential.user;

    console.log(user);
    setUser(user);
  })

  //Menssagens de test-Erro 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }

/*
  useEffect(()=> {
    const q = query(collection(db,"user"));

    onSnapshot(q,(querySnapshot) =>{
      setEmails(querySnapshot.docs.map(doc=>({
        data: doc.data()
      })))
    })
  },[])


 // Autenticando com a google 

    /* <div className="Login">
      {
        emails.map(function(e,val){
          return (
            <p>{e?.data?.email}</p>
          )
        })
      }
      <p>{email[0]?.data?.email}</p>
    </div>
    */