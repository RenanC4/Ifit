import auth from '@react-native-firebase/auth'; 

export class Auth {
  async login(user, password) {
    console.log(user, password)
    return auth()
    .signInWithEmailAndPassword(user, password)
    .then((response) => {
      console.log('user autorizado!', response);
      return response
    })
    .catch(error => {
      console.error(error);
    });
  }
  async signIn(user, password) {
    auth()
    .createUserWithEmailAndPassword(user, password)
    .then(() => {
     console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    console.error(error);
  });
  }
}