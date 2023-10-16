import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuth = ({ navigation }) => {
  return (

<GoogleOAuthProvider clientId="736920597440-dpnko0dvrq0une5t3bhhnfkc3t8l7hol.apps.googleusercontent.com">
<GoogleLogin
  onSuccess={credentialResponse => {
    
    var decoded = jwt_decode(credentialResponse.credential);

    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}

/>;
</GoogleOAuthProvider>
  )};

export default GoogleAuth;




