import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'; 
import {LPOMoviments} from '../Constants/LpoMoviments'
import {EnduranceMoviments} from '../Constants/EnduranceMoviments'

function createLPO(username){
  LPOMoviments.forEach(moviment => {
    database()
    .ref(`/users/${username}/LPO/${moviment.moviment}`)
    .set({
      record: 0
    })
  })
}

function createEndurance(username){
  EnduranceMoviments.forEach(moviment => {
    database()
    .ref(`/users/${username}/Endurance/${moviment.moviment}`)
    .set({
      record: 0
    })
  })
}

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
  async signIn(username, email, password) {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      database()
      .ref(`/users`)
      .set({
       username,
       email
    })

      createLPO(username)
      createEndurance(username)
     console.log('User account created & signed in!');
     return true
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